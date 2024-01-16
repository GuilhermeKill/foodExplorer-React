import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth.jsx'

import { AppRoutes } from './app.route'
import { AuthRoutes } from './auth.route'
import { AppAdminRoutes } from './appAdmin.route'

export function Routes() {
    const { user } = useAuth()

    function route() {
        if (user.isAdmin === 1) {
            return <AppAdminRoutes />
        }

        return <AppRoutes />
    }

    return (
        <BrowserRouter>
            {user ? route() : <AuthRoutes />}
        </BrowserRouter>
    )
}