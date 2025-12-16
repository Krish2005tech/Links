import LinkButton from "./components/LinkButton";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <img
        src="https://avatars.githubusercontent.com/u/your_profile_picture"
        alt="Profile"
        className="avatar"
      />

      <h1 className="name">Your Name</h1>
      <p className="bio">Short bio / tagline goes here.</p>

      <div className="links">
        <LinkButton text="GitHub" url="https://github.com/yourusername" />
        <LinkButton text="Portfolio" url="https://yourwebsite.com" />
        <LinkButton text="LinkedIn" url="https://linkedin.com/in/yourprofile" />
        <LinkButton text="Instagram" url="https://instagram.com/yourprofile" />
      </div>
    </div>
  );
}
