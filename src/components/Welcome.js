import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "../Welcome.css";

const Welcome = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      setError(null);
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <main className="welcome">
      <div className="welcome-container">
        <h2>Connectly</h2>
        {error && <p className="error">{error}</p>}
        <button className="sign-in" onClick={googleSignIn} disabled={loading}>
          <img src={GoogleSignin} alt="Sign in with Google" />
        </button>
      </div>
    </main>
  );
};

export default Welcome;
