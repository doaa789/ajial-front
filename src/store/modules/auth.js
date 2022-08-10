import repository from "@/api/repository";

export default {
    state: () => ({
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    }),
    getters: {
        user: state => state.user,
        authenticated: state => state.user !== null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
    actions: {
        async login({ commit }, user) {

            // await repository.createSession();
            const { data } = await repository.login(user);
            commit('SET_USER', data);
            localStorage.user = JSON.stringify(data)
        },
        async signUp({ commit }, user) {

            await repository.createSession();
            const { data } = await repository.signUp(user);
            commit('SET_USER', data);
            localStorage.user = JSON.stringify(data)

        },

        async logout({ commit }) {
            // await repository.logout();
            commit('SET_USER', null);
            localStorage.removeItem('user');
        },
    }
}