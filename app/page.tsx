const dimensions = { width: 200, height: 315 };
const scale = 1.5;

export default function Home() {
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

      <section className="upcoming-shows">
        <h2>
          <i className="fas fa-calendar-alt"></i> Where to Find Us Next
        </h2>
        <div className="event-card">
          <div className="event-date">
            <span className="event-month">JUL</span>
            <span className="event-day">12</span>
          </div>
          <div className="event-details">
            <h3>Frog Fest</h3>
            <p>
              <i className="fas fa-clock"></i> 5:00 PM
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> 1986 Ashbury Street in
              Roseville
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
