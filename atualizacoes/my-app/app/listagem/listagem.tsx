"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState('All Artists');
  const [customArtist, setCustomArtist] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  async function fetchData() {
    try {
      const response = await fetch('http://127.0.0.1:3000/musicAlbum');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:', error);
      setError(error.message);
    }
  }

  async function fetchArtists() {
    try {
      const response = await fetch('http://127.0.0.1:3000/artist');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const artistNames = data.map(artist => artist.name);
      setArtists(artistNames);
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:', error);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
    fetchArtists();
  }, []);

  async function deletingData(id) {
    try {
      const response = await fetch(`http://127.0.0.1:3000/musicAlbum/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        cache: 'no-store'
      });
      window.location.reload();
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:', error);
    }
  }

  const updateRedirectPage = (id) => {
    router.push(`/updateAlbum/${id}`);
  };

  const handleArtistChange = (event) => {
    setSelectedArtist(event.target.value);
    if (event.target.value !== 'Other') {
      setCustomArtist('');
    }
  };

  const handleCustomArtistChange = (event) => {
    setCustomArtist(event.target.value);
  };

  const filteredProducts = selectedArtist === 'All Artists' 
    ? products 
    : products.filter(product => product.artist === (selectedArtist === 'Other' ? customArtist : selectedArtist));

  return (
    <main className="h-screen bg-violet-200">
      {error ? (
        <p className="text-red-500">Erro ao buscar dados do servidor: {error}</p>
      ) : (
        <div className='p-8'>
          <div className="mb-8 px-4">
            <div className='flex justify-center'>
              <h1 className="text-3xl font-bold text-center text-indigo-950 tracking-wide">List of music Albuns</h1>
            </div>
            <div className='flex justify-end gap-4'>
              <select 
                value={selectedArtist} 
                onChange={handleArtistChange} 
                className="p-2 rounded border"
              >
                <option value="All Artists">All Artists</option>
                {artists.map(artist => (
                  <option key={artist} value={artist}>{artist}</option>
                ))}
                <option value="Other">Outro</option>
              </select>
              {selectedArtist === 'Other' && (
                <input 
                  type="text" 
                  value={customArtist} 
                  onChange={handleCustomArtistChange} 
                  placeholder="Nome do artista" 
                  className="p-2 rounded border"
                />
              )}
              <button onClick={() => router.push('/cadAlbum')} className='cursor-pointer hover:bg-indigo-950 hover:scale-105 hover:shadow-lg text-white font-medium bg-indigo-500 rounded-full p-3'>Cadastrar Album</button>
            </div>
          </div>
          <div className="grid bg-violet-200 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-16">
            {filteredProducts.map((product) => (
              <div 
                key={product._id} 
                className="border bg-zinc-100 p-8 content-center rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 border-2 rounded-xl"
              >
                <div className='flex justify-center'>
                  <img 
                    src={product.coverAlbum}
                    width={200}
                    height={200}
                    className="block pb-3 rounded-lg place-self-center" 
                  />
                </div>
                <p className="text-lg font-semibold pl-7 pb-2">{product.name}</p>
                <p className="text-sm font-semibold pl-7">{product.artist}</p>
                <img 
                  src="https://i.pinimg.com/736x/c4/aa/8a/c4aa8a1ce88cbd22cf20ae29ff9e1999.jpg"
                  width={200}
                  height={200}
                  className="w-full h-36 object-cover rounded" 
                />
                <div className='flex justify-center pt-8 gap-5'>
                  <button onClick={() => updateRedirectPage(product._id)} className='cursor-pointer hover:bg-indigo-950 hover:scale-105 hover:shadow-lg hover:text-white font-medium bg-violet-200 rounded-full p-3'>Editar Album</button>
                  <button onClick={() => { deletingData(product._id) }} className='cursor-pointer hover:bg-indigo-950 hover:scale-105 hover:shadow-lg hover:text-white font-medium bg-violet-200 rounded-full p-3'>Excluir Album</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
