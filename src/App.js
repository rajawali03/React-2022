import logo from "./flutter.svg";
import "./App.css";
import Button from "./Components/Button";
import Box from "./Components/Box";
import Hero from "./Components/Hero";
import ButtonDown from "./Components/ButtonDown";
import List from "./Components/List";
import Carousel from "./Components/StudyListCarousel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import resiskom from "./assets/image/info-resiskom.svg";
import himpunan from "./assets/image/info-himpunan.svg";
import kepanitian from "./assets/image/info-kepanitian.svg";
import akademik from "./assets/image/info-akademik.svg";
import { Card } from "./Components/Card";

function App() {
  const dummySubTitle =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dis volutpat, amet, erat nibh. Amet, integer velit in malesuada arcu, mi, porttitor id. In ac tellus et neque.";

  return (
    <div className="App">
      <Navbar isShow={false}></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React Anjayy</h1>
        <p>Hello World</p>
        <div>
          <Button color="#7735C3" active={false}>
            asd
          </Button>
          <ButtonDown />
          <List>
            asdasdas
            <br /> asdasdjasd
          </List>
        </div>
      </header>

      <div style={{ padding: "20px 100px" }}>
        <Hero
          decorationColor="#F0CB3C"
          title="Info Resiskom"
          textColor="#A5860F"
          subtitle={dummySubTitle}
        />
      </div>

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

      <div style={{ padding: "20px 100px" }}>
        <Carousel />
      </div>

      <div style={{ padding: "20px 100px" }}>
        <Box color="#FEF9C3" padding="50px 20px">
          <h1>
            Visi dan Misi
            <br />
            Prodi Rekayasa Sistem Komputer
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
            enim aliquam turpis amet vel, placerat. Morbi aliquet volutpat in
            dui orci. Morbi adipiscing arcu arcu vestibulum non turpis sed quis
            at. Facilisi pulvinar tempus congue etiam luctus turpis lectus.
            Ultrices quam pellentesque amet, maecenas etiam dignissim in est.
            Porta aenean lectus vel diam id duis platea.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Laoreet enim aliquam turpis amet
            vel, placerat. Morbi aliquet volutpat in dui orci. Morbi adipiscing
            arcu arcu vestibulum non turpis sed quis at. Facilisi pulvinar
            tempus congue etiam luctus turpis lectus. Ultrices quam pellentesque
            amet, maecenas etiam dignissim in est. Porta aenean lectus vel diam
            id duis platea.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Laoreet enim aliquam turpis amet vel, placerat. Morbi aliquet
            volutpat in dui orci. Morbi adipiscing arcu arcu vestibulum non
            turpis sed quis at. Facilisi pulvinar tempus congue etiam luctus
            turpis lectus. Ultrices quam pellentesque amet, maecenas etiam
            dignissim in est. Porta aenean lectus vel diam id duis platea.
          </p>
        </Box>
      </div>
      <div style={{ padding: "20px 100px" }}>
        <Box color="#FEF9C3">
          <h1>
            Visi dan Misi
            <br />
            Prodi Rekayasa Sistem Komputer
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
            enim aliquam turpis amet vel, placerat. Morbi aliquet volutpat in
            dui orci. Morbi adipiscing arcu arcu vestibulum non turpis sed quis
            at. Facilisi pulvinar tempus congue etiam luctus turpis lectus.
            Ultrices quam pellentesque amet, maecenas etiam dignissim in est.
            Porta aenean lectus vel diam id duis platea.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Laoreet enim aliquam turpis amet
            vel, placerat. Morbi aliquet volutpat in dui orci. Morbi adipiscing
            arcu arcu vestibulum non turpis sed quis at. Facilisi pulvinar
            tempus congue etiam luctus turpis lectus. Ultrices quam pellentesque
            amet, maecenas etiam dignissim in est. Porta aenean lectus vel diam
            id duis platea.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Laoreet enim aliquam turpis amet vel, placerat. Morbi aliquet
            volutpat in dui orci. Morbi adipiscing arcu arcu vestibulum non
            turpis sed quis at. Facilisi pulvinar tempus congue etiam luctus
            turpis lectus. Ultrices quam pellentesque amet, maecenas etiam
            dignissim in est. Porta aenean lectus vel diam id duis platea.
          </p>
        </Box>
      </div>
      <Footer backgroundColor="#DCDCDC" />
      <Footer backgroundColor="#FEF9C3" />
      <Footer backgroundColor="#C6CDDB" />
      <Footer backgroundColor="#FFCBCF" />
      <Footer backgroundColor="#E3C2F6" />
    </div>
  );
}

export default App;
