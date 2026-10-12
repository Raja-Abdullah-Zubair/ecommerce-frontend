import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          Our Products
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
          }}
        >
          Discover our latest products
        </p>

        <div
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "20px",
          }}
        >
          🛒 Cart: {cart.length}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "20px",
              }}
            >
              <h2
                style={{
                  marginBottom: "10px",
                }}
              >
                {product.name}
              </h2>

              <p
                style={{
                  color: "#777",
                  marginBottom: "8px",
                }}
              >
                <b>Brand:</b> {product.brand}
              </p>

              <p
                style={{
                  color: "#777",
                  marginBottom: "8px",
                }}
              >
                <b>Category:</b> {product.category}
              </p>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.5",
                }}
              >
                {product.description}
              </p>

              <h2
                style={{
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
              </h2>

              <button
                onClick={() => addToCart(product)}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;