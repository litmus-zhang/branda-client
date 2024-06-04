import styled from "styled-components";

export const AuthStyles = styled.div`
  padding: 0rem 4.5rem 0rem 4.5rem;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 40%;
    height: 60vh;
    border-radius: 0.625rem;
    border: 1px solid #000;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      color: #000;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .btn {
      margin-top: 4rem;
    }
    button {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0.625rem;
      padding-left: 0.85rem;
      justify-content: center;
      border-radius: 0.625rem;
      border: 1px solid #d9d9d9;
      background: #fff;
      svg {
        scale: 0.65;
      }
      p {
        color: #000;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  @media (max-width: 998px) {
    .form {
      width: 70%;
    }
  }
  @media (max-width: 500px) {
    .form {
      width: 95%;
    }
  }
`;
