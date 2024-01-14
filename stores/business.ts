import { defineStore } from 'pinia'

export const useBusinessStore = defineStore('business', () => {
    const selectedBusiness = ref({
        id: '',
        name: '',
        owner_id: '',
        address: '',
        type: ''
    });
    const allBusinessess = ref([]);

    // Get All Bussinesses
    const getAllBusinessess = async (owner_id: string) => {
        const request = await $fetch(`/api/businessess?owner_id=${owner_id}`);
        return request;
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
})