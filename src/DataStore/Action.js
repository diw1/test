import {post} from '../Component/Util/api'

export const onModalChange = (newState) => ({
    type: 'MODAL_CHANGE',
    payload: newState
})

export const onSuccess = (newState) => ({
    type: 'SUCCESS',
    payload: newState
})

export const onFail = (newState) => ({
    type: 'FAIL',
    payload: newState
})

export const onLoading = (newState) => ({
    type: 'LOADING',
    payload: newState
})


export const send = async (dispatch, name, email) => {
    dispatch(onLoading(true))
    const payload = {
        email: email,
        name: name
    }

    await post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', payload).then(() => {
        dispatch(onLoading(false))
        dispatch(onModalChange(false))
        dispatch(onSuccess(true))
    }, err => {
        dispatch(onLoading(false))
        dispatch(onFail(err.errorMessage))
    })
}
