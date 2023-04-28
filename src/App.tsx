import type { FC } from "react";
import { memo } from "react";
import "./App.css";
import BarcodeImage from "./components/BarcodeImage";

const App: FC = () => {
  return (
    <div className="App">
      <BarcodeImage />
    </div>
  );
};

export default memo(App);
