import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="user-dashboard">

      <nav className="user-navbar">
        <h2>ArtMitra 🎨</h2>

        <div className="user-nav-links">
          <Link to="/user">Home</Link>
          <Link to="/">Explore</Link>
          <button onClick={() => navigate("/login")}>
            Logout
          </button>
        </div>
      </nav>

      <section className="user-welcome">
        <h1>Welcome to ArtMitra!</h1>
        <p>Explore your creativity and discover beautiful artworks.</p>
      </section>

      <section className="user-options">

        <div className="user-card">
          <h2>🎨 Explore Art</h2>
          <p>Discover creative artworks from talented artists.</p>
          <button onClick={() => navigate("/")}>
            Explore Now
          </button>
        </div>

        <div className="user-card">
          <h2>🖼️ My Gallery</h2>
          <p>View and manage your favourite artworks.</p>
          <button onClick={() => alert("My Gallery coming soon!")}>
            View Gallery
          </button>
        </div>

        <div className="user-card">
          <h2>❤️ Favourites</h2>
          <p>Keep your favourite artworks in one place.</p>
          <button onClick={() => alert("Favourites coming soon!")}>
            View Favourites
          </button>
        </div>

      </section>

      <footer className="user-footer">
        <p>© 2026 ArtMitra | Create • Explore • Inspire</p>
      </footer>

    </div>
  );
}

export default UserDashboard;