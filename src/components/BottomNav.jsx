import "./BottomNav.css";

export default function BottomNav({ view, setView }) {
  return (
    <div className="bottom-nav">
      <button className={view==="today" ? "active" : ""} onClick={()=>setView("today")}>Today</button>
      <button className={view==="history" ? "active" : ""} onClick={()=>setView("history")}>History</button>
      <button className={view==="summary" ? "active" : ""} onClick={()=>setView("summary")}>Weekly</button>
    </div>
  );
}
