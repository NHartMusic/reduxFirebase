const initState = {
    projects: [
        { id: 1, title: 'Finish Redux-Firebase Playlist', content: 'complete the net ninja tutorial for a react redux firebase app' },
        { id: 2, title: 'Study Redux Code', content: 'read over and analyze Isaks code' },
        { id: 3, title: 'Build Custom Events Redux', content: 'create working redux functions for new custom event page' },
        { id: 4, title: 'Build Custom Events React', content: 'create the react front-end framework for the components' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project has been created', action.project)
            return state
        case 'CREATE_PROJECT_ERROR': 
            console.log('create project error', action.err)
            return state
        default: 
            return state
    }
}

export default projectReducer