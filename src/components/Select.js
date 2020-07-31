import React, {useState} from 'react';

export default function Select(props) {
  const{companies} = props;
  const [brand, setBrand] = useState('');
  for (let company in companies) {
    let brand = companies[company].brand;
  }

  return (
    <select value={brand} onChange={e=>setBrand(e.target.value)}>
      {props.brands.map((brand,index) => <option value={brand}>{brand}</option>)}
    </select>
  );
} 