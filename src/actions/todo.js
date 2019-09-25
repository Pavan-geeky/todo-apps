
export const addTask = (formData) => {
    return {
        type: 'ADD_TASK',
        payload: formData
    }
}

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}

export const loading = (loading) => {
    return {
        type: 'LOADING',
        payload: loading
    }
}

export const loadData = (formData) => {
    return {
        type: 'LOAD_DATA',
        payload: formData
    }
}

export const editData = (formData) => {
    return {
        type: 'EDIT_DATA',
        payload: formData
    }
}

//firebase CREATE
export const createTask = (formData) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('tasks').add({ 
            ...formData
        }).then(() => {
            dispatch(addTask(formData))
            dispatch(loading(false))
        }).catch((err) => {
            console.log(err);
        })
    }
}

//firebase - GET - Function
function getDataFromFirebase(dispatch, getState, { getFirestore }) {
    const firestore = getFirestore();
        firestore.collection('tasks').get().then((snapshot) => {
            let tasks = []
            snapshot.docs.forEach(doc => {
                let task = {}
                task['name'] = doc.data().name;
                task['taskId'] = doc.data().taskId
                task['isCompleted'] = doc.data().isCompleted
                tasks.push(task)
            })   
            dispatch(loadData(tasks))
            dispatch(loading(false))
        })
}

// Firebase - REMOVE
export const removeTask = (taskId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const deleteQuery = firestore.collection('tasks').where('taskId', '==', taskId);
        deleteQuery.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.delete();
            })
            getDataFromFirebase(dispatch, getState, { getFirestore })
        }).catch(err => {
            console.log(err)
        })
    }
}

// Firebase - EDIT
export const editTask = (formData) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const deleteQuery = firestore.collection('tasks').where('taskId', '==', formData.taskId);
        deleteQuery.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.update({
                    name: formData.name
                });
            })
            getDataFromFirebase(dispatch, getState, { getFirestore })
        }).catch(err => {
            console.log(err)
        })
    }
}

//Firebase - update - isComplete
export const editComplete = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const deleteQuery = firestore.collection('tasks').where('taskId', '==', id);
        deleteQuery.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.update({
                    isCompleted: true
                });
            })
            getDataFromFirebase(dispatch, getState, { getFirestore })
        }).catch(err => {
            console.log(err)
        })
    }
}

//Firebase - GET 
export const getData = () => {
    return (dispatch, getState, { getFirestore }) => {
        getDataFromFirebase(dispatch, getState, { getFirestore })
    }
}