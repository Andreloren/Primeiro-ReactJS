import React from "react";
import CorpoStyle from "./CorpoStyle";

interface CorpoProps {
  texto: string;
  textoSpan: string;
  imagem: string;
  alt: string;
  lado: string;
}

const Corpo: React.FC<CorpoProps> = ({
  texto,
  textoSpan,
  imagem,
  alt,
  lado,
}) => {
  switch (lado) {
    case "left":
      return (
        <CorpoStyle>
          <img src={imagem} alt={alt} />
          <div>
            <p>
              <span>{textoSpan}</span>
              <br />
              {texto}
            </p>
          </div>
        </CorpoStyle>
      );
      break;
    case "right":
      return (
        <CorpoStyle>
          <div>
            <p>
              <span>{textoSpan}</span>
              <br />
              {texto}
            </p>
          </div>
          <img src={imagem} alt={alt} />
        </CorpoStyle>
      );
      break;

    default:
      return (
        <div>
          <p></p>
        </div>
      );
      break;
  }
};

export default Corpo;
