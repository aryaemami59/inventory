import type { FC } from "react";
import { memo, useRef } from "react";
import Barcode from "react-barcode";
import first from "../data/first.json";
import Count from "./Count";

const BarcodeImage: FC = () => {
  const ref = useRef<Barcode>(null!);

  // useEffect(() => {
  //   const serializer = new XMLSerializer();
  //   const svgString = serializer.serializeToString(
  //     ref.current.renderElementRef.current
  //   );
  //   const base64Url = `data:image/svg+xml;base64,${btoa(svgString)}`;
  //   const img = new Image();
  //   img.src = base64Url;
  //   console.log(img);
  //   console.log(ref.current.renderElementRef.current);
  // }, [ref]);

  return (
    <>
      {first.map(({ drug, NDC }) => (
        <div key={NDC}>
          <h1>{drug}</h1>
          <h1>{NDC}</h1>
          {/* <img
            src={`data:image/svg+xml;utf8,${ref.current}`}
            alt=""
          /> */}
          <div>
            <Barcode
              value={NDC}
              ref={ref}
              // width={1}
              // height={75}
              // fontSize={15}
            />
            <Count
              NDC={NDC}
              drug={drug}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(BarcodeImage);
