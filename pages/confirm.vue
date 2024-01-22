<script setup lang="ts">

const client = useSupabaseClient();
const user = useSupabaseUser();
const businessStore = useBusinessStore();
const specialistStore = useSpecialistStore();

const logout = async () => {
    await client.auth.signOut();
    navigateTo("/login");
};



// Fetch Businesses
const user_id: any = user?.value?.id;
const fetchBusinesses = async () => {
    const response: any = await businessStore.getAllBusinessess(user_id);
}
await fetchBusinesses();

// Fetch Specialists
const current_business: any = businessStore.selectedBusiness.id;
const fetchSpecialists = async () => {
    const response: any = await specialistStore.getAllSpecialists(current_business);
}
await fetchSpecialists();


// navigateTo("/");
</script>
<template>
    <span v-if="user_id">
        <Icon name="lucide:shield-check" />
        User
    </span>
    <br />
    <span v-if="businessStore.allBusinessess">
        <Icon name="lucide:shield-check" />
        Businesses
    </span>
    <br />
    <Button @click="logout">
        Again
    </Button>
</template>