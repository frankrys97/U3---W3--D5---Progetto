import { Button, Col, OverlayTrigger, Popover, Row } from "react-bootstrap";
import { popFetch, rockFetch, hiphopFetch } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchGenres } from "../redux/actions";
// import MyCarousel from "./MyCarousel";
import { BiHeart } from "react-icons/bi";
import { addFavouriteSong, removeFavouriteSong } from "../redux/actions";
import { BiSolidHeart } from "react-icons/bi";
import { setSongOnPlayer } from "../redux/actions";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { addSongOnPlayer } from "../redux/actions";

const MainSection = () => {
  const dispatch = useDispatch();

  const music = useSelector((state) => state.home);
  const favouriteSongs = useSelector((state) => state.favouriteSongs.content);

  useEffect(() => {
    dispatch(getFetchGenres("katyperry", popFetch));
    dispatch(getFetchGenres("queen", rockFetch));
    dispatch(getFetchGenres("eminem", hiphopFetch));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFetchGenres]);

  return (
    <Col md={{ span: 9, offset: 3 }} className="mainPage">
      <Row>
        <Col md={11} className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {music.rock
                // .sort(() => Math.random() - 0.5)
                // .slice(0, 4)
                .map(
                  (item, index) =>
                    index < 4 && (
                      <Col key={item.id}>
                        <img
                          src={item.album.cover_medium}
                          alt={item.title}
                          className="w-100"
                        />
                        <div className="d-flex justify-content-between align-items-start mt-3">
                          <p className="m-0 w-50">
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
                                  onClick={() =>
                                    dispatch(removeFavouriteSong(item))
                                  }
                                />
                              ) : (
                                <BiHeart
                                  className="fs-3 heartBtn"
                                  onClick={() =>
                                    dispatch(addFavouriteSong(item))
                                  }
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
                              <Button
                                className="bg-transparent border-0"
                                onClick={() => dispatch(addSongOnPlayer(item))}
                              >
                                <BsThreeDotsVertical className="fs-3" />
                              </Button>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </Col>
                    )
                )}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              {music.pop
                // .sort(() => Math.random() - 0.5)
                // .slice(0, 4)
                .map(
                  (item, index) =>
                    index < 4 && (
                      <Col key={item.id}>
                        <img
                          src={item.album.cover_medium}
                          alt={item.title}
                          className="w-100"
                        />
                        <div className="d-flex justify-content-between align-items-start mt-3">
                          <p className="m-0 w-50">
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
                                  onClick={() =>
                                    dispatch(removeFavouriteSong(item))
                                  }
                                />
                              ) : (
                                <BiHeart
                                  className="fs-3 heartBtn"
                                  onClick={() =>
                                    dispatch(addFavouriteSong(item))
                                  }
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
                    )
                )}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <div id="hiphop">
            <h2>HipHop</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              {music.hiphop
                // .sort(() => Math.random() - 0.5)
                // .slice(0, 4)
                .map(
                  (item, index) =>
                    index < 4 && (
                      <Col key={item.id}>
                        <img
                          src={item.album.cover_medium}
                          alt={item.title}
                          className="w-100"
                        />
                        <div className="d-flex justify-content-between align-items-start mt-3">
                          <p className="m-0 w-50">
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
                                  onClick={() =>
                                    dispatch(removeFavouriteSong(item))
                                  }
                                />
                              ) : (
                                <BiHeart
                                  className="fs-3 heartBtn"
                                  onClick={() =>
                                    dispatch(addFavouriteSong(item))
                                  }
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
                    )
                )}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MainSection;
