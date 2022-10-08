import React from "react";
import { IconesStyle } from "./IconesStyle";
import SvgIcon from "@mui/icons-material/Monitor";

interface IconesProps {
  icone: React.ElementType;
  titulo: string;
  texto: string;
}

const Icones: React.FC<IconesProps> = ({ icone, titulo, texto }) => {
  return (
    <IconesStyle>
      <div>
        <SvgIcon component={icone} fontSize="large" color="primary" />
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
    </IconesStyle>
  );
};
export default Icones;
