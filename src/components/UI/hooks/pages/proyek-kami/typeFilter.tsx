import React from "react";

import { TypeFilterProps } from "@/utils/types";

export default function TypeFilter({
  selectedType,
  handleTypeChange,
  uniqueTypes,
}: TypeFilterProps) {
  return (
    <select value={selectedType} onChange={handleTypeChange}>
      <option value="all">All Types</option>
      {uniqueTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}