import React from 'react';
import Header from './components/Header';
import './App.css';
import ImageCard from './components/ImageCard';
import SearchInput from './components/SearchInput';
import image1 from './img/hulk-1.jpg';
import image2 from './img/venom-1.jpg';
import image3 from './img/venom-2.jpg';

function App() {
  return (
    <div>
     <Header/>
     
    <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        {/* search input component */}
        <SearchInput />

        {/* <!-- Sample Wallpaper --> */}
        <div class="sample-wallpaper">
          <ImageCard uri={image1}/>
          <ImageCard uri={image2}/>
          <ImageCard uri={image3}/>
        </div>
      </div>
    </header>
    </div>
  );
}

export default App;

