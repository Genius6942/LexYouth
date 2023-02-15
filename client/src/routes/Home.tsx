import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>welcome home.</div>
      <Link to="login">Log In</Link>
    </>
  );
}