import type { FC } from "react";
import { memo, useRef } from "react";
import type Barcode from "react-barcode";
import { Col, Container, Row } from "react-bootstrap";
import CIIs from "../data/cIIs.json";
import Count from "./Count";

const BarcodeImage: FC = () => {
  const ref = useRef<Barcode>(null!);

  // useEffect(() => {
  //   const serializer = new XMLSerializer();
  //   const svgString = serializer.serializeToString(
  //     ref.current.renderElementRef.current
  //   );
  //   const base64Url = `data:image/svg+xml;base64,${btoa(svgString)}`;
  //   const img = new Image();
  //   img.src = base64Url;
  //   console.log(img);
  //   console.log(ref.current.renderElementRef.current);
  // }, [ref]);

  return (
    <Container>
      {CIIs.map(({ drug, ndc, src }) => (
        <Row
          className="border border-1"
          key={ndc}>
          <Col className="border-end">
            <h2>{drug}</h2>
          </Col>
          <Col className="border-end">
            <h2>{ndc}</h2>
          </Col>
          <Col className="border-end">
            <img
              src={src}
              alt={ndc}
            />
            {/* <Barcode
              value={ndc}
              ref={ref}
            /> */}
          </Col>
          <Col>
            <Count
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
