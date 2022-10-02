import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

function App() {
  const [isMenuOpen, setMenuOpenStatus] = useState(false);

  return (
    <nav className="relative z-40">
      {/* navbar for bigger devices */}
      <div className="hidden sm:block">
        <div className=" flex justify-between align-middle items-center px-4 py-2 md:py-3 md:px-6 lg:px-8 lg:py-4 xl:px-12 shadow-md bg-white">
          <span className="text-2xl cursor-pointer text-gray-600">
            Portfolio.
          </span>
          <ul className="flex list-none flex-row space-x-8 lg:space-x-10 xl:space-x-12 text-gray-500">
            <li className="cursor-pointer hover:text-gray-600">Home</li>
            <li className="cursor-pointer hover:text-gray-600">Resume</li>
            <li className="cursor-pointer hover:text-gray-600">Projects</li>
            <li className="cursor-pointer hover:text-gray-600">About me</li>
          </ul>
        </div>
      </div>

      {/* navbar for small devices */}
      <div className="sm:hidden">
        <div className="flex bg-white justify-between align-middle items-center px-4 py-2 z-20">
          <h2 className="text-2xl text-gray-600">Portfolio.</h2>
          <span>
            {isMenuOpen ? (
              <FiX
                className="w-8 h-8 text-gray-500 cursor-pointer"
                onClick={() => setMenuOpenStatus(false)}
              />
            ) : (
              <FiMenu
                className="w-8 h-8 text-gray-500 cursor-pointer"
                onClick={() => setMenuOpenStatus(true)}
              />
            )}
          </span>
        </div>

        <div
          className={`list-none space-y-2 pt-2 py-2 px-2 divide-y text-gray-500 bg-white shadow-md -z-10 absolute w-full ${
            isMenuOpen ? "-translate-y-0" : "-translate-y-full"
          } transition-all ease-in-out`}
        >
          <li className="w-full cursor-pointer">Home</li>
          <li className="w-full cursor-pointer">Resume</li>
          <li className="w-full cursor-pointer">Projects</li>
          <li className="w-full cursor-pointer">About me</li>
        </div>
      </div>
    </nav>
  );
}

export default App;
