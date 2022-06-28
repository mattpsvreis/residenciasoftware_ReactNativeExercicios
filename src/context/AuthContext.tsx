import React, { createContext, useState } from "react";

import UsuarioType from "../models/UsuarioType";
import LoginService from "../services/LoginService";

export const AuthContext = createContext({});

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<UsuarioType>();

    const login = async (email: string, senha: string) => {
        const respostaLoginService = await LoginService(email, senha)

        if (!respostaLoginService) {
            return false;
        } else {
            setUser({
                id: respostaLoginService?.id,
                name: respostaLoginService?.name,
                email: respostaLoginService?.email,
                token: respostaLoginService?.token
            });
            return true;
        }
    }

    return (
        <AuthContext.Provider value={{
            login,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;