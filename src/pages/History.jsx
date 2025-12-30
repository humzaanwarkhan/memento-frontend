import { useEffect, useState } from "react";
import api from "../api";
import "../css/history.css";

export default function History() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await api.get("/entries");
      setEntries(res.data);
    };
    load();
  }, []);

  return (
    <div>
      <h3 className="history-title">Your Memories</h3>

      {entries.map(e => (
        <div key={e._id} className="journal-box">
          <strong>{new Date(e.date).toDateString()}</strong>
          <p>{e.text}</p>
          <small>{e.mood}</small>
        </div>
      ))}
    </div>
  );
}
