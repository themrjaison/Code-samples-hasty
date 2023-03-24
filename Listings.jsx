import React from 'react';
import { Card, Container, Row, Col, Stack } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import './listings.css';

const Listings = ({ listings }) => {
  const mapListingItem = (item, index) => {
    return (
      <Carousel.Item className="listing-carousel-item" key={index} data-bs-interval="2000">
        <Stack key={index} direction="horizontal" className="h-100 justify-content-center align-items-center" gap={3}>
          <Card className="listings-carousel-card">
            <Card.Body>
              <img src={item.image} alt={item.listing} className="img-fluid shadow-sm rounded d-block mx-auto"></img>
            </Card.Body>
            <Carousel.Caption>
              <h5 className="f-10">{item?.listing}</h5>
            </Carousel.Caption>
          </Card>
          <Card className="listings-carousel-card">
            <Card.Body>
              <Card.Text>
                <img src={item.image} alt={item.listing} className="img-fluid shadow-sm rounded d-block mx-auto"></img>
              </Card.Text>
            </Card.Body>
            <Carousel.Caption>
              <h5 className="f-10">{item?.listing}</h5>
            </Carousel.Caption>
          </Card>
          <Card className="listings-carousel-card">
            <Card.Body>
              <Card.Text>
                <img src={item.image} alt={item.listing} className="img-fluid shadow-sm rounded d-block mx-auto"></img>
              </Card.Text>
            </Card.Body>
            <Carousel.Caption>
              <h5 className="f-10">{item?.listing}</h5>
            </Carousel.Caption>
          </Card>
        </Stack>
      </Carousel.Item>
    );
  };
  return (
    <>
      <section className="py-5 bg-light-lighten border-top border-bottom border-light">
        <Container>
          <Row>
            <Col>
              <div className=" listing-carousel-text text-center ">
                <h3>
                  Showing <span className="sr-only">Listing</span>
                </h3>
                <p className=" text-muted mt-2">
                  This text area is reserved for a paragraph pertaining to Listings!!!
                  <br /> Check back here for all things Listings!!!
                </p>
              </div>
            </Col>
          </Row>
          <div className="text-center h-25 w-100 listing-carousel-fluid">
            {listings && <Carousel className="listing-carousel-actual">{listings?.map(mapListingItem)}</Carousel>}
          </div>
          <footer className="listings-footer">
            <h3 className="listing-carousel-footer text-center">
              Listings <span className="sr-only">Footer</span>
            </h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </footer>
        </Container>
      </section>
    </>
  );
};
Listings.propTypes = {
  listings: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string.isRequired, listing: PropTypes.string.isRequired })
  ),
};
export default Listings;
