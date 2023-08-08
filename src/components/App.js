// import { createContext, useState } from "react";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./Header/Header";
// export const SearchContext = createContext();

function App() {
  // const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Header />

      <GlobalStyle />
    </div>
  );
}

export default App;
