import React from "react";
import "../Styles/Menu.css";
import { DISHES } from "../data/Dishes";

//card 
function MenuItem({ item, addToCart }) {
  

 

  return (
     <div className="dcard" key={item.id}>
              <div className="dcard-imgwrap">
                <img src={item.img} alt={item.name} />
              </div>

              <h3>{item.name}</h3>
              <p>{item.desc}</p>

              <div className="dcard-row">
                <span className="dprice">
                  ${item.price.toFixed(2)}
                </span>

                <button className="dadd-btn" type="button" onClick={()=>addToCart(item)}> Add to Cart +</button>
              </div>
            </div>
  );
}
function MenuSection({ items,addToCart  }) {
  return (
   
        <div className="menu-grid-menu">
          {items.map((item) => (
            <MenuItem key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      
  );
}
export default function Menu({addToCart} ) {
  return (
    <>
    

   <section className="dhero">
          <h1>Our Signature Pasta</h1>
          <p>Freshly crafted, perfectly delivered.</p>
        </section>
        <MenuSection items={DISHES} addToCart={addToCart}/>
    </>
  );
}