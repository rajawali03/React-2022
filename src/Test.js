import resiskom from "./assets/image/info-resiskom.svg";
import himpunan from "./assets/image/info-himpunan.svg";
import kepanitian from "./assets/image/info-kepanitian.svg";
import akademik from "./assets/image/info-akademik.svg";
import { Card } from "./Components/Card";
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
