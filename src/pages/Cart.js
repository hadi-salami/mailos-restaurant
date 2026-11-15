import Footer from "../Components/Footer";
import "../Styles/Cart.css";


//card 
function CartItem({ item ,addToCart,Decrement,trash}) {
  



  return (
          <div className="cart-item">
      <img
        className="cart-item-image"
        src={item.img}
        alt={item.name}
      />

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <span>${item.price.toFixed(2)} each</span>
      </div>

      <div className="cart-quantity">
        <button type="button" aria-label="Decrease quantity" onClick={()=>Decrement(item.id)}>
          −
        </button>

        <span>{item.qty}</span>

        <button type="button" aria-label="Increase quantity" onClick={() => addToCart(item)}>
          +
        </button>
      </div>

      <p className="cart-item-total">
        ${(item.price * item.qty).toFixed(2)}
      </p>

      <button
        className="cart-remove"
        type="button"
        onClick={()=>trash(item.id)}
      >
        <svg viewBox="0 0 24 24">
          <path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7" />
        </svg>
      </button>
    </div>

  );
}

export default function Cart({cart ,clearCart, addToCart,Decrement,trash} ) {
    
     let itemCount = 0;
let total = 0;

for (const item of cart) {
  itemCount += item.qty;
  total += item.price * item.qty;
}
  return (
    <div className="cart-page">
      <header className="cart-hero">
        <div className="cart-container">
          <h1>Your Cart</h1>
          <p>Good pasta. Great company.</p>
        </div>
      </header>

      <main className="cart-body">
        <div className="cart-container cart-layout">
          <section className="cart-items" aria-labelledby="cart-items-title">
            <div className="cart-items-heading">
              <h2 id="cart-items-title">Your order</h2>
              <span>{itemCount} items</span>
            </div>

            {/*here is the mapping for the menu items short if else since if else wont work unless its before the return*/}
            {cart.length===0 ?(
                <p>your cart is empty </p>
            ) : (
                cart.map((item)=>(
                    <CartItem key={item.id} item={item} addToCart={addToCart} Decrement={Decrement} trash={trash} />
                ))
            )
            }
            <div className="cart-actions">
              <a href="/menu">&larr; Back to menu</a>
              <button className="cart-clear" type="button" onClick={clearCart}>Clear cart</button>
            </div>
          </section>

          <aside className="cart-summary" aria-labelledby="cart-summary-title">
            <h2 id="cart-summary-title">Order Summary</h2>

            <div className="cart-summary-list">
              <div className="cart-summary-row">
                <div className="cart-summary-label">Items</div>
                 <div className="cart-summary-value">{itemCount}</div>
              </div>
             
            
              <div className="cart-summary-row cart-grand-total">
                <div className="cart-summary-label">Total</div>
                <div className="cart-summary-value">${total.toFixed(2)}</div>
              </div>
            </div>

            <p className="cart-delivery-note">Delivery calculated at checkout</p>

            <button className="cart-checkout" type="button">
              Proceed to Checkout <span aria-hidden="true">&rarr;</span>
            </button>

            <p className="cart-summary-note">Freshly made, just for you.</p>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}