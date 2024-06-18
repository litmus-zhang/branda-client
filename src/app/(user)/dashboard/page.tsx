"use client";
import { BrandItem } from "@/components/dashboard";
import { Brands } from "@/components/dashboard/data";
import {
  FlexAbsoluteModalStyles,
  HomeStyles,
} from "@/components/dashboard/style";
import { PlusIcon } from "@/components/icons/dashboard";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export interface Ierror {
  active: boolean;
  text: string;
}

const Home = () => {
  const [allBrands, setAllBrands] = useState(Brands);
  const [duplicateBrands, setDuplicateBrands] = useState(Brands);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filtered = allBrands.filter((ele) =>
      ele.name.toLowerCase().includes(query.toLowerCase())
    );
    if (filtered && filtered.length >= 1) {
      setAllBrands(filtered);
    } else {
      setQueryError({ active: true, text: "No brand found" });
    }
  };
  const [queryError, setQueryError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQueryError({ active: false, text: "" });
    setQuery(value);
    if (value === "") {
      setQueryError({ active: true, text: "invalid query" });
      setAllBrands(duplicateBrands);
    }
  };
  return (
    <HomeStyles>
      <div className="top">
        <h3>All Brands</h3>
        <div className="other">
          <div className="inp">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="query"
                id=""
                value={query}
                onChange={handleInput}
                placeholder="search for brand"
              />
            </form>
            {queryError.active && (
              <div className="abs">
                <p>{queryError.text}</p>
              </div>
            )}
          </div>
          <div className="btn">
            <button type="button" onClick={() => router.push("/dashboard/new")}>
              <p>Create New</p>
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="all-brands">
        {allBrands.map((ele, index) => (
          <BrandItem key={index} {...ele} />
        ))}
      </div>
    </HomeStyles>
  );
};

export default Home;
