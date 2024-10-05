"use client"

import React, { Fragment } from "react";

import { TypesFilterProps } from "@/utils/types";

export default function TypesFilter({
  selectedTypes,
  handleTypesChange,
  uniqueTypes,
}: TypesFilterProps) {
  return (
    <Fragment>
      <select value={selectedTypes} onChange={handleTypesChange}>
        <option value="all">All Types</option>
        {uniqueTypes.map((types) => (
          <option key={types} value={types}>
            {types}
          </option>
        ))}
      </select>
    </Fragment>
  );
}
