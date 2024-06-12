"use client";
import {
  DashboardStyle,
  DropCompStyles,
  DropdownStyles,
  FirstFormStyle,
} from "@/components/dashboard/style";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AngleDown, ArrowStyles } from "@/components/icons/dashboard";
import { INiche, Niches } from "@/components/dashboard/data";
import { MultiStepForm } from "@/components/dashboard/dashboard";

export default function Home() {
  const [formLevel, setFormLevel] = useState(0);
  const [showNicheDropdown, setShowNicheDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [niche, setNiche] = useState<INiche | null>(null);
  const [allNiches, setAllNiches] = useState(Niches);
  useEffect(() => {
    const selectedNiche = allNiches.find((ele) => ele.isSelected === true);
    if (selectedNiche) {
      setNiche(selectedNiche);
    }
  }, [allNiches]);
  const selectNiche = (name: string) => {
    const newList = allNiches.map((ele) => {
      return { ...ele, isSelected: ele.name === name };
    });
    setAllNiches(newList);
    setShowNicheDropdown(false);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    console.log("submitted");
    // call API
    // move to multistep form
    setFormLevel(1);
  };
  return (
    <DashboardStyle>
      <div className="cont">
        {formLevel === 0 && (
          <FirstFormStyle>
            <h3>Kindly Provide your brand details</h3>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-ele">
                <label htmlFor="">Niche</label>
                <DropdownStyles>
                  <div
                    className="head"
                    onClick={() => setShowNicheDropdown(!showNicheDropdown)}
                  >
                    <p>{niche === null ? "Select Niche" : niche.name}</p>
                    <ArrowStyles $isSelected={showNicheDropdown}>
                      <AngleDown />
                    </ArrowStyles>
                  </div>
                  {showNicheDropdown && (
                    <div className="dropdown">
                      {allNiches.map((ele, index) => (
                        <DropCompStyles
                          $isSelected={niche?.name === ele.name}
                          key={index}
                          onClick={() => selectNiche(ele.name)}
                        >
                          <p>{ele.name}</p>
                        </DropCompStyles>
                      ))}
                    </div>
                  )}
                </DropdownStyles>
              </div>
              <div className="form-ele">
                <label htmlFor="">Country</label>
                <DropdownStyles>
                  <div
                    className="head"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  >
                    <p>Select Country</p>
                    <ArrowStyles $isSelected={showCountryDropdown}>
                      <AngleDown />
                    </ArrowStyles>
                  </div>
                </DropdownStyles>
              </div>
              <div className="form-ele aud">
                <label htmlFor="audience">Target Audience</label>
                <textarea name="audience" id="" rows={1}></textarea>
              </div>
              <div className="form-ele desc">
                <label htmlFor="description">Brand description</label>
                <textarea name="description" id="" rows={1}></textarea>
              </div>
              <div className="btn">
                <motion.button type="submit" whileTap={{ scale: 0.85 }}>
                  Generate Assets
                </motion.button>
              </div>
            </form>
          </FirstFormStyle>
        )}
        {formLevel === 1 && <MultiStepForm />}
      </div>
    </DashboardStyle>
  );
}


