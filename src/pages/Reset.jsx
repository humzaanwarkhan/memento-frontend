import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import api from "../api";

export default function Reset() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post(`/auth/reset/${token}`, { password });
    alert("Password reset successful. You can now login.");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h3>Reset Password</h3>
      <form onSubmit={submit}>
        <input
          type="password"
          placeholder="New password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Reset</button>
      </form>
    </div>
  );
}
