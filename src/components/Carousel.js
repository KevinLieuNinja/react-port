import React from "react";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import gitHub from "../assets/images/githubLogo.png";
import linkedin from "../assets/images/link.png";
import headShot from "../assets/images/Headshot.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Github",
          subTitle: "Repos",
          imgSrc: gitHub,
          link: "https://github.com/KevinLieuNinja",
          selected: false,
        },
        {
          id: 1,
          title: "Contact me",
          subTitle: "Lets work together!",
          imgSrc: headShot,
          link: "",
          selected: false,
        },
        {
          id: 2,
          title: "Linkedin",
          subTitle: "Experience",
          imgSrc: linkedin,
          link: "https://www.linkedin.com/in/k-lieu/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    console.log(id);

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
