const RegisterSuccess = () => {
    return (
        <>
            <title>Registration-success</title>
            <div className="reg-grid">
                <img src="./images/reg-img.svg" alt className="reg-image" />
                <div className="reset-link-box reg-success">
                    <img src="./images/farmz2u-logo.svg" alt className="form-logo" />
                    <div className="resent-link-sent-info">
                        <h3 className="col-title reset-title">Successful</h3>
                        <p className="paragraph reset-paragraph">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                    </div>
                    <a className="btn submit-btn mail-btn" href="/login">
                        Proceed
                    </a>
                </div>
            </div>
        </>
     );
}
 
export default RegisterSuccess;