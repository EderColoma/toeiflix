/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categoria';

function Home() {
  function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }

  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('https://www.youtube.com/watch?v=Lq4V7pGhLsg');
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('Episode 01: The Runaway Baby');
  const [youTubeID, setYoutubeId] = useState(getYouTubeId(selectedVideoUrl));
  const [bgUrl, setBgUrl] = useState(`https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function handleClick(videoTitle, videoURL) {
    setSelectedVideoTitle(videoTitle);
    setSelectedVideoUrl(videoURL);
    setYoutubeId(getYouTubeId(videoURL));
    setBgUrl(`https://img.youtube.com/vi/${getYouTubeId(videoURL)}/maxresdefault.jpg`);
    window.scrollTo(0, 0);
  }

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      <div>
        <BannerMain
          videoTitle={selectedVideoTitle}
          url={selectedVideoUrl}
          videoDescription=""
          youTubeID={youTubeID}
          bgUrl={bgUrl}
        />
      </div>
      {dadosIniciais.map((categoria) => (
        <Carousel
          key={categoria.id}
          category={categoria}
          onClick={handleClick}
        />
      ))}

    </PageDefault>
  );
}

export default Home;
