import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  @media (max-width: 580px) {
    justify-content: flex-start;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    height: 180px;
  }

  .card {
    min-width: 250px;
    background: #4daf50;
    color: #fff;
    text-align: right;
  }

  #cardExpenses {
    background: #f44336;
    margin-left: 30px;
  }
`;
