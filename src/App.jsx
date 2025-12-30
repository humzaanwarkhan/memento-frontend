import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./api";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Today from "./pages/Today";
import History from "./pages/History";
import Summary from "./pages/Summary";
import Profile from "./pages/Profile";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";
import Register from "./pages/Register";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [token, setToken] = useState(null);
  const [view, setView] = useState("today");
  const [streak, setStreak] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("token");
    if (saved) setToken(saved);
  }, []);

  useEffect(() => {
    if (token) {
      api.get("/user/me").then((res) => {
        setStreak(res.data.streak || 0);
        setEmail(res.data.email || "");
      });
    }
  }, [token, view]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setView("today");
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/reset/:token" element={<Reset />} />
      <Route path="/register" element={<Register setToken={setToken} />} />

      <Route
        path="/app/*"
        element={
          !token ? (
            <div style={{ padding: 30 }}>
              <Login setToken={setToken} />
            </div>
          ) : (
            <>
              <Navbar
                streak={streak}
                avatar={email.charAt(0).toUpperCase()}
                openProfile={() => setView("profile")}
                logout={logout}
              />
              <BottomNav view={view} setView={setView} />

              <div style={{ padding: 30 }}>
                {view === "history" && <History />}
                {view === "summary" && <Summary />}
                {view === "profile" && (
                  <Profile goBack={() => setView("today")} />
                )}
                {view === "today" && <Today streak={streak} />}
              </div>
            </>
          )
        }
      />
    </Routes>
  );
}

