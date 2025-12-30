import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Memento - <span>Your private space to reflect.</span></h1>
        <p>
          Memento is a private digital journal designed to help you understand
          yourself, not just record your days. Every entry is securely stored,
          your thoughts are never exposed, and your emotions are transformed
          into meaningful insights. By tracking your mood over time, Memento
          builds a personal rhythm of your life — showing patterns, momentum,
          and emotional balance without ever compromising your privacy. No
          noise. No social pressure. Just you, your memories, and a clearer view
          of your mental journey.
        </p>

        <div className="hero-actions">
          <Link to="/register">Get Started</Link>
          <Link to="/login" className="outline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
