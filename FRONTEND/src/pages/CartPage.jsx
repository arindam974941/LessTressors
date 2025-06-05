import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { FiTrash } from "react-icons/fi"; // <-- Import the trash icon

const CartPage = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    axios
      .get("https://lesstressors.onrender.com/cart", { withCredentials: true })
      .then((res) => setCart(res.data))
      .catch(() => setCart({ items: [] }));
  };

  const handleRemove = async (productId) => {
    try {
      await axios.delete(`https://lesstressors.onrender.com/cart/${productId}`, { withCredentials: true });
      fetchCart(); // Refresh cart after removal
    } catch (err) {
      alert(err.response?.data?.message || "Failed to remove from cart");
    }
  };

  if (!cart) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 >My Cart</h2>
      {cart.items && cart.items.length > 0 ? (
        <div className="product-grid">
          {cart.items.map((item) => (
            <div
              key={item.productId._id}
              className="cart-product-card"
              style={{
                position: "relative",
                borderRadius: "24px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.10)",
                background: "#fff",
                margin: "0.5rem",
                overflow: "hidden",
                transition: "box-shadow 0.3s",
              }}
            >
              <button
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  background: "linear-gradient(90deg, #f236a0 0%, #a77ce7 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(167,124,231,0.15)",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                title="Remove from cart"
                onClick={() => handleRemove(item.productId._id)}
              >
                <FiTrash />
              </button>
              <ProductCard product={item.productId} />
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;