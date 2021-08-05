const Register = () => {
    return (
        <>
            <title>Register</title>
            <div className="reg-grid">
                <img src="./images/reg-img.svg" alt className="reg-image" />
                <div className="form-info">
                    <img src="./images/farmz2u-logo.svg" alt className="form-logo" />
                    <h3 className="col-title form-title">Register your account</h3>
                    <form action className="form-block">
                        <div className="input-block">
                            <span className="input-title">First Name</span>
                            <input type="text" className="input-box" />
                        </div>
                        <div className="input-block">
                            <span className="input-title">Last Name</span>
                            <input type="text" className="input-box" />
                        </div>
                        <div className="input-block">
                            <span className="input-title">Email Address</span>
                            <input type="text" className="input-box" />
                        </div>
                        <div className="input-block">
                            <span className="input-title">Password</span>
                            <input type="text" className="input-box" />
                        </div>
                        <div className="input-block">
                            <span className="input-title">Confirm Password</span>
                            <input type="text" className="input-box" />
                        </div>
                        <a href="/register-success" className="btn submit-btn">
                            Register
                        </a>
                    </form>
                    <p className="paragraph form-option">
                        Have an Account?{" "}
                        <a href="/store" className="form-link">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Register;