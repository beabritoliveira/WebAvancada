
"use client";

import { createContext, useState } from "react";
import { request } from '../services/request';
import { setCookie } from 'nookies';
import { useRouter } from "next/navigation";

export type SignIdData = {
    username: string;
    email: string;
    
}

type AuthContextType = {
    login: (data: SignIdData) => void;
    authError: string | null;
}

type UserAuthentication = {
    'x-access-token': string
}

export const AuthContext = createContext({} as AuthContextType);


export default function AuthProvider( { children }: { children: React.ReactNode } ){
    const [authError, setAuthError] = useState<string | null>(null);

    const router = useRouter();

    async function login({username, email} : SignIdData) {
        console.log(username)
        console.log(email)
        let {'x-access-token': token} = await request<UserAuthentication>(`http://127.0.0.1:3000/auth`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        });
        
        console.log(token)

        if(!token) setAuthError('Usuário ou senha inválidos. Verifique e tente novamente!');
        else{
            setCookie(null, 'auth.token', token, {
                maxAge: 60 * 60 * 1,
            });
            
            router.push('/listagem');
        }
    }
    
    return (
        <AuthContext.Provider value={{login, authError}} >
            {children}
        </AuthContext.Provider>
    );
};