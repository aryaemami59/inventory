import type { FC } from "react";
import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import type { Controls } from "../types/api";
import Count from "./Count";

type Props = {
  title: string;
  schedule: Controls;
};

const DataTable: FC<Props> = ({ title, schedule }) => (
  <>
    <h1 className="text-center my-5">{title}</h1>
    {schedule.map(({ drug, ndc, src, packSize }) => (
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
  </>
);

export default memo<Props>(DataTable);
