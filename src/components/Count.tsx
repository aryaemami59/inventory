import type { ChangeEvent, FC } from "react";
import { memo, useCallback, useState } from "react";

type Props = {
  NDC: string;
  drug: string;
};

const Count: FC<Props> = ({ NDC, drug }) => {
  const [val, setVal] = useState("");

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    // setVal(prev => (+e.target.value ? +e.target.value : prev));
  }, []);

  return (
    <input
      value={val}
      // onSubmit={changeHandler}
      onChange={changeHandler}
      onBlur={changeHandler}
      size={10}
      // type="tel"
    />
  );
};

export default memo<Props>(Count);
