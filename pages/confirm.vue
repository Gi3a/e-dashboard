<script setup lang="ts">

const user = useSupabaseUser();
const businessStore = useBusinessStore();


const user_id: any = user?.value?.id;

// Fetch Businesses
const fetchBusinesses = async () => {
    const response: any = await businessStore.getAllBusinessess(user_id);
}

await fetchBusinesses();

console.log(businessStore.selectedBusiness)

// navigateTo("/");
</script>
<template>
    <span v-if="user_id">
        <Icon name="lucide:shield-check" />
        User
    </span>
    <br />
    <span v-if="businessStore.allBusinessess">
        <Icon name="lucide:shield-check" />
        Businesses
    </span>
    <br />
    <NuxtLink to="/">
        Initializing...
    </NuxtLink>
</template>