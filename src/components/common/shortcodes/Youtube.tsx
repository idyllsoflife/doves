import React from "react";

type YoutubeProps = {
  id: string;
  title?: string;
  noCookie?: boolean;
  aspectWidth?: number;
  aspectHeight?: number;
  className?: string;
};

const Youtube: React.FC<YoutubeProps> = ({
  id,
  title = "YouTube video",
  noCookie = true,
  aspectWidth = 16,
  aspectHeight = 9,
  className = "",
}) => {
  const domain = noCookie ? "www.youtube-nocookie.com" : "www.youtube.com";
  const src = `https://${domain}/embed/${id}`;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        paddingTop: `${(aspectHeight / aspectWidth) * 100}%`,
      }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  );
};

export default Youtube;
