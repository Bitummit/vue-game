import { createStore } from 'vuex'

const createPersistPlugin = () => {
    return (store) => {
        store.subscribe(mutation => {
            localStorage.setItem(`time`, JSON.stringify(store.state.time))
            localStorage.setItem(`countGames`, JSON.stringify(store.state.countGames))
            localStorage.setItem(`difficulty`, JSON.stringify(store.state.difficulty))
        })
    }
}

const store = createStore({
    state() {
        return {
            time: 0,
            difficulty: 1,
            operations: [],
            countGames: JSON.parse(localStorage.getItem('countGames')) || 0,

        }
    },
    mutations: {
        increment(state) {
            state.countGames++
        },
        setCountGamesValue(state, value) {
            state.countGames = value
        },
        setTimeValue(state, value) {
            state.time = value
        },
        setDifValue(state, value) {
            state.difficulty = value
        },
        setOperationsValue(state, value) {
            state.operations = value
        },
    },
    actions: {},
    plugins: [createPersistPlugin()],
})

export default store