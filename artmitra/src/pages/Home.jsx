import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import Navbar from "../components/Navbar";

const artworks = [
  {
    id: 1,
    name: "Golden Silence",
    artist: "Ananya Rao",
    price: 5000,
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600"
  },
  {
    id: 2,
    name: "Color Harmony",
    artist: "Riya Sharma",
    price: 4500,
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=600"
  },
  {
    id: 3,
    name: "Modern Thoughts",
    artist: "Arjun Kumar",
    price: 6000,
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600"
  },
  {
    id: 4,
    name: "Dream Colors",
    artist: "Meera Das",
    price: 4800,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600"
  },
  {
    id: 5,
    name: "Mountain Morning",
    artist: "Kiran Singh",
    price: 5500,
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600"
  },
  {
    id: 6,
    name: "Silent Expression",
    artist: "Priya Verma",
    price: 7000,
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=600"
  },
  {
    id: 7,
    name: "Blue Emotion",
    artist: "Rahul Mehta",
    price: 3500,
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600"
  },
  {
    id: 8,
    name: "Creative Energy",
    artist: "Sneha Reddy",
    price: 6500,
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600"
  },
  {
    id: 9,
    name: "Evening Beauty",
    artist: "Meera Das",
    price: 4200,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600"
  },
  {
    id: 10,
    name: "Urban Dreams",
    artist: "Kiran Singh",
    price: 5800,
    category: "Sculptures",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=600"
  }
];

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Art");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const categories = [
    "All Art",
    "Paintings",
    "Sculptures",
    "Digital Art",
    "Photography"
  ];

  const filteredArtworks = artworks.filter((art) => {
    const matchesCategory =
      category === "All Art" || art.category === category;

    const matchesSearch =
      art.name.toLowerCase().includes(search.toLowerCase()) ||
      art.artist.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (art) => {
    const updatedCart = [...cart, art];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(art.name + " added to cart!");
  };

  return (
    <div className="home-page">

      {/* NAVBAR */}
      <Navbar />

      <header className="navbar">

        <Link to="/" className="logo">
          🎨 ArtMitra
        </Link>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search artworks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => document.getElementById("gallery").scrollIntoView()}>
            Search
          </button>
        </div>

        <div className="nav-actions">
          <span>🛒 {cart.length}</span>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#artists">Artists</a>
          <a href="#auctions">Auctions</a>
          <a href="#exhibitions">Exhibitions</a>
          <a href="#reviews">Reviews</a>
        </nav>

      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Discover Beautiful Art</h1>
          <p>
            Explore unique artworks from talented artists.
          </p>
          <button onClick={() =>
            document.getElementById("gallery").scrollIntoView({
              behavior: "smooth"
            })
          }>
            Explore Gallery
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Art Categories</h2>

        <div className="category-buttons">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED ARTWORKS */}
      <section className="gallery-section" id="gallery">
        <h2>Featured Artworks</h2>

        <div className="art-grid">
          {filteredArtworks.map((art) => (
            <div className="art-card" key={art.id}>

              <img src={art.image} alt={art.name} />

              <div className="art-info">
                <h3>{art.name}</h3>
                <p>Artist: {art.artist}</p>
                <h4>₹{art.price.toLocaleString("en-IN")}</h4>

                <button onClick={() => addToCart(art)}>
                  Add to Cart
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <p className="no-results">No artworks found.</p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>ArtMitra</h2>
        <p>Connecting Artists and Art Lovers.</p>
        <p>© 2026 ArtMitra. All Rights Reserved.</p>
      </footer>

    </div>
    
  );
}

export default Home;