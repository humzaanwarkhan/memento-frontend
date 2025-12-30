import { useState } from "react";
import api from "../api";

export default function Forgot() {
  const [email, setEmail] = useState("");

  const submit = async e => {
    e.preventDefault();
    await api.post("/auth/forgot", { email });
    alert("If this email exists, a reset link has been sent.");
  };

  return (
    <div className="login-container">
      <h3>Forgot Password</h3>
      <form onSubmit={submit}>
        <input placeholder="Enter your email"
               onChange={e => setEmail(e.target.value)} />
        <button>Send Reset Link</button>
      </form>
    </div>
  );
}
