interface SongItemProps {
  title: string;
  audioSrc: string;
}

export default function SongItem({ title, audioSrc }: SongItemProps) {
  return (
    <div className="song-item">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          maxWidth: "600px",
          flexDirection: "row",
        }}
        className="song-item-content"
      >
        <h3
          style={{
            width: "300px",
            textAlign: "left",
            margin: 0,
            minWidth: "0",
            flex: "0 0 auto",
          }}
          className="song-title"
        >
          {title}
        </h3>
        <audio
          controls
          preload="none"
          style={{
            filter: "invert(1)",
            backgroundColor: "transparent",
          }}
        >
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
