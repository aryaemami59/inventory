import type { FC } from "react";
import { memo } from "react";
import { Container } from "react-bootstrap";
import { ciis, controls } from "../data/data.json";
import DataTable from "./DataTable";

const BarcodeImage: FC = () => (
  <Container>
    <DataTable
      schedule={ciis}
      title="CIIs"
    />
    <DataTable
      schedule={controls}
      title="Controls"
    />
  </Container>
);

export default memo(BarcodeImage);
