
"use client";

import { createContext, useState } from "react";
import { request } from '../services/request';
import { useRouter } from "next/navigation";

export type albumComponents = {
    name: string;
    artist: string;
    year: number;
    coverAlbum: string
}

type cdContextType = {
    cadastro: (data: albumComponents) => void;
    authError: string | null;
}

type rightWay = {
    'result': string
}

export const cdContext = createContext({} as cdContextType);


export default function AuthProvider( { children }: { children: React.ReactNode } ){
    const [authError, setAuthError] = useState<string | null>(null);

    const router = useRouter();

    async function cadastro ({name,artist,year,coverAlbum} : albumComponents) {
        console.log(name)
        console.log(artist)
        console.log(year)
        console.log(coverAlbum)
        let {'result' : passed} = await request<rightWay>(`http://127.0.0.1:3000/musicAlbum`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,artist,year,coverAlbum}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        });
        
        console.log(passed)

        if(!passed) setAuthError('Não foi possivel realizar o cadastro, talvez algum elemento não esteja preenchido!');
        else{
            
            router.push('/');
        }
    }
    
    return (
        <cdContext.Provider value={{cadastro, authError}}>

        </cdContext.Provider>
    );
};