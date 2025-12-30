import { useEffect, useState } from "react";
import api from "../api";

export default function Summary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await api.get("/entries/summary/week");
      setSummary(res.data);
    };
    load();
  }, []);

  if (!summary) return <p>No weekly data yet.</p>;

  return (
    <div className="journal-box">
      <h3>This Week</h3>
      <p>Average Mood: {summary.averageMood}</p>
      <p>Most Frequent Mood: {summary.dominantMood}</p>
      <p>Days Logged: {summary.entries}</p>
    </div>
  );
}
