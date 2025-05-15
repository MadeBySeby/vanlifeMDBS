// import React, { createContext } from "react";
// const AuthContext = createContext();
// export function AuthProvider({ children }) {
//   const [isLogged, setIsLogged] = useState(() =>
//     localStorage.getItem("loggedIn")
//   );

//   function logIn() {
//     localStorage.setItem("loggedIn", true);
//     setIsLogged(true);
//   }

//   function logOut() {
//     localStorage.removeItem("loggedIn");
//     setIsLogged(false);
//   }

//   return (
//     <AuthContext.Provider value={{ isLogged, logIn, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
