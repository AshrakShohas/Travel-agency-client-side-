import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="containers">
            {<Row className="header-all">
                <Col xs={12} lg={12}>
                    <div className="home-description p-4">
                        <h1 className="title">
                            Amaze Yourself
                        </h1>
                        <p className="p-title">
                        Japan’s islands are among the most beautiful places on Earth, ranging from lush tropical paradises in the south to dramatic snow-capped volcano peaks in the north.
                        </p>
                        <Button className="btn-visit p-2">Explore Places</Button>
                    </div>
                </Col>


            </Row>}

        </div>
    );
};

export default Banner;
