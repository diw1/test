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


export const send = async (dispatch, name, email) => {
    const payload = {
        email: email,
        name: name
    }

    await post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', payload).then(() => {
        dispatch(onModalChange(false))
        dispatch(onSuccess(true))
    }, err => {
        dispatch(onFail(err.errorMessage))
    })
}
