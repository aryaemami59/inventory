import type { FC } from "react";
import { memo } from "react";
import { Table } from "react-bootstrap";
import type { Controls } from "../types/api";
import Count from "./Count";

type Props = {
  title: string;
  schedule: Controls;
};

const DataTable: FC<Props> = ({ title, schedule }) => (
  <>
    <h1 className="text-center my-5">{title}</h1>
    <Table
      bordered
      // className="m-3"
      striped
      responsive>
      <thead>
        <tr>
          <th>Drug Name</th>
          <th>NDC</th>
          <th>Barcode Image</th>
          <th>Counts</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map(({ drug, ndc, packSize, src }) => (
          <tr key={ndc}>
            <td>{drug}</td>
            <td>{ndc}</td>
            <td>
              <img
                src={src}
                alt={ndc}
                className="mb-2"
              />
            </td>
            <td>
              <Count
                packSize={packSize}
                ndc={ndc}
                drug={drug}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    {/* <h1 className="text-center my-5">{title}</h1>
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
    ))} */}
  </>
);

export default memo<Props>(DataTable);
