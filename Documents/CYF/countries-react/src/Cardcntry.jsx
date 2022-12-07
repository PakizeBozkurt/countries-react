import React, { useEffect, useState } from "react";
import CountryInfo from "./CountryInfo";

function Cardcntry() {
  const [country, setCountry] = useState([]);
  const[search,setSearch]=useState("")
  const[filtered,setFiltered]=useState(country)




  const handleChange = (e) => {
    setSearch(e.target.value);
    setFiltered(
      country.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  console.log(country);

  return (
    <div>
      <h2>countries</h2>
      <input placeholder="search" onChange={handleChange} type="text"/>
     
     <div className="container">
        <div className="row">
      {filtered.map((e) => {
        return <CountryInfo name={e} />;
      })}
      </div>
    </div>
    </div>
  );
}

export default Cardcntry;
