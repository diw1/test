export default (state = {}, action) => {
    switch (action.type) {
        case 'MODAL_CHANGE':
            return {
                ...state,
                modal: action.payload
            }
        case 'SUCCESS':
            return {
                ...state,
                success: action.payload
            }
        case 'FAIL':
            return {
                ...state,
                fail: action.payload
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}
