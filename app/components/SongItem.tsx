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
          width: "600px",
        }}
      >
        <h3 style={{ width: "300px", textAlign: "left", margin: 0 }}>
          {title}
        </h3>
        <audio controls preload="none">
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}