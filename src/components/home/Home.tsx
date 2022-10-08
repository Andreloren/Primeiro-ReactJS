import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import MonitorIcon from "@mui/icons-material/Monitor";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import Matrix from "./images/Matrix.jpg";
import Mobile from "./images/mobile.jpg";
import Codigo from "./images/codigo.jpg";
import Machine from "./images/machine.jpg";

import Cabecalho from "../cabecalho/Cabecalho";
import Icones from "../icones/Icones";
import { IconesStyleDivMae } from "../icones/IconesStyle";
import Corpo from "../corpo/Corpo";

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
      <Corpo
        lado="right"
        imagem={Mobile}
        alt="mobile"
        textoSpan="Lorem Ipsum"
        texto="Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Suscipit vitae labore pariatur
            laudantium! Doloribus neque placeat vel, aliquam nulla quos amet,
            non, illum porro esse corporis mollitia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quidem pariatur doloremque consectetur
            iusto incidunt porro dolore est vero, voluptatibus ab tenetur?
            Dolorem autem eos numquam adipisci tenetur iste, facere nihil.Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.Suscipit vitae
            labore pariatur laudantium! Doloribus neque placeat vel, aliquam
            nulla quos amet, non, illum porro esse corporis mollitia! Lorem
            ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Corpo
        lado="left"
        alt="mobile"
        textoSpan="Lorem Ipsum"
        texto="Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Suscipit vitae labore pariatur
            laudantium! Doloribus neque placeat vel, aliquam nulla quos amet,
            non, illum porro esse corporis mollitia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quidem pariatur doloremque consectetur
            iusto incidunt porro dolore est vero, voluptatibus ab tenetur?
            Dolorem autem eos numquam adipisci tenetur iste, facere nihil.Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.Suscipit vitae
            labore pariatur laudantium! Doloribus neque placeat vel, aliquam
            nulla quos amet, non, illum porro esse corporis mollitia! Lorem
            ipsum dolor sit amet consectetur adipisicing elit."
        imagem={Codigo}
      />
      <Corpo
        lado="right"
        alt="mobile"
        textoSpan="Lorem Ipsum"
        texto="Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Suscipit vitae labore pariatur
            laudantium! Doloribus neque placeat vel, aliquam nulla quos amet,
            non, illum porro esse corporis mollitia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quidem pariatur doloremque consectetur
            iusto incidunt porro dolore est vero, voluptatibus ab tenetur?
            Dolorem autem eos numquam adipisci tenetur iste, facere nihil.Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.Suscipit vitae
            labore pariatur laudantium! Doloribus neque placeat vel, aliquam
            nulla quos amet, non, illum porro esse corporis mollitia! Lorem
            ipsum dolor sit amet consectetur adipisicing elit."
        imagem={Machine}
      />
    </div>
  );
}

export default Home;
