import styled from "styled-components";

const RodapeStyleFinal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  overflow: hidden;
  margin: 0 100px;

  @media (max-width: 575px) {
    margin: 0 10px;
  }

  span {
    margin: 0 20px 0 0;
    color: #1769aa;
    font-size: 12px;
    font-weight: 600;
  }

  h6 {
    color: gray;
    margin-top: 10px;
    font-size: 8px;
  }
`;

export default RodapeStyleFinal;
