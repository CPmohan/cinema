import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Trending from './Trendingmovies';
import Genre from './genre';
import Recommended from './Recommended';

const Home = () => {
  return (
    <>
      <Navbar />
      <br />
      <Recommended />
      <br />
      <Trending />
      <br />
      <Genre /> 
      <br />
      <Footer />
    </>
  );
}

export default Home;
