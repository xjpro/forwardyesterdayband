"use client";

import { useEffect } from "react";

const dimensions = { width: 200, height: 315 };
const scale = 1.5;

export default function Home() {
  useEffect(() => {
    const audioElements = document.querySelectorAll("audio");

    const handlePlay = (event: Event) => {
      const currentAudio = event.target as HTMLAudioElement;
      audioElements.forEach((audio) => {
        if (audio !== currentAudio) {
          audio.pause();
        }
      });
    };

    audioElements.forEach((audio) => {
      audio.addEventListener("play", handlePlay);
    });

    return () => {
      audioElements.forEach((audio) => {
        audio.removeEventListener("play", handlePlay);
      });
    };
  }, []);
  return (
    <div className="main-container">
      <header>
        <div className="header-content">
          <h1>Forward Yesterday</h1>
        </div>
      </header>

      {/*<div className="band-image-bg">*/}
      {/*  <section className="band-image" />*/}
      {/*</div>*/}

      {/*https://youtube.com/shorts/DjFDCiKNGgc?si=VUcaM2nZC9kDDD5j*/}
      <section className="flex video-about-section">
        <div className="video-container">
          <iframe
            width={dimensions.width * scale}
            height={dimensions.height * scale}
            src="https://www.youtube.com/embed/DjFDCiKNGgc?si=VUcaM2nZC9kDDD5j"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video-frame"
          ></iframe>
        </div>
        <div className="about-us">
          <h2>
            <i className="fas fa-users"></i> About Us
          </h2>
          <p>
            Forward Yesterday is an acoustic trio blending 90&apos;s
            alternative, grunge, and R&B with a fresh, stripped-down sound. Our
            setlist of moody rock and groove-driven R&B covers offers a mix of
            reimagined songs.
          </p>
          <p>
            <i className="fas fa-guitar" /> Acoustic Guitar
            <i className="fas fa-drum ms-3" /> Percussion
            <i className="fas fa-music ms-3" /> Upright Bass
          </p>
        </div>
      </section>

      <section className="music-player-section">
        <h2>
          <i className="fas fa-music"></i> Listen
        </h2>
        <div className="songs-grid" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div className="song-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '600px' }}>
              <h3 style={{ width: '300px', textAlign: 'left', margin: 0 }}>Interstate Love Song</h3>
              <audio controls preload="none">
                <source src="/songs/interstate-love-song.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="song-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '600px' }}>
              <h3 style={{ width: '300px', textAlign: 'left', margin: 0 }}>I&apos;m Just Ken</h3>
              <audio controls preload="none">
                <source src="/songs/just-ken.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="song-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '600px' }}>
              <h3 style={{ width: '300px', textAlign: 'left', margin: 0 }}>Nutshell</h3>
              <audio controls preload="none">
                <source src="/songs/nutshell.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="song-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '600px' }}>
              <h3 style={{ width: '300px', textAlign: 'left', margin: 0 }}>Wicked Game</h3>
              <audio controls preload="none">
                <source src="/songs/wicked-game.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-shows">
        <h2>
          <i className="fas fa-calendar-alt"></i> Where to Find Us Next
        </h2>
        <div className="event-card">
          <div className="event-date">
            <span className="event-month">AUG</span>
            <span className="event-day">9</span>
          </div>
          <div className="event-details">
            <h3>The Finnish Bistro</h3>
            <p>
              <i className="fas fa-clock"></i> 10:30 AM
            </p>
          </div>
        </div>
      </section>

      <section className="past-shows">
        <h2>
          <i className="fas fa-history" /> Past Shows of 2025
        </h2>
        <div className="shows-grid">
          <div className="show-item">
            <i className="fas fa-music show-icon" />
            <p className="show-date">July 12th</p>
            <p className="show-time">6:00pm</p>
            <p className="show-venue">Frog Fest</p>
          </div>
          <div className="show-item">
            <i className="fas fa-music show-icon" />
            <p className="show-date">June 12th</p>
            <p className="show-time">7:00pm</p>
            <p className="show-venue">Kingfield Porchfest</p>
          </div>
          <div className="show-item">
            <i className="fas fa-music show-icon" />
            <p className="show-date">April 26th</p>
            <p className="show-time">10:30am</p>
            <p className="show-venue">The Finnish Bistro</p>
          </div>
          <div className="show-item">
            <i className="fas fa-music show-icon" />
            <p className="show-date">March 23rd</p>
            <p className="show-time">10:30am</p>
            <p className="show-venue">The Finnish Bistro</p>
          </div>
          <div className="show-item">
            <i className="fas fa-music show-icon" />
            <p className="show-date">February 23rd</p>
            <p className="show-time">10:30am</p>
            <p className="show-venue">The Finnish Bistro</p>
          </div>
          <div className="show-item">
            <i className="fas fa-music show-icon" />
            <p className="show-date">January 19th</p>
            <p className="show-time">10:30am</p>
            <p className="show-venue">The Finnish Bistro</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>
          <i className="fas fa-envelope" /> Contact Us
        </h2>
        <p>Interested in booking us or learning more?</p>
        <div className="contact-info">
          <a href="mailto:jprodahl@gmail.com" className="button">
            <i className="fas fa-paper-plane"></i> Email Us
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Forward Yesterday. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
