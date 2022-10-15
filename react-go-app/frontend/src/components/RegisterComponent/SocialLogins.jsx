import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useHistory } from "react-router-dom";

function SocialLogins() {
  const router = useHistory();
  const auth = getAuth();

  const handleSocialAuth = (social) => {
    if (social === "Google") {
      const googleProvider = new GoogleAuthProvider();

      signInWithPopup(auth, googleProvider)
        .then((response) => {
          const user = response.user;

          sessionStorage.setItem("Token", user?.accessToken);

          //   showAlert(
          //     true,
          //     "User Created Successfully.. Redirecting to Home Page.....",
          //     "success"
          //   );
          //   setTimeout(() => {
          router.push("/index");
          //   }, 2000);
        })
        .catch((error) => {
          //   const errorCode = error.code;
          //   //   showAlert(true, error.message, "error");
          //   const errorMessage = error.message;
        });
    } // github
    else if (social === "Github") {
      const githubProvider = new GithubAuthProvider();

      signInWithPopup(auth, githubProvider)
        .then((response) => {
          const user = response.user;
          sessionStorage.setItem("Token", user?.accessToken);
          //   showAlert(
          //     true,
          //     "User Created Successfully.. Redirecting to Home Page.....",
          //     "success"
          //   );
          //   setTimeout(() => {
          router.push("/index");
          //   }, 2000);
        })
        .catch((error) => {
          //   const errorCode = error.code;
          //   showAlert(true, error.message, "error");
          //   const errorMessage = error.message;
        });
    }
  };

  return (
    <div className="social-logins">
      <div className="flex">
        {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> */}
        <button
          type="submit"
          onClick={() => handleSocialAuth("Google")}
          className="w-full flex items-center justify-center bg-red-500  hover:bg-red-400 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
        >
          Sign up with Google
          {/* <svg
              className="w-4 ml-2"
              fill="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51v-.01Z" />
            </svg> */}
        </button>
      </div>
      {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-gray-100  hover:bg-gray-300 text-white-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
            onClick={() => handleSocialAuth("Github")}
          >
            Sign up with Github
          </button>
        </div> */}
      {/* </div> */}
      {/* <p>Or Sign in with</p>
      <button onClick={() => handleSocialAuth("Google")}> Google</button>
      <button onClick={() => handleSocialAuth("Github")}> Github</button> */}
    </div>
  );
}

export default SocialLogins;
