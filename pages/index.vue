<template>
    <div class="">
        <v-container>
            <v-row
                align="start"
                style="height: 150px;"
            >
                <v-col
                    v-for="(blog, index) in blogs.blogsData"
                    :key="index"
                    cols="3"
                >
                    <v-card
                        class="mx-auto"
                        hover
                        @click="handleBlogDetails(blog.id)"
                    >
                        <v-card-item>
                            <v-card-title>
                                {{ blog.title }}
                            </v-card-title>

                            <div class="d-flex ga-2 flex-wrap">
                                <v-chip v-for="chip in blog.tags">
                                    {{ chip }}
                                </v-chip>
                            </div>
                        </v-card-item>

                        <v-card-text>
                            {{ blog.body }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { useBlogsStore } from "~/stores/blogs";
const blogs = useBlogsStore();

blogs.getBlogs();

const handleBlogDetails = (id) => {
    navigateTo(`/posts/${id}`);
}
</script>

<style scoped>

</style>
