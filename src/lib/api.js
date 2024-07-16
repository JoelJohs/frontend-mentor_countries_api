const apiUrl = import.meta.env.VITE_API_URL;

export const fetchAllCountries = async () => {
  try {
    const res = await fetch(`${apiUrl}/all`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("There has been a problem:", error);
    throw error;
  }
};

export const fetchCountryByName = async (name) => {
  try {
    const res = await fetch(`${apiUrl}/name/${name}`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("There has been a problem:", error);
    throw error;
  }
};

export const fetchCountryByCode = async (code) => {
  try {
    const res = await fetch(`${apiUrl}/alpha/${code}`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("There has been a problem:", error);
    throw error;
  }
};
