import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Header from "./components/header/Header";
import { ThemeProvider } from "./api/customHook/useTheme";
import CountryDetails from "./components/pages/country/CountryDetails";
import NoMatch from "./components/pages/pageNotFound/NoMatch";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/country-app" element={<Home />}></Route>
          <Route path="/country-app/country/:countryName" element={<CountryDetails />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
