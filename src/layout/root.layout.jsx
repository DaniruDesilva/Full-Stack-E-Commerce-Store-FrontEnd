import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useState } from "react";
import { CartContext } from "../context/cartContext";

function RootLayout() {
  const name = "Daniru";

  const [cart, setCart] = useState([]);

  const updateCart = (product) => {
    if (cart.find((el) => product._id == el._id)) {
      //! Handle the scenario where if product is already in cart
      setCart(cart.map((el) => el._id == product._id ? {...el, count:el.count + 1} : el));
      return;
    }
      //! Handle the scenario where if product is added to the cart for the first time
      setCart([...cart, {...product, count: 1}]);
      return;
  }

  return (
    <CartContext.Provider value={{cart:cart, updateCart:updateCart}}>
    <main>
      <Navigation name={name} />
      <Outlet />
    </main>
    </CartContext.Provider>
  );
}

export default RootLayout;