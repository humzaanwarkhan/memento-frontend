import { useState, useEffect } from "react";
import api from "../api";

export default function Today({ streak }) {
  const [mood, setMood] = useState("happy");
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const load = async () => {
      const res = await api.get("/entries/today");
      if (res.data) {
        setMood(res.data.mood);
        setText(res.data.text);
        setEditing(true);
      }
    };
    load();
  }, []);

  const save = async () => {
    if (!editing) {
      await api.post("/entries", { mood, text });
      setEditing(true);
      alert("Entry saved");
    } else {
      await api.put("/entries", { mood, text });
      alert("Entry updated");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <div className="streak-box">
          🔥 Your current streak: <strong>{streak}</strong> days
        </div>

        <h3>{editing ? "Update today's memory" : "Write today's memory"}</h3>

        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option>happy</option>
          <option>calm</option>
          <option>neutral</option>
          <option>tired</option>
          <option>anxious</option>
        </select>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your thoughts here..."
        />

        <button onClick={save}>
          {editing ? "Update Entry" : "Save Entry"}
        </button>
      </div>
    </div>
  );
}
