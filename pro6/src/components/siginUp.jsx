import {Fragment} from "react";
import tiwtlogo from "../assets/logot.svg"
import "./signnup.css";
import {Link} from "react-router-dom";
function SiginUp(props) {
    return (
        <Fragment>
            <div className="signup">
                <img className="siginup_logo" src={tiwtlogo} alt="img"/>
                <form className="siginup_form">
                    <h2>Create an account</h2>
                    <input placeholder='Name'/>
                    <input placeholder='Phone number'/>
                    <Link to="/">Use email</Link>
                    <p>Date of birth</p>
                    <p>
                        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
                        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
                        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim
                        eget tellus. Nibh mi massa in molestie a sit. Elit congue.
                    </p>
                    <div className="birth">
                        <select className="month">
                            <option>month</option>
                            <option>yanvar</option>

                        </select>
                    </div>

                </form>
            </div>
        </Fragment>
    );
}


export default SiginUp;