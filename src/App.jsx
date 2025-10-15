import React from "react";
import AppRoutes from "./AppRoutes";
import LenisProvider from "./context/Lenis/LenisContext";

const App = () => {
  return (
    <>
      <LenisProvider>
        <AppRoutes />
      </LenisProvider>
    </>
  );
};

export default App;
