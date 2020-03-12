import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #3350b8;

  .header {
    width: 100%;
    height: 100%;
    max-width: 1280px;
    justify-content: center;
    margin: auto;
    box-shadow: none;
    color: #fff;

    .subHeader {
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    .text-logo {
      font-size: 38px;
      font-weight: 500;
      letter-spacing: 1px;
      display: flex;
      align-items: center;

      @media (max-width: 580px) {
        font-size: 22px;
      }

      .logo {
        width: 35px;
        margin-right: 15px;
      }
    }
  }
`;
