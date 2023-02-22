import { useEffect, useState } from "react";
import { Container, Badge, Image, Nav } from "react-bootstrap";
import { BtnMenu } from "../../components/BtnMenu";

const Home: React.FC = () => {
  const [showMain, setShowMain] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.onresize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log(windowWidth);
  }, [windowWidth]);

  return (
    <>
      {windowWidth <= 768 ? (
        <>
          {" "}
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
              {showMain ? <p>Fique a vontade!</p> : <p><span className="blink">|</span><span className="text-muted">Mensagem</span></p>}
            </Badge>
          </footer>
        </>
      ) : (
        <>
          <header>
            <Nav className="nav-desktop">
              <Nav.Item className="nav-desktop__item">
                <Nav.Link>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-desktop__item">
                <Nav.Link>Sobre</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-desktop__item">
                <Nav.Link>Projeto</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-desktop__item">
                <Nav.Link>Contato</Nav.Link>
              </Nav.Item>
            </Nav>
          </header>
          <main className="main">
            <Container fluid className="container-welcome">
              <Image
                className="image-perfil"
                src="https://avatars.githubusercontent.com/u/76600539?v=4"
              />
              <p className="greeting-desktop fw-bold fs-2  mt-5">
                Olá bem-vindo(a) ao meu portfólio!
              </p>
            </Container>
          </main>
        </>
      )}
    </>
  );
};

export default Home;
