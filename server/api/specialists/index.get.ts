import { serverSupabaseClient } from "#supabase/server";

interface Specialist {
    id: number;
    business_id: number;
    profile_id: string;
}

export default defineEventHandler(async (event) => {
    try {
        // Init
        const query = getQuery(event);
        const client = await serverSupabaseClient(event);
        const businessID = query.business_id;

        // Query
        let specialistsQuery: any = client.from("specialists").select("*");

        if (businessID) {
            specialistsQuery = specialistsQuery.eq("business_id", businessID);
        }

        // Executing the specialists query
        const { data: specialistsData, error: specialistsError } = await specialistsQuery;

        // Response
        if (specialistsError)
            throw createError({
                statusCode: parseInt(specialistsError.code),
                statusMessage: specialistsError.message,
            });

        const profileIds = specialistsData.map((specialist: Specialist) => specialist.profile_id);

        // Запрос к profiles
        const usersQuery = client.from("profiles").select("*").in("id", profileIds);

        // Выполнение запроса к profiles
        const { data: usersData, error: usersError } = await usersQuery;

        if (usersError)
            throw createError({
                statusCode: parseInt(usersError.code),
                statusMessage: usersError.message,
            });

        // Группировка данных
        const combinedData = specialistsData.map((specialist: Specialist) => {
            return {
                business_id: specialist.business_id,
                specialist_id: specialist.id,
                userData: usersData.find((user: any) => user?.id === specialist.profile_id)
            };
        });

        setResponseStatus(event, 200);
        return { combinedData: combinedData };
    } catch (error) {
        const supabaseError = error as SupabaseError;
        setResponseStatus(event, 500);
        return { message: supabaseError.message };
    }
})