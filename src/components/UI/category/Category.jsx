import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import "../../../styles/category.css";

const categoryData = [
  {
    display: "BREAKFAST",
    // imgUrl: categoryImg03,
  },
  {
    display: "LUNCH",
    // imgUrl: categoryImg03,
  },

  {
    display: "SNACKS",
    // imgUrl: categoryImg02,
  },

  {
    display: "SIDES",
    // imgUrl: categoryImg03,
  },
  {
    display: "SOUP & SWALLOW",
    // imgUrl: categoryImg04,
  },
  {
    display: "PEPPER SOUP",
    // imgUrl: categoryImg03,
  },
  {
    display: "RICE MENU",
    // imgUrl: categoryImg03,
  },
  {
    display: "DRINKS",
    // imgUrl: categoryImg03,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item">
              {/* <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div> */}

              <h6><b>{item.display}</b></h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
