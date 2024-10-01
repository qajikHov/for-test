<template>
    <div class="" v-if="blogs.blogDetails">
        <h1 class="text-h2">{{ blogs.blogDetails?.title }}</h1>
        <p>{{ blogs.blogDetails?.body }}</p>
    </div>
</template>

<script setup lang="ts">
import { useBlogsStore } from "~/stores/blogs";

const blogs = useBlogsStore();
const route = useRoute();

await blogs.getBlogDetails(route.params.id);

useSeoMeta({
    title: blogs.blogDetails?.title,
    ogTitle: blogs.blogDetails?.title,
    description: blogs.blogDetails?.body,
    ogDescription: blogs.blogDetails?.body,
    twitterCard: 'summary_large_image',
})
</script>
