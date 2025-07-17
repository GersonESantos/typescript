import { useEffect, useState } from 'react'
import api from './services/api'
import './App.css'

// ...existing enums and interfaces...


interface IAddress {
  street: string;
  number: number;
  city: string;
  state: string;
}

interface IProducts {
  id: number;
  name: string;
  price: number;
  quantity: number;
  address: IAddress;
}


function App() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get<IProducts[]>('/produtos');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Erro ao carregar produtos. Verifique se o backend está rodando.');
      } finally {
        setLoading(false);
      }
    }
    
    getProducts();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div style={{color: 'red'}}>{error}</div>;
  }

  if (products.length === 0) {
    return <div>Nenhum produto encontrado</div>;
  }

  return (
    <div>
      <h1>Produtos</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Address: {product.address.street}, {product.address.number} - {product.address.city}, {product.address.state}</p>
        </div>
      ))}
    </div>
  )
}

export default App