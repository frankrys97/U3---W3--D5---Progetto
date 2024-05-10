import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import MyPlayer from "./MyPlayer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { addFavouriteSong, removeFavouriteSong } from "../redux/actions";

const SerchedSong = () => {
  const searchedSong = useSelector((state) => state.inputSearch.content);
  const dispatch = useDispatch();
  const favouriteSongs = useSelector((state) => state.favouriteSongs.content);

  const [song, setSong] = useState([]);

  const renderSearchedSong = () => {
    fetch(
      ` https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchedSong}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data.data);
        setSong(data.data);
      });
  };

  useEffect(() => {
    if (searchedSong !== "") {
      renderSearchedSong();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedSong]);

  return (
    <Container fluid>
      <Row>
        <Sidebar />

        <Col md={{ span: 9, offset: 3 }} className="mainPage">
          <Row>
            <h3 className="text-center text-light mt-3">
              {searchedSong.charAt(0).toUpperCase() + searchedSong.slice(1)}
            </h3>
          </Row>

          <Row>
            {song.map((item) => (
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
                    <BiHeart
                      className="text-light"
                      onClick={() => dispatch(addFavouriteSong(item))}
                    />
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

export default SerchedSong;
