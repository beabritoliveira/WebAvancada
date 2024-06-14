"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import musicBar from 'spotify.png'

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/musicAlbum');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategorySearch = () => {
    router.push('/categories');
  };

  return (
    <main className="p-4 h-screen">
      {error ? (
        <p className="text-red-500">Erro ao buscar dados do servidor: {error}</p>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-center ">Music Albuns</h1>
            <button 
              onClick={handleCategorySearch}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Pesquisar por Categoria
            </button>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {products.map((product) => (
              <li 
                key={product._id} 
                className="border bg-zinc-100 p-4 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 border-2 rounded-xl"
              >
                <p className="text-lg font-semibold pl-7 pb-2">{product.name}</p>
                <p className="text-sm font-semibold pl-7">{product.artist}</p>
                <img 
                  src="https://i.pinimg.com/736x/c4/aa/8a/c4aa8a1ce88cbd22cf20ae29ff9e1999.jpg"
                  className="w-full h-48 object-cover rounded" 
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}