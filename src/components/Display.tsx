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
    <h1>
      Count: <Badge bg="primary">{+storedCount}</Badge>
    </h1>
    <h5>
      Previous Count: <Badge bg="secondary">{prevCount}</Badge>
    </h5>
    <h4>
      # of Full Stock Bottles:{" "}
      <Badge bg="success">{details.stockBottles}</Badge>
    </h4>
    <h4>
      Quantity in Partial Stock Bottles:{" "}
      <Badge bg="warning">{details.partial}</Badge>
    </h4>
  </>
);

export default memo<Props>(Display);
