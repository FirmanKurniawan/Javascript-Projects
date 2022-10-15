import { useState } from "react";
// import { getData } from "../App";
import { useMutation, queryClient } from "react-query";
import { useContext } from "react";
import { UserContext } from "../ContextAPI";
import { useEffect } from "react";
import { postQuote, updateQuote } from "../api/request";

function Form() {
  const initialState = {
    author: "",
    quote: "",
    id: "",
  };

  const [data, setData] = useState(initialState);

  const { quote } = useContext(UserContext);

  useEffect(() => {
    setData(quote);
  }, [quote]);

  const [count, setCount] = useState(6);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const addID = () => {
    setCount(count + 1);
    data.id = count;
  };

  const usePostQuote = () => {
    return useMutation(postQuote, {
      onSuccess: () => {
        queryClient.invalidateQueries("quotes");
      },
    });
  };

  const { mutate } = usePostQuote();

  const useEditQuote = () => {
    return useMutation(updateQuote, {
      onSuccess: () => {
        queryClient.invalidateQueries("quotes");
      },
    });
  };

  const { mutate: editMutate } = useEditQuote();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.name === "Update") {
      console.log("Inside Update");
      editMutate(data);
    }

    if (e.target.name === "Submit") {
      console.log("Inside Submit");
      addID();
      mutate(data);
    }

    // fetch getData and clear the form
    setData(initialState);
  };

  return (
    <div className="w-1/2 p-6 pb-10 m-auto bg-white rounded-md shadow-md w-sm">
      <div className="flex justify-center">
        <form>
          <h1 className="text-xl font-semi-bold font-thin text-center mb-3">
            {data?.doc_id ? "Update" : "Add"} a Quote
          </h1>

          <div className="flex flex-wrap">
            <div className="w-full ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="author"
              >
                Author
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-300"
                type="text"
                id="author"
                name="author"
                value={data?.author}
                onChange={(e) => handleChange(e)}
                required
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="quote"
              >
                Quote
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-300"
                id="quote"
                type="quote"
                name="quote"
                value={data?.quote}
                onChange={(e) => handleChange(e)}
                required
                placeholder=""
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 ctracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            name={data?.doc_id ? "Update" : "Submit"}
            onClick={(e) => handleSubmit(e)}
          >
            {/* {isLoading ? "Loading " : "Submit"} */}
            {data?.doc_id ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
