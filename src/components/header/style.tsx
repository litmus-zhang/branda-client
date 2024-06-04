import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  padding: 0rem 4.5rem 0rem 4.5rem;
  justify-content: space-between;
  .links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  a {
    p {
      color: #000;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .circle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    border: 1px solid #000;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h5 {
      color: #000;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .fk{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  button {
    background: #5d5fef;
    height: 40px;
    min-width: 120px;
    padding: 0.625rem;
    padding: 0rem 1rem 0rem 1rem;
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
