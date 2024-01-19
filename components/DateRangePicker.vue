<script setup lang="ts">
import { ref, watch } from 'vue'
import { addWeeks, endOfWeek, format, startOfWeek } from 'date-fns'
import { cn } from '@/lib/utils'

const date = ref({
    start: new Date(),
    end: new Date(),
})

// Computed property for date display
const formattedDate = computed(() => {
    return `${format(date.value.start, 'EEE MMM d')} - ${format(date.value.end, 'EEE MMM d')}`;
});

const updateWeek = (weeks: number) => {
    date.value.start = startOfWeek(addWeeks(date.value.start, weeks));
    date.value.end = endOfWeek(date.value.start);
};

</script>

<template>
    <Button @click="updateWeek(-1)">
        <Icon name="lucide:arrow-left-square" />
    </Button>
    <Popover>
        <PopoverTrigger as-child>
            <Button id="date" :class="cn(
                'w-[260px] justify-start text-left font-normal',
                !date && 'text-muted-foreground',
            )">
                <Icon class="mr-2" name="lucide:calendar" />
                <span>
                    <span>{{ formattedDate }}</span>
                </span>
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0" :align="'end'" :avoid-collisions="true">
            <Calendar v-model.range="date" :columns="2" />
        </PopoverContent>
    </Popover>
    <Button @click="updateWeek(1)">
        <Icon name="lucide:arrow-right-square" />
    </Button>
</template>