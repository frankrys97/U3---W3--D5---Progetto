import { Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import Player from "./MyPlayer";
import SerchedSong from "./SearchSongs";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <MainSection />
        <SerchedSong />
      </Row>
      <Player />
    </Container>
  );
};

export default Home;
