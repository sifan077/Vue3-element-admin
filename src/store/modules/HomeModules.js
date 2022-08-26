let HomeModule = {
    state: {
        navBool: false,
        dialogFormVisible: false,
        uplistData: {},
    },
    mutations: {
        // 修改state的数据
        SET_NAVBOOL(state) {
            state.navBool = !state.navBool
        },
        SET_DIALOG(state, paylog) {
            state.dialogFormVisible = !state.dialogFormVisible;
            state.uplistData = paylog;
        },
        DIALOG(state) {
            state.dialogFormVisible = !state.dialogFormVisible;
            window.location.reload();
        }
    },
    action: {},
    getters: {}
}

export default HomeModule;