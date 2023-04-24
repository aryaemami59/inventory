import type { ChangeEvent, FC, FocusEvent, KeyboardEvent } from "react";
import { memo, useCallback, useRef, useState } from "react";
import { Badge, FloatingLabel, Form, InputGroup } from "react-bootstrap";

type Props = {
  ndc: string;
  drug: string;
};

const Count: FC<Props> = ({ ndc, drug }) => {
  const [val, setVal] = useState("0");
  const [count, setCount] = useState(0);
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
    },
    [val]
  );

  const focusHandler = useCallback((e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  }, []);

  const keyDownHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && ref.current?.blur();
  }, []);

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
        Count: <Badge bg="secondary">{count}</Badge>
      </h1>
    </>
  );
};

export default memo<Props>(Count);
