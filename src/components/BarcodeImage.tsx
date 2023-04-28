import type { FC } from "react";
import { memo, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ciis, controls } from "../data/data.json";
import Count from "./Count";

const BarcodeImage: FC = () => {
  const ref = useRef<HTMLImageElement>(null);

  return (
    <Container>
      <h1 className="text-center my-5">CIIs</h1>
      {ciis.map(({ drug, ndc, src, packSize }) => (
        <Row
          className="border border-1"
          key={ndc}>
          <Col className="border-end text-break">
            <h6>{drug}</h6>
          </Col>
          <Col className="border-end">
            <h6>{ndc}</h6>
          </Col>
          <Col className="border-end">
            <img
              src={src}
              alt={ndc}
              ref={ref}
              className="mb-2"
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
          <Col className="border-end text-break">
            <h6>{drug}</h6>
          </Col>
          <Col className="border-end">
            <h6>{ndc}</h6>
          </Col>
          <Col className="border-end">
            <img
              src={src}
              alt={ndc}
              ref={ref}
              className="mb-2"
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
