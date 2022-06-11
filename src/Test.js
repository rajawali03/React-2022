export function Card({ image = "", text = "Info Resiskom" }) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
          borderRadius: "1rem",
          border: "10px solid white",
          textAlign: "center",
          backgroundColor: "#DCDCDC",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: "#EBEBEB",
          }}
        >
          {image && (
            <img
              src={image}
              alt="Cover"
              style={{ width: "auto", borderRadius: "1rem" }}
            />
          )}
        </div>
        <h3 style={{ padding: "1rem 0" }}>{text && text}</h3>
      </div>
    );
  }