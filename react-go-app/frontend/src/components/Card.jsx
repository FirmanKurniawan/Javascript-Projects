import { useMutation, queryClient } from "react-query";
import { useContext } from "react";
import { UserContext } from "../ContextAPI";
import { deleteQuote } from "../api/request";

function Card({ id, author, quote, doc_id }) {
  const useDeleteQuote = () => {
    return useMutation(deleteQuote, {
      onSuccess: () => {
        queryClient.invalidateQueries("quotes");
      },
    });
  };

  const { mutate } = useDeleteQuote();

  const handleDelete = (doc_id) => {
    mutate(doc_id);
  };

  const { setQuote } = useContext(UserContext);

  const handleEdit = () => {
    console.log("Inside handle Edit");
    setQuote({
      doc_id: doc_id,
      quote: quote,
      author: author,
      id: id,
    });
  };

  return (
    <div className="flex justify-center my-4" key={doc_id}>
      <div className="block p-6 rounded-lg shadow-lg bg-white  max-w-lg">
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white mb-6">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            ></path>
          </svg>
          <h5 className="text-gray-900 text-left text-sm leading-tight font-medium -mt-8 ml-12 mb-3">
            {author}
          </h5>
          <p>"{quote}"</p>
        </blockquote>

        <button
          type="button"
          className=" inline-block px-6 py-2.5 mx-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => handleEdit()}
        >
          Edit
        </button>
        <button
          type="button"
          className=" inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => handleDelete(doc_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
