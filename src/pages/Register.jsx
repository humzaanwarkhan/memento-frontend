import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", { email, password });

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        navigate("/app");
      } else {
        alert("Account created. Please login.");
        navigate("/login");
      }
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="login-container">
      <h3>Create your account</h3>
      <form onSubmit={submit}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Create Account</button>
      </form>
    </div>
  );
}
