import {Fragment} from "react";
import "./login.css";
import tiwtlogo from "../assets/logot.svg"
import {Link} from "react-router-dom";
function Login(props) {
    return (
        <Fragment>

                <div className="login">
                    <img src={tiwtlogo} alt="img"/>
                    <h2>Log in to Twitter</h2>
                    <form className="login_form">
                        <input placeholder="Phone number, email address"/>
                        <input placeholder="Password"/>
                        <button type="submit">Log In</button>
                    </form>
                    <ul className="forgot_or_create">
                        <Link className="forgot_or_create_links" to="/">Forgot password?</Link>
                        <Link className="forgot_or_create_links" to="/">Sign up to Twitter</Link>
                    </ul>


            </div>
        </Fragment>
    );
}

export default Login;