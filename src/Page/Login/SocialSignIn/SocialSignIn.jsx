import React from "react";
import {
    useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SocialSignIn = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
    const [signInWithFacebook, userFb, loadingFb, errorFb] = useSignInWithFacebook(auth);

  const navigate = useNavigate();
  if (userGoogle || userGithub || userFb) {
    navigate("/");
  }

  let errorElement;
  if (errorGoogle || errorGithub || errorFb) {
    errorElement = <p className="text-danger">{errorGoogle?.message}</p>;
  }

  return (
    <div className="text-center">
      {errorElement}
      {/* or */}
      <div className="w-50 mx-auto d-flex justify-content-center ">
        <div style={{ height: "2px" }} className="w-25 bg-info mt-2"></div>
        <p className="px-3">or</p>
        <div style={{ height: "2px" }} className="w-25 bg-info mt-2"></div>
      </div>

      {/* Social Sign In */}
      <div className="text-center">
        <div>
          <button onClick={()=> signInWithFacebook()} className="btn btn-primary w-25 mb-3">
            Facebook Sing In
          </button>
        </div>

        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-info w-25 mb-3"
          >
            Google Sing In
          </button>
        </div>

        <div>
          <button
            onClick={() => signInWithGithub()}
            className="btn btn-success w-25 mb-3"
          >
            Github Sing In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialSignIn;
