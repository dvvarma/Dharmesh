const INITIAL_STATE = {
    name: 'dummy',
    userList: [{name: 'PETER'}, {name: 'GANA'}]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_LIST': return state;
        default: return state
    }
}