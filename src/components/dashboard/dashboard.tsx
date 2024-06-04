import { useRef, useState } from "react";
import { MultiStepFormStyle, StageStyle, VaryingStepStyle } from "./style";
import { motion } from "framer-motion";


export const Dropdown  = () => {
    return ( 
        <>I am dropdown</>
     );
}
 

export const MultiStepForm = () => {
    const [trackStages, setTrackStages] = useState(1);
    const handleSelection = (step: string) => {
      if (step === "name") {
        setTrackStages(trackStages + 1);
      } else if (step === "logo") {
        setTrackStages(trackStages + 1);
      } else if (step === "color") {
        setTrackStages(trackStages + 1);
      } else if (step === "font") {
        setTrackStages(trackStages + 1);
        handleScroll(50);
      } else if (step === "tag") {
        setTrackStages(trackStages + 1);
        handleScroll(50);
      } else if (step === "pattern") {
        setTrackStages(trackStages + 1);
        handleScroll(50);
      } else if (step === "photo") {
        setTrackStages(trackStages + 1);
      } else if (step === "pitchdeck") {
      }
    };
    // slider when the step gets to the middle
    const containerRef = useRef<HTMLDivElement>(null);
  
    const handleScroll = (scrollOffset: number) => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: scrollOffset,
          behavior: "smooth",
        });
      }
    };
    return (
      <MultiStepFormStyle>
        <div className="stage-head" ref={containerRef}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((ele, index) => (
            <StageStyle key={index} $isSelected={ele <= trackStages}>
              <motion.div className="circle" layout>
                <p>{ele}</p>
              </motion.div>
              {index !== 7 && <div className="dash"></div>}
            </StageStyle>
          ))}
        </div>
          {trackStages === 1 && (
            <VaryingStepStyle>
              <div className="top">
                <h3>Brand Name</h3>
                <p>Choose your preferred brand logo</p>
              </div>
              <div className="otions"></div>
              <div className="btn">
                <button type="submit" onClick={() => handleSelection("name")}>
                  Select brand name
                </button>
              </div>
            </VaryingStepStyle>
          )}
        {trackStages === 2 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Logo</h3>
              <p>Choose your preferred brand logo</p>
            </div>
            <div className="otions"></div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("logo")}>
                Select brand logo
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 3 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Color</h3>
              <p>Choose your preferred brand color</p>
            </div>
            <div className="otions"></div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("color")}>
                Select brand color
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 4 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Typography</h3>
              <p>Choose your preferred brand font type</p>
            </div>
            <div className="otions"></div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("font")}>
                Select brand font
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 5 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Tag line/Messaging</h3>
              <p>Choose your preferred brand tagline</p>
            </div>
            <div className="otions"></div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("tag")}>
                Select brand tag line
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 6 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Pattern</h3>
              <p>Choose your preferred brand pattern</p>
            </div>
            <div className="otions"></div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("pattern")}>
                Select brand pattern
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 7 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand photography</h3>
              <p>Choose your preferred brand photography</p>
            </div>
            <div className="otions"></div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("photo")}>
                Select brand photo
              </button>
            </div>
          </VaryingStepStyle>
        )}
        {trackStages === 8 && (
          <VaryingStepStyle>
            <div className="top">
              <h3>Brand Pitch Deck</h3>
              <p>Choose your preferred pitch deck template</p>
            </div>
            <div className="otions"></div>
            <div className="btn">
              <button type="submit" onClick={() => handleSelection("pitchdeck")}>
                Select brand pitch deck
              </button>
            </div>
          </VaryingStepStyle>
        )}
      </MultiStepFormStyle>
    );
  };