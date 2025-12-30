import { useState } from "react";
import api from "../api";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      navigate("/app"); 
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h3>Welcome to Memento</h3>

      <form onSubmit={submit}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-actions">
          <button type="submit">Login</button>
          <div>
            <a href="/register">Create account</a> ·{" "}
            <a href="/forgot">Forgot password?</a>
          </div>
        </div>
      </form>
    </div>
  );
}
