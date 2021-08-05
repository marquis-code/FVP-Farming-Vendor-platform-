 
const Login = () => {
    return (
        <div>
            <title>Log in</title>
            <div className="reg-grid">
                <img src="./images/reg-img.svg" alt="" className="reg-image" />
                <div className="form-info log-in-form">
                    <img src="./images/farmz2u-logo.svg" alt="" className="form-logo" />
                    <h3 className="col-title form-title">
                        Log in to your account
                    </h3>
                    <form action className="form-block">
                        <div className="input-block">
                            <span className="input-title">Email Address</span>
                            <input type="text" className="input-box" />
                        </div>
                        <div className="input-block">
                            <span className="input-title">Password</span>
                            <input type="text" className="input-box" />
                        </div>
                        <button className="btn submit-btn">Log in</button>
                    </form>
                    <div className="log-in-option">
                        <p className="paragraph form-option login-ask">
                            Forgot Password?<a href="/forgot-password" className="form-link">Reset</a>
                        </p>
                        <p className="paragraph form-option login-ask">
                            Don't have an Account? <a href="/register" className="form-link">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>


      );
}
 
export default Login;