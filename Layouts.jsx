import React from 'react';
import { Card, Container, Row, Col, Stack } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import './layout.css';

const Layouts = ({ layouts }) => {
    const mapLayoutItem = (item, index) => {
        return (
            <Carousel.Item className="layout-carousel-item" key={index} data-bs-interval="2000">
                <Stack
                    key={index}
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={3}>
                    <Card className="layout-carousel-card">
                        <Card.Body>
                            <img
                                src={item.image}
                                alt={item.listing}
                                className="img-fluid shadow-sm rounded d-block mx-auto"></img>
                        </Card.Body>
                        <Carousel.Caption>
                            <h5 className="f-10">{item?.listing}</h5>
                        </Carousel.Caption>   
                    </Card>
                    <Card className="layout-carousel-card">
                        <Card.Body>
                            <img
                                src={item.image}
                                alt={item.listing}
                                className="img-fluid shadow-sm rounded d-block mx-auto"></img>
                        </Card.Body>
                        <Carousel.Caption>
                            <h5 className="f-10">{item?.listing}</h5>
                        </Carousel.Caption>
                    </Card>
                    <Card className="layout-carousel-card">
                        <Card.Body>
                            <img
                                src={item.image}
                                alt={item.listing}
                                className="img-fluid shadow-sm rounded d-block mx-auto"></img>
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
                            <div className="text-center">
                                <h3>
                                    Showing <span className="sr-only">Layout</span>
                                </h3>
                                <p className="text-muted mt-2">
                                    {' '}
                                    There are three different layout options available to cater need for any <br />{' '}
                                    modern web application.
                                    <br />
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center h-25 w-100 carousel-fluid">
                        {layouts && <Carousel style={{ height: 500 }}>{layouts?.map(mapLayoutItem)}</Carousel>}
                    </div>
                    <footer className="layout-footer">
                        <h3 className="text-center">
                            Layouts <span className="sr-only">Footer</span>
                        </h3>
                        <p className="text-center">
                            Lorem ipssum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua
                        </p>
                    </footer>
                </Container>
            </section>
        </>
    );
};
Layouts.propTypes = {
    layouts: PropTypes.arrayOf(
        PropTypes.shape({ image: PropTypes.string.isRequired, listing: PropTypes.string.isRequired })
    ),
};
export default Layouts;
