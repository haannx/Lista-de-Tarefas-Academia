import React, { useState } from "react";

const Filter = ({ setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar treino: </h2>
      <div className="filter-options">
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={() => setSort("Asc")}>Crescente</button>
          <button onClick={() => setSort("Desc")}>Decrescente</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
