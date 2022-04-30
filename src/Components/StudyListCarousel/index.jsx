import { useState } from "react";

// Other Component
import Slider from "react-slick";
import Button from "../Button";

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom.css";

export default function Carousel() {
  // Initial tabs state
  const [currentTab, setCurrentTab] = useState([true, false]);

  // Event when tab clicked
  const handleClickTabByIndex = (index = -1) => {
    setCurrentTab(
      currentTab.map((_, arrayIndex) => {
        return arrayIndex === index ? true : false;
      })
    );
  };

  // React-Slick Settings
  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div
      className="slick-container"
      style={{ backgroundColor: "#E3C2F6", margin: "1rem 0" }}
    >
      <h1 style={{ color: "#330E93" }}>Mata Kuliah Tahun Pertama</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <Button
          color="#7735C3"
          active={currentTab[0]}
          onClick={() => handleClickTabByIndex(0)}
        >
          Term 1
        </Button>
        <Button
          color="#7735C3"
          active={currentTab[1]}
          onClick={() => handleClickTabByIndex(1)}
        >
          Term 2
        </Button>
      </div>
      <Slider {...carouselSettings}>
        {carouselCardData.map((data, index) => (
          <CarouselCard key={index} {...data} />
        ))}
      </Slider>
    </div>
  );
}

const carouselCardData = [
  {
    title: "Kalkulus 1",
    badges: ["Wajib", "3 sks"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    title: "Kalkulus 2",
    badges: ["Wajib", "3 sks"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    title: "Kalkulus 3",
    badges: ["Wajib", "3 sks"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    title: "Kalkulus 4",
    badges: ["Wajib", "3 sks"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];

const CarouselCard = ({
  title = "",
  badges = [],
  description = "",
  key = null,
}) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#D09BEE",
          borderRadius: "20px",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <h2>{title}</h2>
        <div
          style={{ display: "flex", gap: ".5rem", justifyContent: "center" }}
        >
          {badges.map((title, index) => (
            <Button key={index} color="#7735C3" active={true}>
              {title}
            </Button>
          ))}
        </div>
        <p style={{ textAlign: "justify", padding: "1rem" }}>{description}</p>
      </div>
    </div>
  );
};
