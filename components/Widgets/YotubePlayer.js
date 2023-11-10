import YouTube from "react-youtube";

export default function YoutubePlayer() {
  const videoId = "n8q0Kd3AkO0";

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="overflow-hidden rounded-lg">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}
