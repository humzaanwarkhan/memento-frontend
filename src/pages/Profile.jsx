import { useEffect, useState } from "react";
import api from "../api";

export default function Profile({ goBack }) {
  const [profile, setProfile] = useState({ name:"", about:"", age:"" });

  useEffect(() => {
    api.get("/user/me").then(res => setProfile(res.data));
  }, []);

  const save = async () => {
    await api.put("/user/me", profile);
    alert("Profile updated");
    goBack();
  };

  return (
    <div className="profile-container">
      <h3>Account Settings</h3>

      <label>Name</label>
      <input value={profile.name}
             onChange={e=>setProfile({...profile,name:e.target.value})}/>

      <label>Age</label>
      <input value={profile.age || ""}
             onChange={e=>setProfile({...profile,age:e.target.value})}/>

      <label>About</label>
      <textarea value={profile.about}
                onChange={e=>setProfile({...profile,about:e.target.value})}/>

      <div className="profile-actions">
        <button onClick={save}>Save</button>
        <button onClick={goBack}>Cancel</button>
      </div>
    </div>
  );
}
