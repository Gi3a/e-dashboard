import { defineStore } from 'pinia'

export const useAppointmentStore = defineStore('appointment', () => {
    const filteredAppointments = ref({
        from: Date,
        to: Date,
        business_id: 0,
        specialist_id: 0,
        service_id: 0,
        category_id: 0,
        status: '',
        notes: ''
    });

    // Get Appointments (including filters)

  
    return {
        filteredAppointments
    }
  })