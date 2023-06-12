import React, { useState } from 'react';
import ViewReviewModal from './moviemodal';

const Trending = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const tmovie = [
    {
      title: 'Jujutsu Kaisen 0',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/77/Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      rating: 4.5,
    },
    {
      title: 'Inception',
      image: 'https://irs.www.warnerbros.com/gallery-v2-jpeg/inception_posterlarge_8-1308772917.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      rating: 4.5,
    },
    {
      title: 'Interstellar',
      image: 'https://posterspy.com/wp-content/uploads/2022/08/Interstellar_poster.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      rating: 4.5,
    },
    {
      title: 'Spider-Man',
      image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d2284deb1c651f0678555eeb30cc10a51726b8e8d6a1eb4b2d12b55d5d0e003c._RI_TTW_.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      rating: 4.5,
    },
    // Add other movies
  ];

  return (
    <div className="flex-fill">
      <h3>Trending Movies</h3>
      <br />
      <div className="container mt-4">
        <div className="row">
          {tmovie.map((movie, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img
                  src={movie.image}
                  className="card-img-top"
                  alt={movie.title}
                  style={{ height: '400px' }}
                />
                <div className="card-body" style={{ backgroundColor: 'black' }}>
                  <h5 className="card-title" style={{ color: 'white' }}>
                    {movie.title}
                  </h5>
                  <button
                    className="btn btn-primary"
                    style={{ backgroundColor: '#FFA500', borderColor: '#FFA500', color: 'black' }}
                    onClick={() => {
                      setSelectedId(index);
                      setShowModal(true);
                    }}
                  >
                    Watch Option
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <ViewReviewModal
          movie={tmovie[selectedId]}
          showModal={showModal}
          handleClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Trending;
