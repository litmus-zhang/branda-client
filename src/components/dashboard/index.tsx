import Image from "next/image";
import { BrandItemStyles, FlexAbsoluteModalStyles, ModalStyle } from "./style";
import { useState } from "react";

export interface IBrand {
  name: string;
  date: string;
  id: string;
}

export const BrandItem: React.FC<IBrand> = ({ name, date }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <BrandItemStyles onClick={() => setShowModal(true)}>
        <div className="img">
          <Image
            src="/brand.svg"
            width={0}
            height={0}
            sizes="100%"
            alt="brand image"
          />
        </div>
        <div className="text">
          <h5>{name}</h5>
          <p>{date}</p>
        </div>
      </BrandItemStyles>
      {showModal && (
        <FlexAbsoluteModalStyles>
          <ModalStyle>
            <div className="head">
              <h4>Brand Details</h4>
            </div>
            <div className="two">
              <div className="details">
                <div className="deet">
                  <p>Brand Name</p>
                  <h5>The Crest</h5>
                </div>
                <div className="deet">
                  <p>Brand Typography</p>
                  <h5>Work Sans</h5>
                </div>
                <div className="deet">
                  <p>Brand Color</p>
                  <h5>colors</h5>
                </div>
                <div className="deet">
                  <p>Brand Messaging</p>
                  <h5>Making a difference</h5>
                </div>
              </div>
              <div className="details-2">
                <div className="dt">
                  <p>Brand Logo</p>
                  <div className="img">
                    <span>Picture</span>
                  </div>
                </div>
                <div className="dt">
                  <p>Brand Pattern</p>
                  <div className="img">
                    <span>Picture</span>
                  </div>
                </div>
                <div className="dt">
                  <p>Brand Photography</p>
                  <div className="img">
                    <span>Picture</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="three">
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
              >
                <p>close</p>
              </button>
              <button type="button" className="export">
                <p>Export as PDF</p>
              </button>
            </div>
          </ModalStyle>
        </FlexAbsoluteModalStyles>
      )}
    </>
  );
};
