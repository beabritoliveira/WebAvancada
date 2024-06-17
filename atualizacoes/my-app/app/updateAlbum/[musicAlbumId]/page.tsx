"use client";
import { albumComponents } from '@/context/cadastroContext';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';


export default function UpdateAlbum() {
    const idAlbum = useParams()
    const {register, handleSubmit} = useForm<albumComponents>();
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    console.log(idAlbum);

    async function updatingAlbum({name, artist, year, coverAlbum} : albumComponents) {
        try {
            const response = await fetch(`http://127.0.0.1:3000/musicAlbum/${idAlbum.musicAlbumId}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({name, artist, year, coverAlbum}),
              referrerPolicy: 'no-referrer',
              cache: 'no-store'
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            router.push('/listagem')
            alert("The album was sucessufuly updated")
          } catch (error) {
            console.error('Erro ao buscar dados do servidor:', error);
          }
        }

    async function fetchData() {
        try {
            const response = await fetch('http://127.0.0.1:3000/artist');
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Erro ao buscar dados do servidor:', error);
        }
        }
    
    useEffect(() => {
    fetchData();
    }, []);

    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <form className="flex flex-col p-20 shadow-lg scale-105  rounded-3xl content-center mx-64"  onSubmit={handleSubmit(updatingAlbum)}>
                <h1 className='pb-14 text-center text-3xl font-bold text-indigo-950'>Updating Album</h1>
                <label htmlFor="name" className="text-indigo-950">Nome do Album: </label>
                <input 
                    {...register('name')}
                    type="text" 
                    name='name' 
                    id='name' 
                    placeholder="novo nome" 
                    className="border text-indigo-950 border-b-indigo-500 p-2"
                />
                <div className="pb-4"></div>
                <label htmlFor="artist" className="text-indigo-950">Artista: </label>
                <div >
                    <select {...register('artist')} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                        {products.map((product) => (
                            <option>{product.name}</option>))}
                    </select>
                    <div className='flex justify-start pt-2'>
                        <button className="cursor-pointer text-indigo-950 border py-1 px-3 text-indigo-950 hover:bg-violet-200 rounded-2xl " type="button" onClick={() => router.push('/cadArtist')}>Registrar novo artista</button>
                    </div>
                </div>

                <div className="pb-4"></div>
                <label htmlFor="Year" className="text-indigo-950">Ano de Lançamento: </label>
                <input 
                    {...register('year')}
                    type="year" 
                    name='year' 
                    id='year' 
                    placeholder="ano correto" 
                    className="border text-indigo-950 border-b-indigo-500 p-2"
                />
                <div className="pb-4"></div>
                <label htmlFor="UrlCapa" className="text-indigo-950">Url capa do album: </label>
                <input 
                    {...register('coverAlbum')}
                    type="text" 
                    name='coverAlbum' 
                    id='coverAlbum' 
                    placeholder="url.png" 
                    className="border text-indigo-950 border-b-indigo-500 p-2"
                />
                <div className="pb-8"></div>
                <input type="submit" className="cursor-pointer border border-indigo-500 bg-white hover:bg-violet-200 text-indigo-950 px-2 py-1 rounded-3xl mx-80 "  value="Update" />
                <button className="cursor-pointer text-indigo-950 py-4 rounded-3xl mx-80 " type="button" onClick={() => router.push('/listagem')}> Voltar para listagem de albuns</button>
            </form>
        </div>
    );
}