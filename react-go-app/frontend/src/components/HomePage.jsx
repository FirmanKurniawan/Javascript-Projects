import Card from "./Card";
import Form from "./Form";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";

import { getData } from "../api/request";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function HomePage() {
  const history = useHistory();

  const { isLoading, error, data } = useQuery("quotes", getData, {
    refetchInterval: 1000,
  });

  if (error) return "An error has occurred: " + error.message;

  if (data) {
    data.sort((a, b) => {
      return b.id - a.id;
    });
  }

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Index">
      <div className="flex justify-center my-5">
        <div className="felx flex-col">
          <h1 className="text-2xl font-bold">React-Go-Firebase CRUD App</h1>

          <span className="text-md font-md text-gray-500">
            Wecome to your app. Do you want to{" "}
            <button
              className="text-blue-600 underline decoration-blue-200"
              onClick={logOut}
            >
              logout?
            </button>
          </span>
        </div>
      </div>

      <div className=" flex justify-center h-10 w-30 ">
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 mx-4 rounded"
          onClick={getStatus}
        >
          Get Status
        </button> */}
        {/* <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold px-3 rounded"
          onClick={getData}
        >
          Get Data
        </button> */}
      </div>

      <div className="flex justify-content">
        <div className="flex flex-col w-1/2">
          <Form />
        </div>
        <div className="flex flex-col  h-96 w-1/2">
          <span className="text-2xl pb-3 underline decoration-wavy font-semibold text-blue-800">
            All Quotes
          </span>
          <div className="overflow-y-auto">
            {isLoading ? "Loading..." : ""}
            {data &&
              data.map((item) => {
                return (
                  <Card
                    id={item.id}
                    author={item.author}
                    quote={item.quote}
                    key={item.id}
                    doc_id={item.doc_id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
