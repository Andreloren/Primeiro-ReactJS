import React from "react";
import Rodape from "../cabecalho/Cabecalho";
import RodapeStyleInicial from "../cabecalho/CabecalhoStyle";
import RodapeStyleFinal from "./RodapeStyle";
import SvgIcon from "@mui/icons-material/Monitor";

interface RodapeTotalProps {
  imagem: string;
  alt: string;
  texto: string;
  textoSpan1: string;
  textoSpan2: string;
  textoSpan3: string;
  textoSpan4: string;
  TextoH6: string;
  icone1: React.ElementType;
  icone2: React.ElementType;
  icone3: React.ElementType;
}

const RodapeTotal: React.FC<RodapeTotalProps> = ({
  imagem,
  alt,
  texto,
  textoSpan1,
  textoSpan2,
  textoSpan3,
  textoSpan4,
  TextoH6,
  icone1,
  icone2,
  icone3,
}) => {
  return (
    <>
      <RodapeStyleInicial>
        <img src={imagem} alt={alt} />
        <h1>{texto}</h1>
      </RodapeStyleInicial>
      <RodapeStyleFinal>
        <div>
          <p>
            <span>{textoSpan1}</span>
            <span>{textoSpan2}</span>
            <span>{textoSpan3}</span>
            <span>{textoSpan4}</span>
          </p>
          <h6>{TextoH6}</h6>
        </div>
        <div>
          <SvgIcon component={icone1} color="primary" />
          <SvgIcon component={icone2} color="primary" />
          <SvgIcon component={icone3} color="primary" />
        </div>
      </RodapeStyleFinal>
    </>
  );
};
export default RodapeTotal;
