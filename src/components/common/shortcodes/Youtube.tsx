import React from "react"; 
import { LiteYouTubeEmbed } from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface YoutubeProps {
  id: string;
  title?: string;
  poster?: "maxresdefault" | "hqdefault" | "mqdefault" | "sddefault";
  aspectHeight?: number;
  aspectWidth?: number;
  noCookie?: boolean;
  wrapperClass?: string;
  iframeClass?: string;
}

const Youtube: React.FC<YoutubeProps> = ({
  id,
  title = "YouTube video",
  poster = "maxresdefault",
  aspectHeight = 9,
  aspectWidth = 16,
  noCookie = true,
  wrapperClass = "",
  iframeClass = "",
}) => {
  return (
    <LiteYouTubeEmbed
      id={id}
      title={title}
      poster={poster}
      aspectHeight={aspectHeight}
      aspectWidth={aspectWidth}
      noCookie={noCookie}
      wrapperClass={wrapperClass}
      iframeClass={iframeClass}
    />
  );
};

export default Youtube;
