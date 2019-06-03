export default {
    namespaced: true,
    state:{
        token:'',
        userInfo:{}
    },
    mutations:{
        SET_TOKEN(state, data) {
            state.token = data
        },
        SET_USER_INFO(state, data) {
            state.userInfo = data
        }
    }
}