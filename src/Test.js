import resiskom from "./assets/image/info-resiskom.svg";
import himpunan from "./assets/image/info-himpunan.svg";
import kepanitian from "./assets/image/info-kepanitian.svg";
import akademik from "./assets/image/info-akademik.svg";
export default function Test() {
  return (
    <div style={{ height: "100vh", backgroundColor: "red" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          padding: "0 4rem",
        }}
      >
        <Card image={resiskom} text="Info Resiskom" />
        <Card image={himpunan} text="Info Himpunan" />
        <Card image={kepanitian} text="Info Kepanitian" />
        <Card image={akademik} text="Info Akademik" />
      </div>
    </div>
  );
}

function Card({ image = "", text = "Info Resiskom" }) {
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
