import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ avatar, openProfile, logout }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-left">Memento</div>

      <div className="nav-right">
        <div className="profile-wrap">
          <button className="profile-btn" onClick={() => setOpen(!open)}>
            {avatar || "U"}
          </button>

          {open && (
            <div className="profile-menu">
              <div
                onClick={() => {
                  openProfile();
                  setOpen(false);
                }}
              >
                Profile
              </div>
              <div className="logout" onClick={logout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
