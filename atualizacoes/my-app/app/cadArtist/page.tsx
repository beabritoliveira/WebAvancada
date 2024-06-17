"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export type artistRegister = {
    name: string;
}

export default function Page() {
  const router = useRouter();
  const {register, handleSubmit} = useForm<artistRegister>();

  async function postingArtist({name} : artistRegister) {
    console.log(name)
        try {
            const response = await fetch('http://127.0.0.1:3000/artist', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({name}),
              referrerPolicy: 'no-referrer',
              cache: 'no-store'
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            alert("Artist " + name + " sucessufuly created")
            router.back()
          } catch (error) {
            console.error('Erro ao buscar dados do servidor:', error);
          }
        }
    
    
  return (
    <div className="bg-white h-screen flex justify-center items-center">
        <form className="flex flex-col p-20 shadow-lg scale-105  rounded-3xl content-center mx-64"  onSubmit={handleSubmit(postingArtist)}>
            <h1 className='pb-10 text-center text-3xl font-bold text-indigo-950'>Registrar novo artista</h1>
            <label htmlFor="artist" className="text-indigo-950">Artista: </label>
            <input
                type='text'
                className='border p-2'
                {...register('name')}
            />
            <div className="pb-8"></div>
            <input type="submit" className="cursor-pointer border border-indigo-500 bg-white hover:bg-violet-200 text-indigo-950 px-2 py-1 rounded-3xl mx-80 "  value="Inserir" />
            <button className="cursor-pointer text-indigo-950 py-4 rounded-3xl mx-80 " type="button" onClick={() => router.push('/listagem')}> Voltar para listagem de albuns</button>
        </form>
    </div>
);
}