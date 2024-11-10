'use client'
import React, { useEffect, useState } from "react";
import PortfolioDetailDesign from '../../page/portfolio-detail-design'
import { DataArray } from '../../data'

const Portfolio = (props) => {
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchParams = async () => {
      // Unwrap the promise and get the id
      const resolvedParams = await props.params;
      setId(resolvedParams.id);
    };

    fetchParams();
  }, [props.params]);

  if (id === null) {
    return <div>Loading...</div>; // Display a loading state until the id is set
  }

  console.log("The ID is now:", id); // Log the ID after it's set

  return (
    <PortfolioDetailDesign
      data={DataArray[id]}
      id={id}
      DataArray={DataArray}
    />
  );
}

export default Portfolio;
