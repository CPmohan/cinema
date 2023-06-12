import React from 'react';

const Recommended = () => {
  const rmovie = [
    {
      title: 'Jujutsu Kaisen 0',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/77/Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png',
    },
    {
      title: 'Inception',
      image: 'https://irs.www.warnerbros.com/gallery-v2-jpeg/inception_posterlarge_8-1308772917.jpg',
    },
    {
      title: 'Interstellar',
      image: 'https://posterspy.com/wp-content/uploads/2022/08/Interstellar_poster.jpg',
    },
    {
      title: 'Spider-Man',
      image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d2284deb1c651f0678555eeb30cc10a51726b8e8d6a1eb4b2d12b55d5d0e003c._RI_TTW_.jpg',
    },

  ];

  return (
    <div className="flex-fill">
      <h3>      Recommended Movies</h3>
      <br />
      <div className="container mt-4">
        <div className="row">
          {rmovie.map((rmovie, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img
                  src={rmovie.image}
                  className="card-img-top"
                  alt={rmovie.title}
                  style={{ height: '400px'  }}
                />
                <div className="card-body" style={{ backgroundColor: 'black' }}>
                  <h5 className="card-title" style={{ color: 'white' }}>{rmovie.title}</h5>
                  <a href="#" className="btn btn-primary" style = {{ backgroundColor: '#FFA500', borderColor: '#FFA500', color:'black' }}>
                    Watch Option
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
