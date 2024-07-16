import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { useFilterStore } from "../store";

import { fetchAllCountries } from "../lib/api";
import Filters from "../components/Filters";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const { searchTerm, selectedRegion } = useFilterStore();

  useEffect(() => {
    const getCountries = async () => {
      try {
        const countriesData = await fetchAllCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error("There has been a problem:", error);
        throw error;
      }
    };

    getCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    const matchesSearchTerm = searchTerm
      ? country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesRegion && matchesSearchTerm;
  });

  return (
    <>
      <div className="flex flex-col xl:flex-row justify-between align-middle mt-5 py-2 p-4 md:px-16">
        <Filters />
      </div>

      <div className="md:grid xl:grid-cols-4 md:grid-cols-3 gap-2 mt-10">
        {filteredCountries.map((country) => (
          <Link key={country.cca3} to={`/country/${country.name.common}`}>
            <CountryCard country={country} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
