<template>
    <div class="h-full items-start justify-center gap-6 rounded-lg p-10 md:grid lg:grid-cols-3 xl:grid-cols-3">
        <Container />
        <Container>
            <Card>
                <CardHeader class="space-y-1">
                    <CardTitle class="text-2xl">
                        Login
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to log in to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent class="grid gap-4">
                    <div class="grid grid-cols-3 gap-6">
                        <Button variant="outline" @clikc="signInWithFacebook">
                            <Icon name="devicon:apple" class="mr-2" />
                            Apple
                        </Button>
                        <Button variant="outline" @clikc="signInWithFacebook">
                            <Icon name="devicon:facebook" class="mr-2" />
                            Facebook
                        </Button>
                        <Button variant="outline" @click="signInWithGoogle">
                            <Icon name="devicon:google" class="mr-2" />
                            Google
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Container>
        <Container />
    </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const signInWithFacebook = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
        options: {
            redirectTo: `${window.location.origin}/confirm`,
        },
    });
    if (error) console.log(error);
};


const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${window.location.origin}/confirm`,
        },
    });
    if (error) console.log(error);
};
</script>