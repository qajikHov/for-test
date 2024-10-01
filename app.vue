<template>
    <v-layout ref="app" class="rounded rounded-md">
        <v-app-bar color="grey-lighten-2" name="app-bar">

        </v-app-bar>

        <v-navigation-drawer
            color="grey-darken-2"
            name="drawer"
            permanent
        >
            <div class="d-flex justify-center align-center h-100">

            </div>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <NuxtPage />
        </v-main>

        <v-footer
            name="footer"
            app
        >

        </v-footer>
    </v-layout>
</template>

<script setup>

</script>
