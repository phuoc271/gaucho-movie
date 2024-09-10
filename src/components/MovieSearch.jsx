import React, { useState } from 'react';
import PropTypes from 'prop-types';
import play from '../assets/play-button.png';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

// Cấu hình Modal (đảm bảo đoạn mã này được gọi trong file chính của bạn, ví dụ: index.js hoặc App.js)
Modal.setAppElement('#root');

const opts = {
  height: '650px',
  width: '100%',
  playerVars: {
    autoplay: 1, // Tự động phát video
  },
};

const MovieSearch = ({ title, data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  // Hàm xử lý trailer
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
      const trailer = data.results.find(video => video.site === 'YouTube' && video.type === 'Trailer');
      setTrailerKey(trailer ? trailer.key : '');
      setModalIsOpen(!!trailer); // Chỉ mở modal nếu có trailer
    } catch (error) {
      setModalIsOpen(false);
      console.error('Không thể tải trailer:', error);
    }
  };

  return (
    <div className='movie-all'>
      <h2 className='movie-title'>{title}</h2>
      <div className='movie-grid'>
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
                <img className='play' src={play} alt='Nút phát' />
              </div>
            </div>
          ))}
      </div>

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
        {trailerKey ? (
          <YouTube videoId={trailerKey} opts={opts} />
        ) : (
          <p>Không có trailer để hiển thị.</p>
        )}
      </Modal>
    </div>
  );
};

MovieSearch.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    original_title: PropTypes.string,
    poster_path: PropTypes.string,
  })).isRequired,
};

export default MovieSearch;
