<template>
    <Menubar class="rounded-none border-b border-none px-2 lg:px-4" :class="theme">
        <MenubarMenu>
            <MenubarTrigger class="font-bold">
                E-Service
            </MenubarTrigger>
            <MenubarContent>
                <NuxtLink to="/">
                    <MenubarItem>
                        Dashboard
                    </MenubarItem>
                </NuxtLink>
                <MenubarSeparator />
                <MenubarItem>About</MenubarItem>
                <MenubarSeparator />
                <ModalReport />
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger class="relative">
                Appointments
            </MenubarTrigger>
            <MenubarContent>
                <MenubarSub>
                    <MenubarSubTrigger>New</MenubarSubTrigger>
                    <MenubarSubContent class="w-[230px]">
                        <MenubarItem>
                            Anonymus Client <MenubarShortcut>⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            Authorized Client <MenubarShortcut>⇧⌘N</MenubarShortcut>
                        </MenubarItem>
                    </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <NuxtLink to="/appointments">
                    <MenubarItem>
                        View All <MenubarShortcut>⌘O</MenubarShortcut>
                    </MenubarItem>
                </NuxtLink>
                <MenubarSeparator />
                <MenubarItem>
                    Search<MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                    Notification <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger class="relative">
                Services
            </MenubarTrigger>
            <MenubarContent>
                <MenubarItem>
                    View All <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                    Search<MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                    Create Service <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger class="relative">
                Specialists
            </MenubarTrigger>
            <MenubarContent>
                <NuxtLink to="/specialists">
                    <MenubarItem>
                        View All <MenubarShortcut>⌘O</MenubarShortcut>
                    </MenubarItem>
                </NuxtLink>
                <MenubarSeparator />
                <NuxtLink to="/specialists">
                    <MenubarItem>
                        Invite Specialist <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                </NuxtLink>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <NavigationBusinessSwitcher />
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>
                <Avatar class="h-4 w-4 mr-1">
                    <AvatarImage :src="user_avatar" alt="@shadcn" />
                    <AvatarFallback>
                        {{ user_name }}
                    </AvatarFallback>
                </Avatar>
                Account
            </MenubarTrigger>
            <MenubarContent>
                <MenubarLabel class="font-normal flex">
                    <div class="flex flex-col space-y-1">
                        <p class="text-sm font-medium leading-none">
                            {{ user_name }}
                        </p>
                        <p class="text-xs leading-none text-muted-foreground">
                            {{ user_email }}
                        </p>
                    </div>
                </MenubarLabel>
                <MenubarSeparator />
                <MenubarItem>
                    Profile
                </MenubarItem>
                <MenubarItem>
                    Billing
                </MenubarItem>
                <MenubarItem>
                    Settings
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem @click="logout">
                    Logout
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>
                <Icon v-if="theme === 'dark'" name="lucide:sun" />
                <Icon v-else name="lucide:moon" />
            </MenubarTrigger>
            <MenubarContent>
                <MenubarItem @click="generalStore.toggleTheme">
                    <Icon name="lucide:sun" class="mr-2" />
                    Light
                </MenubarItem>
                <MenubarItem @click="generalStore.toggleTheme">
                    <Icon name="lucide:moon" class="mr-2" />
                    Dark
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
    </Menubar>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();

const user_email: string = user?.value?.user_metadata?.email;
const user_name: string = user?.value?.user_metadata?.full_name;
const user_avatar: string = user?.value?.user_metadata?.avatar_url;



const generalStore = useGeneralStore();

const theme = computed(() => generalStore.theme);

const logout = async () => {
    await client.auth.signOut();
    navigateTo("/login");
};
</script>