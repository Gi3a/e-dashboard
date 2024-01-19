<template>
    <div
        class="lg:w-1/2 xl:w-1/2 mx-auto my-auto items-start justify-center gap-6 rounded-lg p-10 md:grid lg:grid-cols-1 xl:grid-cols-1">
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle>"{{ currentBusiness.name }}" Specialists</CardTitle>
                    <CardDescription>
                        Invite your team members to collaborate
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="flex space-x-2">
                        <Input placeholder="Example: specialist@mail.com" read-only />
                        <Button variant="secondary" class="shrink-0">
                            Send invitation
                        </Button>
                    </div>
                    <Separator class="my-4" />
                    <div class="space-y-4">
                        <h4 class="text-sm font-medium">
                            Team members
                        </h4>
                        <div class="grid gap-6">
                            <div class="flex items-center justify-between space-x-4">
                                <div class="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/03.png" />
                                        <AvatarFallback>OM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p class="text-sm font-medium leading-none">
                                            Olivia Martin
                                        </p>
                                        <p class="text-sm text-muted-foreground">
                                            m@example.com
                                        </p>
                                    </div>
                                </div>
                                <Select default-value="edit">
                                    <SelectTrigger class="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">
                                            Can edit
                                        </SelectItem>
                                        <SelectItem value="view">
                                            Can view
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div class="flex items-center justify-between space-x-4">
                                <div class="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/01.png" />
                                        <AvatarFallback>SD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p class="text-sm font-medium leading-none">
                                            Sofia Davis
                                        </p>
                                        <p class="text-sm text-muted-foreground">
                                            p@example.com
                                        </p>
                                    </div>
                                </div>
                                <Select default-value="view">
                                    <SelectTrigger class="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">
                                            Can edit
                                        </SelectItem>
                                        <SelectItem value="view">
                                            Can view
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Container>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: "dashboard",
});

const user = useSupabaseUser();
const businessStore = useBusinessStore();

const currentBusiness = businessStore.selectedBusiness;
</script>