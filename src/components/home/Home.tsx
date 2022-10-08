import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import MonitorIcon from "@mui/icons-material/Monitor";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import Matrix from "./Matrix.jpg";

import Cabecalho from "../cabecalho/Cabecalho";
import Icones from "../icones/Icones";
import { IconesStyleDivMae } from "../icones/IconesStyle";

function Home() {
  return (
    <div className="Home">
      <Cabecalho
        imagem={Matrix}
        alt="Tela Matrix"
        texto="Minha primeira página com React."
      />
      <IconesStyleDivMae>
        <Icones
          icone={MonitorIcon}
          titulo="Somente para Desktop"
          texto="Vamos aprender, como utilizar um framework."
        />
        <Icones
          icone={LineStyleIcon}
          titulo="Criado com componentes"
          texto="Utilizamos o Styled Components."
        />
        <Icones
          icone={CheckCircleOutlineIcon}
          titulo="Fácil aproveitamento"
          texto="Estamos no caminho."
        />
      </IconesStyleDivMae>
    </div>
  );
}

export default Home;
