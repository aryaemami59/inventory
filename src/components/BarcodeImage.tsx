import type { FC } from "react";
import { memo, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CIIs from "../data/cIIs.json";
import controls from "../data/controls.json";
import Count from "./Count";

const BarcodeImage: FC = () => {
  const ref = useRef<HTMLImageElement>(null);

  return (
    <Container>
      <h1 className="text-center my-5">CIIs</h1>
      {CIIs.map(({ drug, ndc, src, packSize }) => (
        <Row
          className="border border-1"
          key={ndc}>
          <Col className="border-end text-break">
            <h6>{drug}</h6>
          </Col>
          <Col className="border-end">
            <h6>{ndc}</h6>
          </Col>
          <Col
            // sm="auto"
            className="border-end">
            <img
              src={src}
              alt={ndc}
              ref={ref}
              className="mb-5"
            />
          </Col>
          <Col>
            <Count
              packSize={packSize}
              ndc={ndc}
              drug={drug}
            />
          </Col>
        </Row>
      ))}
      <h1 className="text-center my-5">Controls</h1>
      {controls.map(({ drug, ndc, src, packSize }) => (
        <Row
          className="border border-1"
          key={ndc}>
          <Col className="border-end">
            <h6>{drug}</h6>
          </Col>
          <Col className="border-end">
            <h6>{ndc}</h6>
          </Col>
          <Col
            // sm="auto"
            className="border-end">
            <img
              src={src}
              alt={ndc}
              ref={ref}
            />
          </Col>
          <Col>
            <Count
              packSize={packSize}
              ndc={ndc}
              drug={drug}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default memo(BarcodeImage);
