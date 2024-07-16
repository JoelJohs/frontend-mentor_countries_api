import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

import { fetchCountryByName, fetchCountryByCode } from "../lib/api";

import { ArrowBack } from "../components/ThemeIcons";

const CountryInfo = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountryByName(name);
        const countryData = data[0];
        setCountry(countryData);

        if (countryData.borders) {
          const borderPromises = countryData.borders.map((code) =>
            fetchCountryByCode(code)
          );
          const borderCountriesData = await Promise.all(borderPromises);
          setBorderCountries(
            borderCountriesData.map((borderCountry) => borderCountry[0])
          );
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, [name]);

  if (!country)
    return (
      <div className="flex justify-center align-middle w-full h-screen">
        Loading...
      </div>
    );

  return (
    <div className="h-full">
      <Link
        className="flex justify-center align-middle gap-3 bg-light-elements dark:bg-dark-elements py-2 px-4 rounded-md shadow-md my-10 ml-5 md:ml-36 w-32"
        to="/"
      >
        <ArrowBack />
        <span>Back</span>
      </Link>
      <div className="flex flex-col md:flex-row justify-center p-5 space-y-6 md:space-y-0 md:space-x-8 ">
        <div className="bg-light-elements dark:bg-dark-elements w-full md:w-1/3 h-auto flex justify-center p-4 mx-auto">
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>
        <div className="flex flex-col md:w-1/2 justify-start py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
            {country.name.common}
          </h1>
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2 space-y-2">
              <p>
                <strong>Native Name:</strong>{" "}
                {Object.values(country.name.nativeName)
                  .map((n) => n.common)
                  .join(", ")}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Subregion:</strong> {country.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
            <div className="md:w-1/2 space-y-2 mt-6 md:mt-0">
              <p>
                <strong>Top Level Domain:</strong> {country.tld.join(", ")}
              </p>
              <p>
                <strong>Currency:</strong>{" "}
                {Object.values(country.currencies)
                  .map((currency) => {
                    const name = currency?.name || "N/A";
                    const symbol = currency?.symbol || "N/A";
                    return `${name} ${symbol}`;
                  })
                  .join(", ")}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center mt-8 space-x-4">
            <h2 className="text-lg font-semibold">Border Countries:</h2>
            <ul className="flex flex-wrap mt-3 md:mt-0 list-none space-x-2">
              {borderCountries.map((borderCountry) => (
                <li
                  key={borderCountry.cca3}
                  className="bg-light-elements dark:bg-dark-elements px-3 py-1 rounded-md shadow-md"
                >
                  {borderCountry.name.common}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
