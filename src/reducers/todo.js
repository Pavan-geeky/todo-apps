const initialState = {
    tasks: [],
    loading: false
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [ ...state.tasks, action.payload ]
            }
        case 'DELETE_TASK': 
            let tasks = state.tasks.filter(task => {
                return task.id !== action.payload
            })
            return {
                tasks
            }
        case 'LOADING': 
            return {
                ...state, loading: action.payload
            }
        case 'LOAD_DATA':
            return {
                ...state, tasks: [...action.payload]
            }
        default: 
            return state
    }
}

export default todoReducer;

