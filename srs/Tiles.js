import React, { useState, useRef } from 'react';
import './App.css'; // Подключаем стили

const Tiles = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null); // Используем useRef для доступа к видеоэлементу

  const videos = [
    { id: 39, title: "Change", bottomText: "2024", previewUrl: "images/Change.png", videoUrl: "/videos/Change.mp4"},
    { id: 38, title: "KRIKATE | NEW SHOP", bottomText: "2024", previewUrl: "images/V5 NEW FINAL.png", videoUrl: "/videos/V5 NEW FINAL.mp4"},
    { id: 37, title: "EGB KEYBOARD", bottomText: "2024", previewUrl: "images/EGB FINAL SOUND.png", videoUrl: "/videos/EGB FINAL SOUND.mp4"},
    { id: 36, title: "ISTERIKA", bottomText: "2024", previewUrl: "images/INSTA FINAL3.png", videoUrl: "/videos/INSTA FINAL3.mp4"},
    { id: 35, title: "АЗУБКА ВКУСА", bottomText: "2024", previewUrl: "images/AZB VKUSA.png", videoUrl: "/videos/AZB VKUSA.mp4"},
    { id: 34, title: "EAZY ENERGY | ORIGINAL", bottomText: "2024", previewUrl: "images/EAZY ENERGY  ORIGINAL.png", videoUrl: "/videos/EAZY ENERGY  ORIGINAL.mp4"},
    { id: 33, title: "GOLDEN LION THAI SPA", bottomText: "2024", previewUrl: "images/Golden Lion Thai Spa.png", videoUrl: "/videos/Golden Lion Thai Spa.mp4"},
    { id: 32, title: "NIGHT SITY EAZY", bottomText: "2024", previewUrl: "images/NIGHT SITY EAZY.png", videoUrl: "/videos/NIGHT SITY EAZY.mp4"},
    { id: 31, title: "ECORNER ASSEMBLING", bottomText: "2024", previewUrl: "images/ECORNER ASSEMBLING RUS.png", videoUrl: "/videos/ECORNER ASSEMBLING RUS.mp4"},
    { id: 30, title: "TRANSCONSALT", bottomText: "2024", previewUrl: "images/TransConsalt.png", videoUrl: "/videos/TransConsalt.mp4"},
    { id: 29, title: "Catch on eazy", bottomText: "2024", previewUrl: "images/Catch on eazy.png", videoUrl: "/videos/Catch on eazy.mp4"},
    { id: 28, title: "ECORNER", bottomText: "2024", previewUrl: "images/ECORNER 3 FINALL.png", videoUrl: "/videos/ECORNER 3 FINALL.mp4"},
    { id: 27, title: "KRIKATE BLACK FRIDAY", bottomText: "2024", previewUrl: "images/KRIKATE BLACK FRIDAY.png", videoUrl: "/videos/KRIKATE BLACK FRIDAY.mp4"},
    { id: 26, title: "EAZY ENERGY | KIWI", bottomText: "2024", previewUrl: "images/EAZY ENERGY  KIWI 2.png", videoUrl: "/videos/EAZY ENERGY  KIWI 2.mp4"},
    { id: 25, title: "EAZY ENERGY | TROPIC", bottomText: "2024", previewUrl: "images/EAZY ENERGY  TROPIC.png", videoUrl: "/videos/EAZY ENERGY  TROPIC.mp4"},
    { id: 24, title: "LULU", bottomText: "2024", previewUrl: "images/VFX  LULU.png", videoUrl: "/videos/VFX  LULU.mp4"},
    { id: 23, title: "EAZY ENEGRY | MOJITO", bottomText: "2024", previewUrl: "images/EAZY ENEGRY  MOJITO.png", videoUrl: "/videos/EAZY ENEGRY  MOJITO.mp4"},
    { id: 22, title: "EAZY ENERGY | KIWI", bottomText: "2024", previewUrl: "images/EAZY ENEGRY  KIWI.png", videoUrl: "/videos/EAZY ENEGRY  KIWI.mp4"},
    { id: 21, title: "YONKA PARIS | SERUM CBD", bottomText: "2024", previewUrl: "images/YONKA PARIS  SERUM CBD.png", videoUrl: "/videos/YONKA PARIS  SERUM CBD.mp4"},
    { id: 20, title: "KRIAKTE | AMOUR", bottomText: "2024", previewUrl: "images/AMOUR.png", videoUrl: "/videos/AMOUR.mp4"},
    { id: 19, title: "GOLDEN LION THAI SPA", bottomText: "2024", previewUrl: "images/Golden Lion Thai Spa.png", videoUrl: "/videos/Golden Lion Thai Spa.mp4"},
    { id: 18, title: "KRIKATE | Sweet Sale", bottomText: "2024", previewUrl: "images/KRIKATE  Sweet Sale.png", videoUrl: "/videos/KRIKATE  Sweet Sale.mp4"},
    { id: 17, title: "IMAGE SKINCARE | Vital C", bottomText: "2024", previewUrl: "images/IMAGE SKINCARE   Vital C.png", videoUrl: "/videos/IMAGE SKINCARE   Vital C.mp4"},
    { id: 16, title: "IMAGE SKINCARE | Prevention +", bottomText: "2024", previewUrl: "images/IMAGE SKINCARE  Prevention +.png", videoUrl: "/videos/IMAGE SKINCARE  Prevention +.mp4"},
    { id: 15, title: "HB KRIKATE", bottomText: "2024", previewUrl: "images/HB.png", videoUrl: "/videos/HB.mp4"},
    { id: 14, title: "INFEMINITY", bottomText: "2024", previewUrl: "images/INFEMINITY.png", videoUrl: "/videos/INFEMINITY.mp4"},
    { id: 13, title: "GUIDE BY KRIKATE", bottomText: "2024", previewUrl: "images/Guide by KRIKATE.png", videoUrl: "/videos/Guide by KRIKATE.mp4"},
    { id: 12, title: "RO.MAN BY KRIKATE", bottomText: "2024", previewUrl: "images/RO.MAN.png", videoUrl: "/videos/RO.MAN.mp4"},
    { id: 11, title: "MIA THE SPITZ", bottomText: "2024", previewUrl: "images/MIA THE SPITZ 2.png", videoUrl: "/videos/MIA THE SPITZ 2.mp4"},
    { id: 10, title: "KRIKATE | BIG SALE", bottomText: "2024", previewUrl: "images/KRIKATE BIG SALE.png", videoUrl: "/videos/KRIKATE BIG SALE.mp4"},
    { id: 9, title: "PINKERTON", bottomText: "2024", previewUrl: "images/PINKERTON.png", videoUrl: "/videos/PINKERTON.mp4"},
    { id: 8, title: "SHADOW SHARK", bottomText: "2024", previewUrl: "images/shark.png", videoUrl: "/videos/shark.mp4"},
    { id: 7, title: "KRIKATE | CERTIFICATES", bottomText: "2024", previewUrl: "images/KRIKATE CERTIFICATE.png", videoUrl: "/videos/KRIKATE CERTIFICATE.mp4"},
    { id: 6, title: "HUGMAN", bottomText: "2024", previewUrl: "images/HUGMAN.png", videoUrl: "/videos/HUGMAN.mp4"},
    { id: 5, title: "AUTOMOTION & BY TUNING", bottomText: "2023", previewUrl: "images/AUTOMOTION & BY TUNING.png", videoUrl: "/videos/AUTOMOTION & BY TUNING.mp4"},
    { id: 4, title: "SUPERMETALL", bottomText: "2023", previewUrl: "images/SUPERMETALL.png", videoUrl: "/videos/SUPERMETALL.mp4"},
    { id: 3, title: "TYPE TYPE | TT RAMILLAS", bottomText: "2023", previewUrl: "images/TYPE TYPE  TT RAMILLAS.png", videoUrl: "/videos/TYPE TYPE  TT RAMILLAS.mp4"},
    { id: 2, title: "MIA THE SPITZ | GAME TRAILER", bottomText: "2023", previewUrl: "images/MIA THE SPITZ  GAME TRAILER.png", videoUrl: "/videos/MIA THE SPITZ  GAME TRAILER.mp4"},
    { id: 1, title: "AVITO.DESIGN", bottomText: "2022", previewUrl: "images/Avito.design.png", videoUrl: "/videos/Avito.design.mp4"},
    // Добавьте остальные элементы из вашего списка...
  ];

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const handleModalClose = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Останавливаем видео при закрытии модального окна
      videoRef.current.currentTime = 0; // Сбрасываем видео на начало
    }
    setSelectedVideo(null);
  };

  return (
    <div className="tile-container">
      <div className="tile-grid">
        {videos.map((video) => (
          <div
            key={video.id}
            className="tile"
            style={{ backgroundImage: `url(${video.previewUrl})` }}
            onClick={() => handleVideoClick(video.videoUrl)}
          >
            <div className="preview">
              <img src={video.previewUrl} alt={video.title} />
              <button className="play-button"></button>
            </div>
            <div className="title-container">
              <h3>{video.title}</h3>
              <p className="bottom-text">{video.bottomText}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={handleModalClose}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleModalClose}>×</button>
            <video
              ref={videoRef}
              src={selectedVideo}
              controls
              autoPlay // Видео воспроизводится автоматически
              width="80%"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tiles;






















