const ForgotPassword = () => {
    return (
        <>
            <title>Forgot Password</title>
            <div className="reg-grid">
                <img src="./images/reg-img.svg" alt className="reg-image" />
                <div className="form-info log-in-form">
                    <img src="./images/farmz2u-logo.svg" alt className="form-logo" />
                    <h3 className="col-title form-title">Enter Email Address</h3>
                    <form action className="form-block">
                        <div className="input-block forgotpwd-title">
                            <input type="text" className="input-box" />
                        </div>
                        <button type="button" id="myBtn" className="btn submit-btn reset-btn">
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
            <div id="myModal" className="reset-link-sent-grid">
                <div className="reset-link-box">
                    <img src="./images/farmz2u-logo.svg" alt className="form-logo" />
                    <img src="./images/reset-img.svg" alt className="reset-img" />
                    <div className="resent-link-sent-info">
                        <h3 className="col-title reset-title">Successful</h3>
                        <p className="paragraph reset-paragraph">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat.
                        </p>
                    </div>
                    <a
                        href="reset-link-sent.html"
                        className="btn submit-btn mail-btn close"
                    >
                        Go to mail
                    </a>
                </div>
            </div>
        </>
     );
}
 
export default ForgotPassword;