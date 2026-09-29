// FigmaEmbed.jsx
const FigmaEmbed = ({ embedUrl, title = "Figma prototype" }) => {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      /* relación 16:9 (ajusta si necesitas) */
      paddingTop: "56.25%",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,.15)"
    }}>
      <iframe
        title={title}
        src={embedUrl}
        allowFullScreen
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0
        }}
      />
    </div>
  );
};

export default FigmaEmbed;
