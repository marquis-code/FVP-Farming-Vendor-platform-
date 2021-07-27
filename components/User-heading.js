import React, { useState, useEffect } from "react";
import getUrl from "../components/get-url";
// import { useAuth } from "../Context/Auth-context";
import Popover from "react-popover";

function UserHeading(props) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const [profile, setProfile] = useState();
  // const { authTokens, setAuthTokens } = useAuth();
  // #TODO change the line below to useAuth from the context
  const [authTokens, setAuthTokens] =  useState()
  useEffect(() => {
    fetch(getUrl("users/me/"), {
      headers: {
        Authorization: `Token ${authTokens}`,
      },
    }).then((response) => {
      if (response.status === 401) {
        setAuthTokens(localStorage.removeItem("tokens"));
      }
      response.json().then((data) => setProfile(data));
    });
  }, [authTokens, setAuthTokens]);
  // useEffect(() => {
  //   getProduces();
  // }, []);

  const logOut = () => {
    setAuthTokens(localStorage.removeItem("tokens"));
  };


  return (
    <div className="grid-text tab">
      {props.title}

      <div className="ogun-farmz" onClick={togglePopover}>
        <i className="ogun-farmz-title">
          <p style={{ textTransform: "capitalize", marginRight: "1rem" }}>
            {profile ? profile.first_name : ""}
          </p>
          <Popover
            isOpen={isOpen}
            tipSize={0.1}
            onOuterAction={() => setIsOpen(false)}
            body={
              <div className="popover">
                <a className="popover-item" href="/setting">
                  <div className="popover-img">
                    <img
                      src="/images/settings.svg"
                      alt="logo"
                      height="25px"
                      className=""
                      data-test="button-icon"
                    />
                  </div>
                  Settings
                </a>
                <div className="popover-item">
                  <div className="popover-img">
                    <img
                      src="/images/help.svg"
                      alt="logo"
                      height="14px"
                      className=""
                      data-test="button-icon"
                    />
                  </div>
                  Help
                  <div></div>
                </div>
                <div className="popover-item">
                  <div className="popover-img">
                    <img
                      src="/images/faq.svg"
                      alt="logo"
                      height="25px"
                      className=""
                      data-test="button-icon"
                    />
                  </div>
                  FAQ
                  <div></div>
                </div>
                <div className="popover-item">
                  <div className="popover-img">
                    <img
                      src="/images/log-out.svg"
                      alt="logo"
                      height="25px"
                      className=""
                      data-test="button-icon"
                    />
                  </div>
                  <div className="" onClick={logOut}>
                    Logout
                  </div>
                  <div></div>
                </div>
              </div>
            }
          >
            <img
              src="/images/ogun-farmz.svg"
              alt="Ogun farmz"
              className="ogun-farmz-icon"
            />
          </Popover>
        </i>
      </div>
    </div>
  );
}

export default UserHeading;
