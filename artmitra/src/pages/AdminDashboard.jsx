import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "Artworks",
    "Users",
    "Auctions",
    "Exhibitions",
    "Reviews"
  ];

  const artworks = [
    { id: 1, name: "Sunset Painting", artist: "Rahul", category: "Painting", status: "Approved" },
    { id: 2, name: "Abstract Art", artist: "Priya", category: "Digital Art", status: "Pending" },
    { id: 3, name: "Nature Sketch", artist: "Arjun", category: "Sketch", status: "Approved" },
    { id: 4, name: "Modern Portrait", artist: "Sneha", category: "Portrait", status: "Pending" }
  ];

  const [artworkList, setArtworkList] = useState(artworks);

  const handleApproval = (id) => {
    setArtworkList(previous =>
      previous.map(art =>
        art.id === id
          ? { ...art, status: art.status === "Approved" ? "Pending" : "Approved" }
          : art
      )
    );
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <>
            <h1>Dashboard Overview</h1>
            <p className="admin-subtitle">
              Welcome back, Admin! Here's what's happening on ArtMitra.
            </p>

            <div className="admin-stats">
              <div className="stat-card">
                <span>🎨</span>
                <h3>Total Artworks</h3>
                <h2>250</h2>
              </div>

              <div className="stat-card">
                <span>👥</span>
                <h3>Registered Users</h3>
                <h2>120</h2>
              </div>

              <div className="stat-card">
                <span>🔨</span>
                <h3>Active Auctions</h3>
                <h2>18</h2>
              </div>

              <div className="stat-card">
                <span>🖼️</span>
                <h3>Exhibitions</h3>
                <h2>12</h2>
              </div>
            </div>

            <div className="admin-panel">
              <h2>Recent Artworks</h2>
              <ArtworkTable
                artworks={artworkList.slice(0, 4)}
                onApproval={handleApproval}
              />
            </div>
          </>
        );

      case "Artworks":
        return (
          <>
            <h1>Manage Artworks</h1>
            <p className="admin-subtitle">
              Review and manage artwork submissions.
            </p>
            <div className="admin-panel">
              <ArtworkTable
                artworks={artworkList}
                onApproval={handleApproval}
              />
            </div>
          </>
        );

      case "Users":
        return (
          <>
            <h1>Manage Users</h1>
            <p className="admin-subtitle">
              View and manage registered members.
            </p>
            <div className="admin-panel">
              <h2>User Management</h2>
              <p>Registered users can be viewed and managed here.</p>
              <p className="admin-note">
                Connect this section to your registered users in Local Storage.
              </p>
            </div>
          </>
        );

      case "Auctions":
        return (
          <>
            <h1>Manage Auctions</h1>
            <p className="admin-subtitle">
              Monitor artwork auctions.
            </p>
            <div className="admin-panel">
              <h2>Auction Management</h2>
              <p>View auction details and monitor active auctions here.</p>
            </div>
          </>
        );

      case "Exhibitions":
        return (
          <>
            <h1>Manage Exhibitions</h1>
            <p className="admin-subtitle">
              Organize and manage art exhibitions.
            </p>
            <div className="admin-panel">
              <h2>Exhibition Management</h2>
              <p>Create and manage upcoming art exhibitions here.</p>
            </div>
          </>
        );

      case "Reviews":
        return (
          <>
            <h1>Manage Reviews</h1>
            <p className="admin-subtitle">
              Monitor feedback from the art community.
            </p>
            <div className="admin-panel">
              <h2>Customer Reviews</h2>
              <p>Review and moderate feedback submitted by users.</p>
            </div>
          </>
        );

      default:
        return <h1>Welcome to ArtMitra Admin</h1>;
    }
  };

  return (
    <div className="admin-layout">

      <aside className="admin-sidebar">
        <h2 className="admin-logo">🎨 ArtMitra</h2>
        <p className="admin-label">ADMIN PANEL</p>

        <nav>
          {menuItems.map(item => (
            <button
              key={item}
              className={`admin-menu-item ${
                activePage === item ? "active" : ""
              }`}
              onClick={() => setActivePage(item)}
            >
              {item === "Dashboard" && "📊"}
              {item === "Artworks" && "🎨"}
              {item === "Users" && "👥"}
              {item === "Auctions" && "🔨"}
              {item === "Exhibitions" && "🖼️"}
              {item === "Reviews" && "⭐"}
              <span>{item}</span>
            </button>
          ))}
        </nav>

        <button className="admin-logout" onClick={handleLogout}>
          ↪ Logout
        </button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h2>{activePage}</h2>
            <p>ArtMitra Administration</p>
          </div>
          <div className="admin-profile">
            <span>👤</span>
            <strong>Administrator</strong>
          </div>
        </header>

        <section className="admin-content">
          {renderContent()}
        </section>
      </main>

    </div>
  );
}

function ArtworkTable({ artworks, onApproval }) {
  return (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Artwork</th>
            <th>Artist</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {artworks.map(art => (
            <tr key={art.id}>
              <td>{art.name}</td>
              <td>{art.artist}</td>
              <td>{art.category}</td>
              <td>
                <span className={`status ${art.status.toLowerCase()}`}>
                  {art.status}
                </span>
              </td>
              <td>
                <button
                  className="approval-btn"
                  onClick={() => onApproval(art.id)}
                >
                  {art.status === "Approved" ? "Set Pending" : "Approve"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;