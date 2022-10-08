import React from "react";
import CabecalhoStyle from "./CabecalhoStyle";

interface CabecalhoProps {
  imagem: string;
  alt: string;
  texto: string;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ imagem, alt, texto }) => {
  return (
    <CabecalhoStyle>
      <img src={imagem} alt={alt} />
      <h1>{texto}</h1>
    </CabecalhoStyle>
  );
};
export default Cabecalho;
