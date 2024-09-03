export const dataReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state.map((res, i) => {
                if(action.id === i){
                    return {
                        ...res,
                        qty: res.qty + 1
                    }
                } else {
                    return res
                }
            })

        case 'decrement':
            return state.map((res, i) => {
                if(action.id === i){
                    return {
                        ...res,
                        qty: res.qty - 1
                    }
                } else {
                    return res
                }
            })

        case 'remove':
            return state.map((res, i) => {
                if(action.id === i){
                    return {
                        ...res,
                        qty: 0
                    }
                } else {
                    return res
                }
            })

        case 'confirmed':
            return state.map((res) => {
                return {
                    ...res, 
                    qty: 0
                }
            })
    
        default:
            throw Error('Unknown action: ' + action.type)
    }
}