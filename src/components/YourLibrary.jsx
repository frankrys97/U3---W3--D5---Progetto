import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import MyPlayer from "./MyPlayer";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { addFavouriteSong, removeFavouriteSong } from "../redux/actions";

const YourLibrary = () => {
  const favouriteSongs = useSelector((state) => state.favouriteSongs.content);
  const dispatch = useDispatch();
  return (
    <Container fluid>
      <Row>
        <Sidebar />

        <Col md={{ span: 9, offset: 3 }} className="mainPage">
          <Row>
            <h3 className="text-center text-light mt-3">Your Favourite Song</h3>
          </Row>

          <Row>
            {favouriteSongs.map((item) => (
              <Col key={item.id} sm={2} className="my-3">
                <img
                  src={item.album.cover_medium}
                  alt={item.title}
                  className="w-100"
                />
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0 text-light w-50">
                    Track: {item.title}
                    <br />
                    Artist: {item.artist.name}
                  </p>
                  {favouriteSongs.findIndex((song) => song.id === item.id) !==
                  -1 ? (
                    <BiSolidHeart
                      className="text-success"
                      onClick={() => dispatch(removeFavouriteSong(item))}
                    />
                  ) : (
                    <BiHeart onClick={() => dispatch(addFavouriteSong(item))} />
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <MyPlayer />
    </Container>
  );
};

export default YourLibrary;
