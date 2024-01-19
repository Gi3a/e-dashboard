<template>
    <Button @click="changeDate(-1)">
        <Icon name="lucide:arrow-left-square" />
    </Button>
    <Popover class="">
        <PopoverTrigger as-child>
            <Button :class="cn(
                'w-[auto] justify-start text-left font-normal',
                !date && 'text-muted-foreground',
            )">
                <Icon name="lucide:calendar" class="mr-2 h-4 w-4" />
                <span>{{ date ? format(date, "EEE MMM d") : "Pick a date" }}</span>
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
            <Calendar v-model="date" />
        </PopoverContent>
    </Popover>
    <Button @click="changeDate(+1)">
        <Icon name="lucide:arrow-right-square" />
    </Button>
</template>

<script setup lang="ts">
import { addDays, format } from 'date-fns'

import { ref } from 'vue'
import { cn } from '@/lib/utils'
const date = ref(new Date());

const changeDate = (days: number) => {
    date.value = addDays(date.value, days);
};
</script>