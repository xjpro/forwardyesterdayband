const dimensions = {width: 200, height: 315};
const scale = 1.5;

export default function Home() {
  return (
    <div>
      <header>
        <h1>Forward Yesterday</h1>
      </header>


      <div className="band-image-bg">
      <section className="band-image"/>
      </div>

      {/*https://youtube.com/shorts/DjFDCiKNGgc?si=VUcaM2nZC9kDDD5j*/}
      <section className="flex">
        <div>
          <iframe width={dimensions.width * scale} height={dimensions.height * scale}
                  src="https://www.youtube.com/embed/DjFDCiKNGgc?si=VUcaM2nZC9kDDD5j"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div>
          <h2>About Us</h2>
          <p>
            Forward Yesterday is an acoustic trio blending 90&apos;s alternative,
            grunge, and R&B with a fresh, stripped-down sound. Our setlist of moody rock and groove-driven R&B covers
            offers
            a mix of reimagined songs. With upright bass,
            acoustic guitar, and light percussion, we bring new life to classic tracks.
          </p>
        </div>
      </section>


      <section>
        <h2>Where to Find Us Next</h2>
        <p>
          March 23rd 10:30am @ The Finnish Bistro
        </p>
      </section>

      <section>
        <h2>Past Shows of 2025</h2>
        <p>February 23rd @ The Finnish Bistro</p>
        <p>January 19th @ The Finnish Bistro</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Interested in booking us or learning more?
        </p>
        <div>Email Us: jprodahl at gmail dot com</div>
      </section>

      <footer>
        <p>&copy; 2025 Forward Yesterday. All rights reserved.</p>
      </footer>
    </div>
  );
}
