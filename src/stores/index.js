import { createStore } from 'vuex'

// const createPersistPlugin = () => {
//     return (store) => {
//         store.subscribe(mutation => {
//             localStorage.setItem(`time`, JSON.stringify(store.state.time))
//         })
//     }
// }

const store = createStore({
    state() {
        return {
            // time: JSON.parse(localStorage.getItem('time'))
            time: 10,

        }
    },
    mutations: {
        setTimeValue(state, value) {
            state.time = value
        }
    },
    actions: {},
    // plugins: [createPersistPlugin()],
})

export default store