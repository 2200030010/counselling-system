import React from 'react'
import Hello from './Hello'
import Greek from './Greek'
import Message from './Message'
import Counter from './Counter'
import Productionlist from './Productionlist'; 

const Home = () => {
  const products = [
    { id: 1, name: 'Pencil', price: 20 },
    { id: 2, name: 'Pen', price: 30 },
    { id: 3, name: 'Book', price: 25 },
    { id: 4, name: 'Plank', price: 150 },

  ];
  return (
    <div>
       <h1>Shopping App</h1>
    <Productionlist products={products} />
 
      {/*<Counter/>*/}
      {/*<Message/>*/}
   {/*<Hello name='Himatha' id='1'/>
   <p>i am from penamuluru</p>
   <Hello name='Gaeya' id='2'/>
   <button>submit</button>
   <Hello name='Sunyash' id='3'/>
   <Hello name='Sunhem'id='4'/>
   <Greek name='chill' id='5'/>
   <Greek name='chillest' id='6'/>
  <Greek name='calm' id='7'/>*/}
    </div>

  )
}

export default Home
