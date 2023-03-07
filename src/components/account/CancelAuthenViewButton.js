import React from 'react'
import { AUTHEN_SWITCH, LOGIN_VIEW } from '../../data/constants'
import { useStore } from '../../store'
import { updateLoginView } from '../../store/actions'
import CustomButton from '../common/CustomButton'

const CancelAuthenViewButton = () => {
    const [state, dispatch] = useStore()

    const cancel_authen_view = () => {
        dispatch(updateLoginView(false))
        window.localStorage.removeItem(LOGIN_VIEW)
    }

    return (
        <CustomButton
            onClick={cancel_authen_view}
            style={'bg-secondary text-white rounded-md mt-2 p-2 text-center font-bold hover:shadow-lg transition-all rounded'}
            title="Cancel"
        />
    )
}

export default CancelAuthenViewButton