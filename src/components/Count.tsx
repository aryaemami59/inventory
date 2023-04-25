import type { ChangeEvent, FC, FocusEvent, KeyboardEvent } from "react";
import { memo, useCallback, useRef, useState } from "react";
import { Badge, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import useLocalStorage from "../hooks/useLocalStorage";
import usePreviousState from "../hooks/usePreviousState";

type Props = {
  ndc: string;
  drug: string;
  packSize: number;
};

const Count: FC<Props> = ({ ndc, drug, packSize }) => {
  const [val, setVal] = useState("0");
  const [count, setCount] = useState(0);
  const prevCount = usePreviousState(count);
  const [storedCount, setStoredCount] = useLocalStorage<number>(ndc, 0);
  const ref = useRef<HTMLInputElement>(null);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  }, []);

  const blurHandler = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setCount(prev => {
        if (+val) {
          return +val;
        }
        e.target.value = prev.toString();
        return prev;
      });
      setStoredCount(prev => {
        if (+val) {
          return +val;
        }
        return prev;
      });
    },
    [setStoredCount, val]
  );

  const focusHandler = useCallback((e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  }, []);

  const keyDownHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && ref.current?.blur();
  }, []);

  const stockBottles = Math.floor(+storedCount / packSize)
    ? Math.floor(+storedCount / packSize)
    : 0;

  const partial = +storedCount % packSize ? +storedCount % packSize : 0;

  return (
    <>
      <InputGroup
        size="sm"
        hasValidation
        className="mt-3">
        <FloatingLabel label="count">
          <Form.Control
            ref={ref}
            onFocus={focusHandler}
            onChange={changeHandler}
            onBlur={blurHandler}
            onKeyDown={keyDownHandler}
            value={val}
            placeholder="count"
            aria-label="Example text with two button addons"
          />
        </FloatingLabel>
      </InputGroup>
      <h1>
        Count: <Badge bg="primary">{+storedCount}</Badge>
      </h1>
      <h5>
        Previous Count: <Badge bg="secondary">{prevCount ?? 0}</Badge>
      </h5>
      <h4>
        # of Full Stock Bottles: <Badge bg="success">{stockBottles}</Badge>
      </h4>
      <h4>
        Quantity in Partial Stock Bottles: <Badge bg="warning">{partial}</Badge>
      </h4>
    </>
  );
};

export default memo<Props>(Count);
