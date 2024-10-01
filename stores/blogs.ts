export const useBlogsStore = defineStore('blogs', {
    state: () => ({
        blogs: [],
        blogDetails: {}
    }),
    getters: {
        blogsData: (state) => state.blogs,
    },
    actions: {
        async getBlogs() {
            const self = this;
            await useFetch('https://dummyjson.com/posts', {
                onResponse({ response }) {
                    self.blogs = response._data.posts;
                },
            })
        },
        async getBlogDetails(id) {
            const self = this;
            await useFetch(`https://dummyjson.com/posts/${id}`, {
                onResponse({ response }) {
                    self.blogDetails = response._data;
                },
            })
        }
    },
})
