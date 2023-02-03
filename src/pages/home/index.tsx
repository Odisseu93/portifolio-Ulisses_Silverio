import { useState } from "react";
import { Container, Badge, Image } from "react-bootstrap";
import { BtnMenu } from "../../components/BtnMenu";

const Home: React.FC = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <header className="header-mobile-home p-2 w-100">
        <p className="name text-left fs-2 fw-bold">Ulisses Silvério</p>
        <p className="professional-title text-left fw-bold">
          Desenvolvedor Frontend | React.js | Typescript
        </p>
      </header>
      {showMain ? (
        <main className="main">
          <Badge className="greeting" bg="info">
            Olá bem-vindo(a)
            <br /> ao meu portfólio!
          </Badge>
          <Image
            className="image-perfil rounded-circle"
            src="https://avatars.githubusercontent.com/u/76600539?v=4"
          />
          <Container
            className="container-btn-menu d-flex flex-column justify-cotenten-around gap-3"
            fluid="sm"
          >
            <BtnMenu label="Sobre" onclick={() => console.log("ok")} />
            <BtnMenu label="Projetos" onclick={() => console.log("ok")} />
            <BtnMenu label="Contato" onclick={() => console.log("ok")} />
          </Container>
        </main>
      ) : (
        <main className="placeholder-main"></main>
      )}

      <footer className="footer-mobile-home d-flex align-items-center w-100">
        <Badge
          className="show-menu mx-auto"
          pill
          bg="dark"
          onClick={() => setShowMain(!showMain)}
        >
          {showMain ? "Fique a vontade!"  : "Aperte aqui..."}
        </Badge>
      </footer>
    </>
  );
};

export default Home;
