const ResetSuccessful = () => (
    <>
        <link rel="stylesheet" href="./css/styles.css" />
        <title>Registration Success</title>
        <div className="reg-grid">
            <img src="./images/reg-img.svg" alt className="reg-image" />
            <div className="reset-link-box reg-success reset-grid">
                <img src="./images/farmz2u-logo.svg" alt className="form-logo" />
                <div className="resent-link-sent-info reset-link-info">
                    <p className="paragraph reset-paragraph resent-link-text">
                        A reset link has been sent to your email address
                    </p>
                    <p className="paragraph reset-paragraph reset-link-paragraph">
                        Didn't get a mail?{" "}
                        <a href="forgotpwd.html" className="change-mail">
                            Change email address
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </>
)


export default ResetSuccessful
