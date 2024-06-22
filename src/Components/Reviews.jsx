// src/App.js
import  { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Fake Store</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-900 truncate">${product.title}</h2>
                  <p className="text-gray-600">${product.price}</p>
                  <p className="text-gray-700">{product.description.slice(0, 100)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
