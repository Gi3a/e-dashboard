<template>
    <Dialog :class="theme">
        <DialogTrigger
            class="w-full relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            Report
        </DialogTrigger>
        <DialogContent class="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>Report an issue</DialogTitle>
                <DialogDescription>
                    What area are you having problems with?
                </DialogDescription>
            </DialogHeader>
            <div class="grid gap-2">
                <div class="grid gap-2">
                    <Label for="area">Area</Label>
                    <Select default-value="billing">
                        <SelectTrigger id="area">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="team">
                                Team
                            </SelectItem>
                            <SelectItem value="billing">
                                Billing
                            </SelectItem>
                            <SelectItem value="account">
                                Account
                            </SelectItem>
                            <SelectItem value="deployments">
                                Deployments
                            </SelectItem>
                            <SelectItem value="support">
                                Support
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div class="grid gap-2">
                <Label for="description">Description</Label>
                <Input id="description" placeholder="I need help with..." />
            </div>
            <DialogFooter class="sm:justify-start">
                <DialogClose as-child>
                    <Button type="button" variant="secondary">
                        Cancel
                    </Button>
                    <Button>Submit</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
const generalStore = useGeneralStore();

const theme = computed(() => generalStore.theme);
</script>