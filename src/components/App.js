// import React from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const appClass = false ? "App dark" : "App light"

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button>Dark Mode</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;





// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";
// import "../App.css";

// // import "./App.css";

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     return window.localStorage.getItem("darkMode") === "true";
//   });

//   function handleDarkModeToggle() {
//     setIsDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       window.localStorage.setItem("darkMode", newMode);
//       return newMode;
//     });
//   }

//   const appClass = isDarkMode ? "App dark" : "App light";

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkModeToggle}>
//           {isDarkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;






import React, { useState, useEffect } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// import "../App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
    

 
  function handleDarkModeToggle() {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      return newMode;
    });
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;