import React from 'react'
import { user } from '../../data/account_function'
import { useStore } from '../../store'
import AccountQuickView from './AccountQuickView'
import AuthenQuickView from './AuthenQuickView'

const AcountNavItem = () => {
    const [state, dispatch] = useStore()
    const { login_state } = state

    return (
        login_state
            ?
            <AccountQuickView />
            :
            <AuthenQuickView />
    )
}

export default AcountNavItem