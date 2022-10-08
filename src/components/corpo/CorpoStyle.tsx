import styled from "styled-components";

const CorpoStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  div {
    display: flex;
    width: 100%;
  }

  span {
    text-align: justify;
    font-weight: 900;
    font-size: 22px;
  }

  p {
    padding: 80px 150px;
    text-align: justify;
    font-size: 12px;
  }

  img {
    width: 100%;
    height: 350px;

    @media (max-width: 1240px) {
      height: 430px;
    }
  }
`;

export default CorpoStyle;
