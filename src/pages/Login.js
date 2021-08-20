import LoginForm from "../components/LoginForm";
import "../Style/Login.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-form-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
