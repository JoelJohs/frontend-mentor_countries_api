const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country;
  
    return (
      <div className="bg-light-elements dark:bg-dark-elements rounded-md text-base w-[320px] mx-auto mb-16">
        <img src={flags.png} alt={flags.alt} className="rounded-t-md cardFlag"/>
        <div className="pt-5 px-6 pb-8">
          <h2 className="text-lg font-extrabold mb-2">{name.common}</h2>
          <p><span>Population: </span>{population.toLocaleString()}</p>
          <p><span>Region: </span>{region}</p>
          <p><span>Capital: </span>{capital ? capital[0] : 'N/A'}</p>
        </div>
      </div>
    );
  }
  
  export default CountryCard;
  