export const ApplicationInitialState = {
    list: [],
    scannedItems: {
        list:[],
        timeStamp:''
    },
    terminatedItems: {
        list:[],
        timeStamp:''
    }
}

export const Actions = {
    GET_ITEMS: 'GET_ITEMS',
    TERMINATE_ITEM: 'TERMINATE_ITEM',
    SCAN_ITEM: 'SCAN_ITEM',
    SELECT_ITEM: 'SELECT_ITEM'
}

export const ApplicationReducer = (state, action) => {
    const {payload, type} = action

    switch(type) {
        case Actions.TERMINATE_ITEM:
            return {
                ...state,
                terminatedItems: {
                    list: payload,
                    timeStamp:new Date(Date.now()).toLocaleString()
                    }
            }
        case Actions.SCAN_ITEM: 
            return {
                ...state,
                scannedItems: {
                    list: payload,
                    timeStamp:new Date(Date.now()).toLocaleString()
                }
            }
        default: 
            return {
                ...state
            }
    }
}