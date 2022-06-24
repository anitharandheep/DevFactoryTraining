import './Signup.css'
import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate = useNavigate();
    const profile = (a) => { navigate("/Profile") };

    return (

        <div className='box'>

            <div className='row1'>Login<button>x</button></div>
            <div className='row2'><label>Matrimony Id/Mobile No./E-mail</label><input type="Text" /></div>
            <div className='row3'><label>Password</label><input type="Password" /></div>
            <div className='row4'><input type="checkbox" /><label>"Keep me logged in"</label></div>
            <div className='row5'><button onClick={(a) => { profile(a); }}>LOGIN</button></div>
            <div className='row6'>
                <div className='buttonleft'><button>Forgot Password?</button></div>
                <div className='buttonright'><button>Log in via OPT</button></div>
            </div>
        </div>
     

    )
}
export default Signup;