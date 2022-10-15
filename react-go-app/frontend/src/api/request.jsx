import { getAuth, onAuthStateChanged } from "firebase/auth";

export const getUser = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const email = user.email;
      return email;
    }
  });
};

export const getData = async () => {
  const res = await fetch("http://localhost:8080/quotes");
  return res.json();
};

export const getStatus = async () => {
  const res = await fetch("http://localhost:8080/status");
  return res.json();
};

export const postQuote = async (data) => {
  console.log("Data in postQuote: ", data);
  const res = await fetch("http://localhost:8080/quote/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateQuote = async (data) => {
  const res = await fetch("http://localhost:8080/quote/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteQuote = async (doc_id) => {
  const res = await fetch(`http://localhost:8080/quote/${doc_id}`, {
    method: "DELETE",
  });
  return res.json();
};
