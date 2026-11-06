import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Default Admin Login
    if (
      email === "admin@artmitra.com" &&
      password === "Admin@123"
    ) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ email, role: "admin" })
      );
      navigate("/admin");
      return;
    }

    // Check registered users
    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );
      navigate("/user");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h1>ArtMitra</h1>
        <h2>Welcome Back!</h2>
        <p>Login to explore the world of art.</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>

        <p>
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;