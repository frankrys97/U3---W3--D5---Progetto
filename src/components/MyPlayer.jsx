import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IoMdPause } from "react-icons/io";
import { IoMdPlay } from "react-icons/io";

const Player = () => {
  const player = useSelector((state) => state.player.content);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (player && !audio) {
      const playSong = new Audio(player.preview);
      console.log(playSong);
      setAudio(playSong);
    } else if (audio && isPlaying) {
      audio.pause();
      const playSong = new Audio(player.preview);
      setAudio(playSong);
    }

    setProgress(0);
    setIsPlaying(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

  useEffect(() => {
    let interval;

    if (audio && isPlaying) {
      interval = setInterval(() => {
        setProgress((audio.currentTime / audio.duration) * 100);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [audio, isPlaying]);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100  justify-content-center align-items-center">
        {player && (
          <Col className="col-6 col-md-4">
            <div className="d-flex align-items-center gap-3">
              <img src={player.album.cover_small} alt={player.title} />

              <div className="d-flex flex-column align-items-start text-light">
                <p className="m-0"> {player.title}</p>
                <p className="m-0"> {player.artist.name}</p>
              </div>
            </div>
          </Col>
        )}
        <Col className="col-6 col-md-4 playerControls ">
          <div className="d-flex justify-content-between w-50 m-auto">
            <a href="#">
              <img src={shuffle} alt="shuffle" />
            </a>
            <a href="#">
              <img src={prev} alt="prev" />
            </a>
            <a href="#" onClick={togglePlay}>
              {isPlaying ? (
                <IoMdPause size={30} className="text-secondary" />
              ) : (
                <IoMdPlay size={30} className="text-secondary" />
              )}
            </a>
            <a href="#">
              <img src={next} alt="next" />
            </a>
            <a href="#">
              <img src={repeat} alt="repeat" />
            </a>
          </div>
          <ProgressBar
            className="mt-3 bg-secondary"
            variant="success"
            now={progress}
            style={{ height: "8px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
