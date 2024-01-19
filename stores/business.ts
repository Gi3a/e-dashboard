import { defineStore } from 'pinia'

export const useBusinessStore = defineStore('business', () => {
    const selectedBusiness: any = ref({
        id: '',
        name: '',
        owner_id: '',
        address: '',
        type: ''
    });
    const allBusinessess: any = ref([]);

    // Get All Bussinesses
    const getAllBusinessess = async (owner_id: string) => {
        try {
            const request: any = await $fetch(`/api/businessess?owner_id=${owner_id}`);
            allBusinessess.value = request?.data;
            if (allBusinessess.value.length > 0) {
                setSelectedBusiness(allBusinessess.value[0]);
            }
            return request;
        } catch (error) {
            console.error('Error fetching businesses:', error);
        }
    }

    const setSelectedBusiness = (business: any) => {
        selectedBusiness.value = business;
    }


    return {
        selectedBusiness,
        allBusinessess,
        setSelectedBusiness,
        getAllBusinessess
    }
},
    { persist: true }
);