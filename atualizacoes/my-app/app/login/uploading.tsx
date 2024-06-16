"use client";

import { AuthContext, SignIdData } from "@/context/AuthContext";
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import  Image from 'next/image';
import logoBranca from '../logoBranca.png'
import { useRouter } from 'next/navigation'

export function Login (){
    const {register, handleSubmit} = useForm<SignIdData>();
    const { login, authError } = useContext(AuthContext);

    console.log(useForm<SignIdData>());
    console.log(register);
    console.log(handleSubmit);

    const handleLogin = async (data : SignIdData) => {
        await login(data);
    }

    const router = useRouter()

    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <form className="flex flex-col  text-white rounded-3xl content-center mx-64" onSubmit={handleSubmit(handleLogin)}>
                <Image 
                        src={logoBranca}
                        width={200}
                        height={200}
                        className='block pb-3 rounded-lg place-self-center'
                        alt='Screenshots of the dashboard project showing mobile version'
                /> 
                <label htmlFor="username" className="text-indigo-950">Usuário: </label>
                <input 
                    {...register('username')}
                    type="text" 
                    name='username' 
                    id='username' 
                    placeholder="username" 
                    required 
                    className="border text-indigo-950 border-b-indigo-500 p-2"
                />
                <div className="pb-4"></div>
                <label htmlFor="E-mail" className="text-indigo-950">E-mail: </label>
                <input 
                    {...register('email')}
                    type="text" 
                    name='email' 
                    id='email' 
                    placeholder="user@gmail.com" 
                    required 
                    className="border text-indigo-950 border-b-indigo-500 p-2"
                />

                <div className="pb-8"></div>
                <input type="submit" className="cursor-pointer border border-indigo-500 bg-white hover:bg-violet-200 text-indigo-950 px-2 py-1 rounded-3xl mx-80 " value="Acessar" />
                <button className="cursor-pointer text-indigo-950 py-4 rounded-3xl mx-80 " type="button" onClick={() => router.push('../')}> Não tenho cadastro</button>
            </form>
            {authError && <p>{authError}</p>}
        </div>
    );
}

