import { defineStore } from 'pinia'

export const useSpecialistStore = defineStore('specialist', () => {
    const allSpecialists: any = ref([]);

    // Get All Specialists
    const getAllSpecialists = async (business_id: string) => {
        try {
            const request: any = await $fetch(`/api/specialists?business_id=${business_id}`);
            allSpecialists.value = request?.data;
            return request;
        } catch (error) {
            console.error('Error fetching businesses:', error);
        }
    }


    return {
        allSpecialists,
        getAllSpecialists
    }
},
    { persist: true }
);