"use client";
import React, { useState, useEffect } from "react";

import { FetchProyek } from "@/api/proyek/FetchProyek";

import { headingProyek } from "@/components/UI/data/data";

import { proyekProps } from "@/utils/types";

import ProyekItem from "@/components/UI/hooks/pages/proyek-kami/ProyekItem";

import ProyekFilter from "@/components/UI/hooks/pages/proyek-kami/proyekFilter";

import CategoryFilter from "@/components/UI/hooks/pages/proyek-kami/categoryFilter";

import TypeFilter from "@/components/UI/hooks/pages/proyek-kami/typeFilter";

import TypesFilter from "@/components/UI/hooks/pages/proyek-kami/typesFilter";

import { Fade } from "react-awesome-reveal"

export default function Proyek() {
  const [proyek, setProyek] = useState<proyekProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedTypes, setSelectedTypes] = useState<string>("all");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedType("all");
    setSelectedTypes("all");
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  const handleTypesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTypes(e.target.value);
  };

  const filterData = proyek
    .filter((item) =>
      selectedCategory === "all"
        ? true
        : item.attributes.category === selectedCategory
    )
    .filter((item) =>
      selectedCategory === "kaligrafi" && selectedType !== "all"
        ? item.attributes.type === selectedType
        : true
    )
    .filter((item) =>
      selectedCategory === "arsitek" && selectedTypes !== "all"
        ? item.attributes.types === selectedTypes
        : true
    )
    .sort(
      (a, b) =>
        new Date(b.attributes.createdAt).getTime() -
        new Date(a.attributes.createdAt).getTime()
    );

  const uniqueCategories = Array.from(
    new Set(proyek.map((item) => item.attributes.category))
  );

  const uniqueTypes = Array.from(
    new Set(
      proyek
        .filter((item) => item.attributes.category === "kaligrafi")
        .map((item) => item.attributes.type)
    )
  );

  const uniqueTypesForArsitek = Array.from(
    new Set(
      proyek
        .filter((item) => item.attributes.category === "arsitek")
        .map((item) => item.attributes.types)
    )
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchProyek();
      setProyek(data);
    };
    fetchData();
  }, []);

  return (
    <section className="proyek">
      <div className="proyek__container container">
        <div className="heading">
          {headingProyek.map((item: any) => (
            <React.Fragment key={item.id}>
              <div className="title">
                <Fade direction="left" triggerOnce delay={300} duration={3000}>
                  <h1>{item.title}</h1>
                </Fade>
              </div>

              <div className="desc">
                <Fade direction="right" triggerOnce delay={300} duration={3000}>
                  <p>{item.desc}</p>
                </Fade>
              </div>
            </React.Fragment>
          ))}
        </div>

        <ProyekFilter topItem={filterData[0]} />

        <div className="filter">
          <CategoryFilter
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
            uniqueCategories={uniqueCategories}
          />

          {selectedCategory === "kaligrafi" && (
            <TypeFilter
              selectedType={selectedType}
              handleTypeChange={handleTypeChange}
              uniqueTypes={uniqueTypes}
            />
          )}

          {selectedCategory === "arsitek" && (
            <TypesFilter
              selectedTypes={selectedTypes}
              handleTypesChange={handleTypesChange}
              uniqueTypes={uniqueTypesForArsitek}
            />
          )}
        </div>

        <div className="content">
          {filterData.map((item) => (
            <ProyekItem key={item.id} proyek={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
