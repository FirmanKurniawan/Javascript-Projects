import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "../../firebase";
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();

  const initialData = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialData);
  const auth = getAuth();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("Token", user.accessToken);

        // setTimeout(() => {
        history.push("/index");
        // }, 2000);
      })
      .catch((error) => {
        console.log("Error : ", error.message);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-t from-green-200 to-blue-400 opacity-75 inset-0 z-0">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Welcome Back, Please Login
        </h1>

        <form className="mt-6">
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
                type="text"
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
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
                type="password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder=""
              />
            </div>
          </div>
          <a href="/#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="my-6">
            {/* <Link href="/dashboard"> */}
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 ctracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
            {/* </Link> */}
          </div>
          {/* <SocialLogin /> */}
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
