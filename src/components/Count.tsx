import type { ChangeEvent, FC, FocusEvent, KeyboardEvent } from "react";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";
import useLocalStorage from "../hooks/useLocalStorage";
import usePreviousState from "../hooks/usePreviousState";
import Display from "./Display";

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

  const details = useMemo(
    () => ({
      stockBottles: Math.floor(+storedCount / packSize)
        ? Math.floor(+storedCount / packSize)
        : 0,
      partial: +storedCount % packSize ? +storedCount % packSize : 0,
    }),
    [packSize, storedCount]
  );

  return (
    <>
      <InputGroup
        size="sm"
        hasValidation
        className="mt-3 print-none">
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
      <Display
        details={details}
        prevCount={prevCount ?? 0}
        storedCount={storedCount}
      />
    </>
  );
};

export default memo<Props>(Count);
