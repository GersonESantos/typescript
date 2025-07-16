import { useEffect, useState } from 'react'
import api from './services/api'
import './App.css'

function App() {
  const [products, setProducts] = useState<IProducts[]>([]);

  enum States{
    AC = 'Acre',
    AL = 'Alagoas',
    AP = 'Amapá',
    AM = 'Amazonas',
    BA = 'Bahia',
    CE = 'Ceará',
    DF = 'Distrito Federal',
    ES = 'Espírito Santo',
    GO = 'Goiás',       
    MA = 'Maranhão',
    MT = 'Mato Grosso',
    MS = 'Mato Grosso do Sul',
    MG = 'Minas Gerais',
    PA = 'Pará',
    PB = 'Paraíba',         
    PR = 'Paraná',
    PE = 'Pernambuco',
    PI = 'Piauí',
    RJ = 'Rio de Janeiro',
    RN = 'Rio Grande do Norte',
    RS = 'Rio Grande do Sul',
    RO = 'Rondônia',
    RR = 'Roraima',
    SC = 'Santa Catarina',
    SP = 'São Paulo',
    SE = 'Sergipe',
    TO = 'Tocantins'
    }
    
    interface IProducts {
      id: number;
      name: string;
      price: number;
      quantity: number;
      address: IAddress;
      
    }
    
    interface IAddress {
      street: string;
      number: number;
      city: string;
      state: string;
    }
    


  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get<IProducts[]>('/products');
         setProducts(response.data);
      
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      }
    
    getProducts();
  }, []);

  if (!products) {
    return <div>Carregando...</div>;
    }

    

  return (
    <div>
      <h1>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            {/* <p>Address: {product.address.street}, {product.address.number} - {product.address.city}, {States[product.address.state]}</p> */}
          </div>
        ))}
      </h1>
    </div>
  )
}

export default App
