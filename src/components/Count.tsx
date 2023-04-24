import type { ChangeEvent, FC } from "react";
import { memo, useCallback, useState } from "react";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";

type Props = {
  ndc: string;
  drug: string;
};

const Count: FC<Props> = ({ ndc, drug }) => {
  const [val, setVal] = useState("");

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    // setVal(prev => (+e.target.value ? +e.target.value : prev));
  }, []);

  return (
    <>
      <InputGroup
        size="sm"
        hasValidation
        className="mt-3">
        <Button variant="outline-secondary">Edit Count</Button>
        <FloatingLabel label="count">
          <Form.Control
            placeholder="count"
            aria-label="Example text with two button addons"
          />
        </FloatingLabel>
      </InputGroup>
      {/* <input
        value={val}
        // onSubmit={changeHandler}
        onChange={changeHandler}
        onBlur={changeHandler}
        size={10}
        // type="tel"
      /> */}
    </>
  );
};

export default memo<Props>(Count);
