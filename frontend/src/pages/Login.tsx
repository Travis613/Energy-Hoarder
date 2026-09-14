import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      Login Page
      <p>
        <Link to="/sign-up">Sign up free</Link>
      </p>
    </div>
  );
}
