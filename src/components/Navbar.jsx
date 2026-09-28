import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "black",
        padding: "18px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>SHOPIFY</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>

        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>

        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>

        <Link to="/privacy" style={{ color: "white", textDecoration: "none" }}>
          Privacy
        </Link>

        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
           Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;