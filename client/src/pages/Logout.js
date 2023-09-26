import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import LoadingAnimations from "../components/LoadingAnimations";
import InstantMessage from "../components/InstantMessage";
const Logout = () => {
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const { state, dispatch } = useContext(LoginContext);
  const history = useNavigate();

  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: undefined });
        setMessage("User Logged Out");
        setAlert(true);

        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {alert ? <InstantMessage message={message} /> : ``}
      <LoadingAnimations />
    </>
  );
};

export default Logout;
