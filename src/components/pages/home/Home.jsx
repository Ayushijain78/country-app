import React, { useEffect, useMemo, useState } from "react";
import Search from "../../search/Search";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import Dropdown from "../../dropdown/Dropdown";
import CountryCard from "../country/CountryCard";
import useFetch from "../../../api/customHook/useFetch";
import { COUNTRY_URL } from "../../../api/countryController";
import Pagination from "../../pagination/Pagination";

const Home = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState();

  const {
    data: countryList,
    loading: countryListLoading,
    error: countryListError,
  } = useFetch(COUNTRY_URL);

  // Filter countries based on search term
  const getSearchedData = useMemo(() => {
    return Array.isArray(countryList)
      ? countryList.filter((country) => {
          return country?.name?.common
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        })
      : [];
  }, [countryList, searchTerm]);

  // Filter countries based on selected region
  const filteredData = useMemo(() => {
    if (!region) return getSearchedData;
    return getSearchedData.filter((country) => country.region === region);
  }, [getSearchedData, region]);

  // Pagination logic
  const dataPerPage = 12;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const paginationData = filteredData.slice(firstIndex, lastIndex);

  // Handle page click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Handle dropdown selection
  const getSelectedValue = (option) => {
    setRegion(option.value);
  };

  // Generate filter options for regions
  const filterOptions = useMemo(() => {
    if (!Array.isArray(countryList)) return [];
    const regions = [
      ...new Set(countryList.map((country) => country.region)),
    ].filter(Boolean);
    return regions.map((region) => ({ label: region, value: region }));
  }, [countryList]);

  if (countryListLoading) return <p>Loading...</p>;
  if (countryListError) return <p>Error loading data</p>;
  const handleCountryClick = (countryName, country) => {
    navigate(`/country/${countryName}`, { state: { country } });
  };
  return (
    <div>
      <div className="home__container">
        <Search setSearchTerm={setSearchTerm} />
        <Dropdown options={filterOptions} getSelectedValue={getSelectedValue} />
      </div>
      <div className="home__country_cards">
        {paginationData.map((country) => (
          <CountryCard
            onClick={() => handleCountryClick(country?.name?.common, country)}
            key={country?.name?.common}
            image={country?.flags?.svg}
            title={country?.name?.common}
            population={country?.population}
            region={country?.region}
            capital={country?.capital}
          />
        ))}
      </div>
      <Pagination
        dataLength={filteredData.length}
        dataPerPage={dataPerPage}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

export default Home;
