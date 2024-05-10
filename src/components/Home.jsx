import { Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import Player from "./MyPlayer";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <MainSection />
      </Row>
      <Player />
    </Container>
  );
};

export default Home;
