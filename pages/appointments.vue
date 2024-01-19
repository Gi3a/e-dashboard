<template>
    <div class="hidden flex-col md:flex">
        <div class="flex-1 space-y-4 p-8 pt-6">
            <div class="flex items-center justify-between space-y-2">
                <h2 class="text-3xl font-bold tracking-tight">
                    Appointments
                </h2>
                <div class="flex items-center space-x-2">
                    <DatePicker />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "dashboard",
});

const user = useSupabaseUser();
</script>

<!--
    
    при заходе на дэшборд получить все данные (сотрудинокв, специалистов) через useAsyncData
    1. Получить все appointment
    2. Вставить данные из стора

-->