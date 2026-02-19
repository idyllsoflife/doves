import React from "react";
import * as ReactLiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type YoutubeProps = {
  id: string;
  title?: string;
  poster?: "maxresdefault" | "hqdefault" | "mqdefault" | "sddefault";
  aspectHeight?: number;
  aspectWidth?: number;
  noCookie?: boolean;
  wrapperClass?: string;
  iframeClass?: string;
};

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
  // Compatible with both:
  // - default export (some builds)
  // - named export LiteYouTubeEmbed (other builds)
  const LiteYouTubeEmbed =
    (ReactLiteYouTubeEmbed as any).default ??
    (ReactLiteYouTubeEmbed as any).LiteYouTubeEmbed;

  if (!LiteYouTubeEmbed) {
    // If the package shape changes again, fail gracefully instead of breaking the whole build
    return null;
  }

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
