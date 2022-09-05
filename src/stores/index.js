import { createStore } from 'vuex'

const createPersistPlugin = () => {
    return (store) => {
        store.subscribe(mutation => {
            localStorage.setItem(`fixedTime`, JSON.stringify(store.state.fixedTime))
        })
    }
}

const store = createStore({
    state() {
        return {
            fixedTime: JSON.parse(localStorage.getItem('fixedTime')),
            time: 0,
            difficulty: 1,
            operations: [],
            countGames: 1,

        }
    },
    mutations: {
        increment(state) {
            state.countGames++
        },
        setTimeValue(state, value) {
            state.time = value
        },
        setDifValue(state, value) {
            state.difficulty = value
        },
        setOperationsValue(state, value) {
            state.operations = value
            console.log(value)
            console.log(state.operations)
        },
    },
    actions: {},
    // plugins: [createPersistPlugin()],
})

export default store