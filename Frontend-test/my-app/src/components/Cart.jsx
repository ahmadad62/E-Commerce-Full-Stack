// import React, { useState, useEffect } from 'react';

// function Cart({ userId }) {
//   const [cartData, setCartData] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/cart/find/${userId}`)
//       .then(response => response.json())
//       .then(data => setCartData(data))
//       .catch(error => console.error(error));
//   }, [userId]);

//   if (!cartData) {
//     return <div>Loading cart data...</div>;
//   }

//   return (
//     <div>
//       <h2>Cart for user {userId}</h2>
//       <p>Items: {cartData.items.join(', ')}</p>
//       <p>Total price: {cartData.totalPrice}</p>
//     </div>
//   );
// }

// export default Cart;

