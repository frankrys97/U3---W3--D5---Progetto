import {
  Button,
  Col,
  Container,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import Sidebar from "./Sidebar";
import MyPlayer from "./MyPlayer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import {
  addFavouriteSong,
  removeFavouriteSong,
  setSongOnPlayer,
} from "../redux/actions";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";

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
    <Container>
      <Row>
        <Sidebar />

        <Col md={{ span: 9, offset: 3 }} className="mainPage">
          <Row>
            <h3 className="text-center text-light mt-3">
              {searchedSong.charAt(0).toUpperCase() + searchedSong.slice(1)}
            </h3>
          </Row>

          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
            {song.map((item) => (
              <Col key={item.id} sm={3} className="my-3 ">
                <img
                  src={item.album.cover_medium}
                  alt={item.title}
                  className="w-100"
                />
                <div className="d-flex justify-content-between align-items-start mt-3">
                  <p className="m-0 w-50 text-light">
                    Track: {item.title}
                    <br />
                    Artist: {item.artist.name}
                  </p>
                  <div className="d-flex flex-column align-items-end gap-2">
                    <div className="d-flex">
                      {favouriteSongs.findIndex(
                        (song) => song.id === item.id
                      ) !== -1 ? (
                        <BiSolidHeart
                          className="text-success fs-3 heartBtn"
                          onClick={() => dispatch(removeFavouriteSong(item))}
                        />
                      ) : (
                        <BiHeart
                          className="fs-3 heartBtn"
                          onClick={() => dispatch(addFavouriteSong(item))}
                        />
                      )}
                      <TbPlayerPlayFilled
                        className="fs-3 mx-2 playCardButton"
                        onClick={() => dispatch(setSongOnPlayer(item))}
                      />
                    </div>
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={
                        <Popover data-bs-theme="dark">
                          <Popover.Body>
                            <Button
                              className="bg-transparent border-0 btnAddCode"
                              size="sm"
                            >
                              Aggiungi alla coda di riproduzione
                            </Button>
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <Button className="bg-transparent border-0">
                        <BsThreeDotsVertical className="fs-3" />
                      </Button>
                    </OverlayTrigger>
                  </div>
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
