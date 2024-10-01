export const useUserStore = defineStore('user', {
    state: () => ({
        username: '',
        email: '',
    }),
    getters: {
        user: (state) => {
            return {
                ...state,
            }
        },
    },
    actions: {
        authUser() {
            this.username = 'User 2'
            this.email = 'user2@example.com'
        },
    },
})
