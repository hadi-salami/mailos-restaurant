import Navbar  from './Components/Navbar';
import { useState } from "react";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contacts from './pages/Contacts';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
function App() {
  const [cart, setCart] = useState([]);
  function addToCart(dish) {
  setCart((previousCart) => {
    const existingItem = previousCart.find(
      (item) => item.id === dish.id
    );

    if (existingItem) {
      return previousCart.map((item) =>
        item.id === dish.id ? { ...item, qty: item.qty + 1 } : item
      );
    }

    return [...previousCart, { ...dish, qty: 1 }];
  });
}
function clearCart() {
  setCart([]);
}
function Decrement(id) {
  setCart(
    (previousCart)=>{
      return previousCart.map((item)=>{
        return item.id===id ?{...item,qty: item.qty -1} :item
      }).filter((item)=>{return item.qty>0})
    }
  );

}
function trash(id) {
  setCart(
    (previousCart)=>{
      return previousCart.map((item)=>{
        return item.id===id ?{...item,qty: 0} :item
      }).filter((item)=>{return item.qty>0})
    }
  );

}

  return (
    <>
    <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart}/>} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Cart" element={<Cart cart={cart} clearCart={clearCart} addToCart={addToCart} Decrement={Decrement} trash={trash}/>} />
        </Routes>
        </>
        
  
      
      
      
    
   
      
  );
}

export default App;