import React from "react";
import Card from "./Card";
import Slider from "react-slick";

const CardGroup = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const reviews = [
    {
      id: 1,
      img: "https://i.pinimg.com/236x/8d/84/73/8d847338fb32887e2eaf63f0de692f5b.jpg",
      description:
        "This project management app is a game-changer! It's like having a virtual project manager by your side, keeping everything organized and on track. I've never felt more in control of my projects",
      name: "Carmen Walmsley",
      role: "Head of Community @ByteBlast Solutions",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/236x/3b/e9/60/3be960bad564cfeab2593c0415b0e3a3.jpg",
      description:
        "I've tried countless project management tools, but this app takes the cake. It's intuitive, efficient, and packed with features that make managing complex projects a breeze. I can't imagine working without it!",
      name: "Kevin Dandrea",
      role: "Project Manager @DataDynamo Solutions",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/236x/31/fa/a4/31faa4bd414f04cfc7c81a46c858be15.jpg",
      description:
        "With this app, I've finally found the perfect solution for keeping my team aligned and productive. From task assignment to progress tacking, it covers all the bases and the some. It's a must-have for any serious project manager.",
      name: "Sarah Price",
      role: "Business Analyst @Sarah C. Price",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/236x/4e/be/6a/4ebe6a508ee0df712264eb459cf53694.jpg",
      description:
        "With this app, I've finally found the perfect solution for keeping my team aligned and productive. From task assignment to progress tacking, it covers all the bases and the some. It's a must-have for any serious project manager.",
      name: "Sarah Price",
      role: "Business Analyst @Sarah C. Price",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/236x/4e/be/6a/4ebe6a508ee0df712264eb459cf53694.jpg",
      description:
        "With this app, I've finally found the perfect solution for keeping my team aligned and productive. From task assignment to progress tacking, it covers all the bases and the some. It's a must-have for any serious project manager.",
      name: "Sarah Price",
      role: "Business Analyst @Sarah C. Price",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/236x/4e/be/6a/4ebe6a508ee0df712264eb459cf53694.jpg",
      description:
        "With this app, I've finally found the perfect solution for keeping my team aligned and productive. From task assignment to progress tacking, it covers all the bases and the some. It's a must-have for any serious project manager.",
      name: "Sarah Price",
      role: "Business Analyst @Sarah C. Price",
    },
  ];
  return (
    <div className="w-full h-auto">
      <Slider {...settings}>
        {reviews.map(({ id, description, name, role, img }) => (
          <Card
            key={id}
            img={img}
            description={description}
            name={name}
            role={role}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CardGroup;
