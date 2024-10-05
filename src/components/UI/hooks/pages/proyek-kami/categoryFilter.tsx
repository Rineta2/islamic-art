"use client";

import { ProyekFilterProps } from "@/utils/types";

import React from "react";

import { Fade } from "react-awesome-reveal"

export default function CategoryFilter({
  selectedCategory,
  handleCategoryClick,
  uniqueCategories,
}: ProyekFilterProps) {
  return (
    <div className="filter__button">
      <Fade direction="left" delay={300} duration={3000} triggerOnce>
        <button
          className={`btn ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => handleCategoryClick("all")}
        >
          All
        </button>
      </Fade>

      {uniqueCategories.map((category) => (
        <Fade delay={300} duration={3000} direction="right" triggerOnce>
          <button
            key={category}
            className={`btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        </Fade>
      ))}
    </div>
  );
}
