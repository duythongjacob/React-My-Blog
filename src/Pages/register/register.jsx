import { Link } from "react-router-dom";
import "./register.scss"
const Register = () => {
    return (
        <div className="Register">
        <span className="RegisterTitle">Register</span>
            <form className="RegisterForm">
                <label htmlFor="">Username</label>
                <input className=" RegisterInput" type="text" placeholder="Enter your username..." />
                <label htmlFor="">Email</label>
                <input className=" RegisterInput" type="text" placeholder="Enter your email..." />
                <label htmlFor="">Password</label>
                <input className="RegisterInput" type="password" placeholder="Enter your password..." />
                <button className="RegisterButton">Register</button>
            </form>
            <button className="RegisterLoginButton">
                <Link className="link" to="/login"> login</Link>
                </button>
        </div>
    );
}

export default Register;
