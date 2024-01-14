
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { cn } from '@/lib/utils'


const user = useSupabaseUser();
const businessStore = useBusinessStore();

const businesses = ref([]);
const user_id: any = user?.value?.id;

// Fetch businesses and update the selected business
const fetchBusinesses = async () => {
    const response: any = await businessStore.getAllBusinessess(user_id);
    businesses.value = response?.data;

    // Initialize the selectedBusiness with the first business if available
    if (businesses.value.length > 0) {
        selectedBusiness.value = businesses.value[0];
        businessStore.setSelectedBusiness(businesses.value[0]);
    }
}
// Fetch businesses on component mount
onMounted(fetchBusinesses);

interface Business {
    id: string;
    name: string;
    owner_id: string;
    address: string;
    type: string;
}

const open = ref(false)
const showNewBusinessDialog = ref(false)

// Initialize selectedBusiness with a default value or from the store
const selectedBusiness = ref<Business>(businessStore.selectedBusiness?.value || {});

// Watch for changes and update the store
watch(selectedBusiness, (newBusiness) => {
    businessStore.setSelectedBusiness(newBusiness);
});
</script>

<template>
    <Dialog v-model:open="showNewBusinessDialog">
        <Popover v-model:open="open">
            <PopoverTrigger as-child>
                <Button variant="outline" role="combobox" aria-expanded="open" aria-label="Select a business"
                    :class="cn('w-[300px] justify-between', $attrs.class ?? '')">
                    <Avatar class="mr-2 h-5 w-5">
                        <AvatarImage :src="`https://avatar.vercel.sh/${selectedBusiness.id}.png`"
                            :alt="selectedBusiness.name" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    {{ selectedBusiness.name }}
                    <Icon name="radix-icons:caret-sort" class="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent class="w-[300px] p-0">
                <Command :filter-function="(list, term) => list.filter(i => i.name?.toLowerCase()?.includes(term))">
                    <CommandList>
                        <CommandInput placeholder="Search business..." />
                        <CommandEmpty>No business found.</CommandEmpty>
                        <CommandGroup heading="Businessess">
                            <CommandItem v-for="business in businesses" :key="business.id" :value="business" class="text-sm"
                                @select="() => {
                                    selectedBusiness = business
                                    open = false
                                }">
                                <Avatar class="mr-2 h-5 w-5">
                                    <AvatarImage :src="`https://avatar.vercel.sh/${business.id}.png`" :alt="business.id"
                                        class="grayscale" />
                                    <AvatarFallback>SC</AvatarFallback>
                                </Avatar>
                                {{ business.name }}
                                <Icon name="radix-icons:check" :class="cn('ml-auto h-4 w-4',
                                    selectedBusiness.id === business.id
                                        ? 'opacity-100'
                                        : 'opacity-0',
                                )" />
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                    <CommandSeparator />
                    <CommandList>
                        <CommandGroup>
                            <DialogTrigger as-child>
                                <CommandItem value="create-business" @select="() => {
                                    open = false
                                    showNewBusinessDialog = true
                                }">
                                    <Icon class="mr-2" name="radix-icons:plus-circled" />
                                    Create Business
                                </CommandItem>
                            </DialogTrigger>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create business</DialogTitle>
                <DialogDescription>
                    Add a new business to manage products and customers.
                </DialogDescription>
            </DialogHeader>
            <div>
                <div class="space-y-4 py-2 pb-4">
                    <div class="space-y-2">
                        <Label for="name">Business name</Label>
                        <Input id="name" placeholder="Acme Inc." />
                    </div>
                    <div class="space-y-2">
                        <Label for="plan">Subscription plan</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a plan" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="free">
                                    <span class="font-medium">Free</span> -
                                    <span class="text-muted-foreground">
                                        Trial for two weeks
                                    </span>
                                </SelectItem>
                                <SelectItem value="pro">
                                    <span class="font-medium">Pro</span> -
                                    <span class="text-muted-foreground">
                                        $9/month per user
                                    </span>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <DialogFooter>
                <Button variant="outline" @click="showNewBusinessDialog = false">
                    Cancel
                </Button>
                <Button type="submit">
                    Continue
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>