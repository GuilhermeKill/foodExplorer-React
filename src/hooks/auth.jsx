import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api'

export const authContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    function singOut() {
        localStorage.removeItem("@foodexplorer:user")
        localStorage.removeItem("@foodexplorer:token")

        setData({})
    }

    async function singIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
            localStorage.setItem("@foodexplorer:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token })



        }
        catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            }
            else {
                alert("Não foi possível entrar")
            }
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token")
        const user = localStorage.getItem("@foodexplorer:user")

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }


    }, [])

    return (
        <authContext.Provider value={{
            singIn,
            singOut,
            user: data.user
        }}>
            {children}
        </authContext.Provider>
    )
}

function useAuth() {
    const context = useContext(authContext)

    return context
}

export { AuthProvider, useAuth }