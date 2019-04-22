const initState = {
    projects: [
        { id: 1, title: 'finish redux playlist', content: 'complete the net ninja tutorial for a react redux firebase app' },
        { id: 2, title: 'study redux code', content: 'read over and analyze Isaks code' },
        { id: 3, title: 'build custom events redux', content: 'create working redux functions for new custom event page' },
        { id: 4, title: 'build custom events react', content: 'create the react front-end framework for the components' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project has been created', action.project)
    }
    return state
}

export default projectReducer