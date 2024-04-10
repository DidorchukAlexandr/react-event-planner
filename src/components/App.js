// import { createContext, useState } from "react";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./Header/Header";
import EventList from "./EventCard/EventList";
// export const SearchContext = createContext();

function App() {
  // const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Header />
      <EventList />
      <GlobalStyle />
    </div>
  );
}

export default App;
