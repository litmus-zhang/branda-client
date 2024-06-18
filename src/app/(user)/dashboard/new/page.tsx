"use client";
import {
  DashboardStyle,
  DropCompStyles,
  DropdownStyles,
  FirstFormStyle,
} from "@/components/new/style";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AngleDown,
  ArrowStyles,
  ButtonLoader,
} from "@/components/icons/dashboard";
import { Countries, INiche, Niches } from "@/components/new/data";
import { MultiStepForm } from "@/components/new/new";
import { Ierror } from "../page";

interface IForm {
  niche: string;
  country: string;
  target: string;
  description: string;
}
export default function Home() {
  const [formLevel, setFormLevel] = useState(0);
  const [showNicheDropdown, setShowNicheDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [niche, setNiche] = useState<INiche | null>(null);
  const [allNiches, setAllNiches] = useState(Niches);
  const [country, setCountry] = useState<INiche | null>(null);
  const [allCountries, setAllCountries] = useState(Countries);
  const [form, setForm] = useState<IForm>({
    niche: "",
    country: "",
    target: "",
    description: "",
  });

  const [target, setTarget] = useState("");
  const [description, setDescription] = useState("");

  const [targetError, setTargetError] = useState<Ierror>({
    active: false,
    text: "",
  });
  const [descriptionError, setDescriptionError] = useState<Ierror>({
    active: false,
    text: "",
  });
  useEffect(() => {
    const selectedNiche = allNiches.find((ele) => ele.isSelected === true);
    const selectedCountry = allCountries.find((ele) => ele.isSelected === true);
    if (selectedNiche) {
      setNiche(selectedNiche);
    }
    if (selectedCountry) {
      setCountry(selectedCountry);
    }
  }, [allNiches, allCountries]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ) => {
    const value = e.target.value;
    if (id === "target") {
      setTarget(value);
      if (value === "") {
        setTargetError({ active: true, text: "Invalid Input" });
      } else {
        setTargetError({ active: false, text: "" });
        setForm({ ...form, target: value });
      }
    } else if (id === "description") {
      setDescription(value);
      if (value === "") {
        setDescriptionError({ active: true, text: "Invalid Input" });
      } else {
        setDescriptionError({ active: false, text: "" });
        setForm({ ...form, description: value });
      }
    }
  };
  const selectNiche = (name: string) => {
    const newList = allNiches.map((ele) => {
      return { ...ele, isSelected: ele.name === name };
    });
    setForm({ ...form, niche: name });
    setAllNiches(newList);
    setShowNicheDropdown(false);
  };
  const selectCountry = (name: string) => {
    const newList = allCountries.map((ele) => {
      return { ...ele, isSelected: ele.name === name };
    });
    setForm({ ...form, country: name });
    setAllCountries(newList);
    setShowCountryDropdown(false);
  };
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true);
    setTimeout(() => {
      console.log(form, "submitted");
      setLoading(false);
      setFormLevel(1);
    }, 1500);
    // call API
    // move to multistep form
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
                    <p>{country === null ? "Select Country" : country.name}</p>
                    <ArrowStyles $isSelected={showCountryDropdown}>
                      <AngleDown />
                    </ArrowStyles>
                  </div>
                  {showCountryDropdown && (
                    <div className="dropdown">
                      {allCountries.map((ele, index) => (
                        <DropCompStyles
                          $isSelected={country?.name === ele.name}
                          key={index}
                          onClick={() => selectCountry(ele.name)}
                        >
                          <p>{ele.name}</p>
                        </DropCompStyles>
                      ))}
                    </div>
                  )}
                </DropdownStyles>
              </div>
              <div className="form-ele aud">
                <label htmlFor="audience">Target Audience</label>
                <textarea
                  name="audience"
                  id=""
                  rows={1}
                  value={target}
                  onChange={(e) => handleInputChange(e, "target")}
                  className={targetError.active ? "error-bdr" : ""}
                ></textarea>
              </div>
              <div className="form-ele desc">
                <label htmlFor="description">Brand description</label>
                <textarea
                  name="description"
                  id=""
                  rows={1}
                  value={description}
                  onChange={(e) => handleInputChange(e, "description")}
                  className={descriptionError.active ? "error-bdr" : ""}
                ></textarea>
              </div>
              <div className="btn">
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.85 }}
                  disabled={
                    country == null ||
                    niche == null ||
                    target === "" ||
                    description === "" ||
                    targetError.active !== false ||
                    descriptionError.active !== false
                  }
                >
                  {isLoading ? <ButtonLoader /> : "Generate Assets"}
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
