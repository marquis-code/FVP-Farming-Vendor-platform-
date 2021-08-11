import React, { useState } from "react";
// import AuthOption from "../components/Auth-options";
// import { Link, useHistory } from "react-router-dom";
import getUrl from "../components/get-url";
import { useRouter } from 'next/router'
// import { AuthContext } from "../context/Auth-context";
// import { useAuth } from "../context/Auth-context";
import ErrorMessage from "../components/ErrorMessage";
import Spiner from "../components/Sign-in-spinner";
import { Mixpanel } from "../components/mixpanel";

const Login = () => {
    const Router = useRouter()
    // const { setAuthTokens } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [formError, setFormError] = useState(false);
    // const history = useHistory();
    const [spinner, setSpinner] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    let TOKEN;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSpinner(true);
        try {
            await fetch(getUrl("users/token"), {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            })
                .then((res) => {

                    console.log(res), "Sending data";
                    if (res.status === 200) {
                        setSpinner(false);
                        Mixpanel.identify(form.email);
                        Mixpanel.track("Successful login");
                        Mixpanel.people.set({
                            $email: form.email,
                        });
                    } else if (res.status === 400) {
                        setSpinner(false);
                        alert(erro)
                        setFormError(res)
                    }

                    if (!res.ok) throw res;
                    return res.json();
                })

                .then((data) => {
                    TOKEN = data.token;
                    localStorage.setItem("token", TOKEN);
                    Router.push('/');
                    TOKEN = null;
                });
            // await EmailVerification(TOKEN, history, setAuthTokens);
        } catch (err) {

            setFormError(true);
            // err.text().then((text) => {
            //     const parseError = JSON.parse(text);
            //     setFormError((prevState) => ({
            //         ...prevState,
            //         ...setError,
            //     }));
            // }
            // );
            Mixpanel.track("Unsuccessful login");
        }
    };

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
                    <br />
                    {
                        formError &&
                        <ErrorMessage errorText={"Invalid Username or Password, Retry"} />
                    }
                    <form onSubmit={handleSubmit} action className="form-block">
                        <div className="input-block">
                            <span className="input-title">Email Address</span>
                            <input type="text" className="input-box" name="email" onChange={handleChange} />
                        </div>
                        <div className="input-block">
                            <span className="input-title">Password</span>
                            <input type="password" className="input-box" name="password" onChange={handleChange} />

                        </div>
                        <button className="btn submit-btn" onSubmit={handleSubmit} >  {spinner ? <Spiner /> : "Sign In"}</button>
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