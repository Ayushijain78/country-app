import "./App.scss";
//header
//dark mode
//light theme
//search engine
// api integration for search api
// filter by region section
// api integration for filter
// country cards
// title, polpulation, region, capital, flag image
// api integration
// on click redirect to new page of country info
// Back button functionalities

import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Header from "./components/header/Header";
import { ThemeProvider } from "./api/customHook/useTheme";
import CountryPage from "./components/pages/country/CountryCard";
import CountryDetails from "./components/pages/country/CountryDetails";
import NoMatch from "./components/pages/pageNotFound/NoMatch";

// usemediapredicate for mobile
// 1=> common css files all common color code
// 2=> usetheme context
// 3=> context api
// 4=> axios
// 5=> promises for fetching api
// 6=> components
// Header component
// search component
// filter component
// cards component
// context theme component
// country detail component
// back button
// page not found

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/country/:countryName" element={<CountryDetails />} />
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
