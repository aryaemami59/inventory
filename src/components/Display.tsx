import type { FC } from "react";
import { memo } from "react";
import { Badge } from "react-bootstrap";

type Props = {
  storedCount: number;
  prevCount: number;
  details: { stockBottles: number; partial: number };
};

const Display: FC<Props> = ({ prevCount, storedCount, details }) => (
  <>
    <h6>
      Count: <Badge bg="primary">{+storedCount}</Badge>
    </h6>
    <p className="print-none m-0">
      Previous Count: <Badge bg="secondary">{prevCount}</Badge>
    </p>
    <p className="m-0 print-fs-12">
      # of Full Stock Bottles:{" "}
      <Badge bg="success">{details.stockBottles}</Badge>
    </p>
    <p className="m-0 print-fs-12">
      Quantity in Partial Stock Bottles:{" "}
      <Badge bg="warning">{details.partial}</Badge>
    </p>
  </>
);

export default memo<Props>(Display);
