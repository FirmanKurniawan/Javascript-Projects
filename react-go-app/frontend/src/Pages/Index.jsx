import "../App.css";
import HomePage from "../components/HomePage";
import { UserContextProvider } from "../ContextAPI";

function Index() {
  return (
    <div className="App">
      <UserContextProvider>
        <HomePage />
      </UserContextProvider>
    </div>
  );
}

export default Index;
