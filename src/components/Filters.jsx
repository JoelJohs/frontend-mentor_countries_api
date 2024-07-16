import { useState } from "react";
import { useFilterStore } from "../store";
import { MagnifyingGlass, DownArrow } from "./ThemeIcons";

const Filters = () => {
  const { searchTerm, setSearchTerm, selectedRegion, setSelectedRegion } =
    useFilterStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-start gap-5 bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text px-10 py-5 rounded-md w-full xl:w-[600px]">
        <span className="flex items-center">
          <MagnifyingGlass />
        </span>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none flex-1"
        />
      </div>
      <div className="relative mt-5 ">
        <button
          onClick={handleDropdownToggle}
          className="flex items-center justify-between gap-2 bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text p-5 rounded-md w-[200px]"
        >
          {selectedRegion || "Filter by region"}
          <span className="flex items-center">
            <DownArrow />
          </span>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full mt-2 bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text p-5 rounded-md w-[200px] shadow-lg">
            <ul>
              <li className="mb-1">
                <button
                  onClick={() => handleRegionSelect("Africa")}
                  className="w-full text-left"
                >
                  Africa
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleRegionSelect("Americas")}
                  className="w-full text-left"
                >
                  America
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleRegionSelect("Asia")}
                  className="w-full text-left"
                >
                  Asia
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleRegionSelect("Europe")}
                  className="w-full text-left"
                >
                  Europe
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleRegionSelect("Oceania")}
                  className="w-full text-left"
                >
                  Oceania
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
