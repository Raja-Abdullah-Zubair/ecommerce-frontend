import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          gap: "50px",
        }}
      >
        <div style={{ width: "50%" }}>
          <h1
            style={{
              fontSize: "55px",
              marginBottom: "20px",
            }}
          >
            Welcome to Our Store
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.7",
              color: "#555",
            }}
          >
            Discover amazing products made for your everyday lifestyle.
            We offer high-quality, stylish, and affordable products
            all in one place.
          </p>

          <Link to="/products">
            <button
              style={{
                marginTop: "20px",
                padding: "15px 30px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>

        <div style={{ width: "50%" }}>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Store"
            style={{
              width: "100%",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "50px",
          backgroundColor: "white",
        }}
      >
        <h2>Everything You Need in One Place</h2>

        <p style={{ color: "#666", fontSize: "18px" }}>
          Quality products, simple shopping, and great experiences.
        </p>
      </div>
    </div>
  );
}

export default Home;
