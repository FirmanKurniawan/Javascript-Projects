import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import SocialLogins from "./SocialLogins";
import "../../firebase";
// import { db } from "../../firebase";
import { useHistory } from "react-router-dom";

function SignUp() {
  let history = useHistory();

  const initialData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [data, setData] = useState(initialData);
  const auth = getAuth();

  // const [authData, setAuthData] = useState({
  //   email: "",
  //   // firebase_id: "",
  //   dummy_id: "",
  // });

  // const [firebaseId, setFirebaseId] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inside Handle Submit : ", data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("Token", user.accessToken);
        console.log("User : ", user);
        console.log("Inside then");

        history.push("/index");
      })
      .catch((error) => {
        console.log("Error : ", error.message);
      });

    history.push("/index");
  };

  return (
    <div>
      <div className="relative min-h-1/4 flex bg-gradient-to-t from-green-200 to-blue-400  opacity-90 inset-0 z-0   ">
        <div className="flex flex-col  items-center md:items-center mt-4 sm:justify-center md:justify-start flex-auto min-w-0 ">
          <div className="flex justify-center rounded-lg items-center bg-white">
            <div className="w-full p-6  m-auto  rounded shadow-md lg:max-w-x">
              <div className="max-w-md w-full space-y-8">
                <div className="mb-10">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    Registration Form{" "}
                  </h3>
                  <p className="text-gray-500">Please register your account.</p>
                </div>
                <SocialLogins />

                <div className="flex items-center justify-center space-x-2 my-5">
                  <span className="h-px w-16 bg-gray-200"></span>
                  <span className="text-gray-300 font-normal">
                    or continue with
                  </span>
                  <span className="h-px w-16 bg-gray-200"></span>
                </div>
                <form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3 border border-gray-200 leading-tight focus:outline-none focus:bg-white focus:border-teal-300"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                        name="firstName"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-300"
                        id="grid-last-name"
                        type="text"
                        placeholder=""
                        name="lastName"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-300"
                        id="grid-email"
                        name="email"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-300"
                        id="grid-password"
                        name="password"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </div>

                  <div className="space-y-6 mt-6">
                    <div>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full flex justify-center bg-purple-700 rounded hover:bg-purple-600 focus:outline-none focus:bg-purple-600 p-3 rounded text-white  shadow-lg cursor-pointer transition ease-in duration-500"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                  {" "}
                  Have an account already?{" "}
                  <a
                    href="/login"
                    className="font-medium text-purple-600 hover:underline"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
