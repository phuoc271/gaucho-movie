import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import play from '../assets/play-button.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

const opts = {
  height: '650px',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2100, min: 1300 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1300, min: 1100 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1100, min: 900 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 900, min: 700 },
    items: 3,
  },
  Smallmobile: {
    breakpoint: { max: 700, min: 0 },
    items: 2,
  },
};

const Movielist = ({ title, data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  const handleTrailer = async (id) => {
    setTrailerKey('');
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setTrailerKey(data.results[0]?.key || '');
      setModalIsOpen(true);
    } catch (error) {
      setModalIsOpen(false);
      console.error(error);
    }
  };

  return (
    <div className='movie-all'>
      <h2 className='movie-title'>{title}</h2>
      <Carousel responsive={responsive}>
        {data && data.length > 0 &&
          data.map((item) => (
            <div className='movie2' key={item.id} onClick={() => handleTrailer(item.id)}>
              <div className='mo3'></div>
              <p className='name-movie'>
                {item.title || item.original_title}
              </p>
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                className='phim'
                alt={item.title}
              />
              <div className='play-container'>
                <img className='play' src={play} alt='Play button' />
              </div>
            </div>
          ))}
      </Carousel>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Trailer Modal"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000,
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            backgroundColor: '#fff',
            overflow: 'auto',
          },
        }}
      >
        <YouTube videoId={trailerKey} opts={opts} />
      </Modal>
    </div>
  );
};

Movielist.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    original_title: PropTypes.string,
    poster_path: PropTypes.string,
  })).isRequired,
};

export default Movielist;
