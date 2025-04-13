import { useEffect, useRef, useState } from "react";
import { Data } from "./DataType";

function Cover({ CVData }: { CVData: Data }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const [hrWidth, setHrWidth] = useState<number>(0);

  useEffect(() => {
    if (headingRef.current && subheadingRef.current) {
      const h1Width = headingRef.current.offsetWidth;
      const h2Width = subheadingRef.current.offsetWidth;
      const averageWidth = (h1Width + h2Width) / 2;
      setHrWidth(averageWidth);
    }
  }, []);

  return CVData.cover ? (
    <div className="h-screen flex items-center justify-center flex-col bg-sky-800 space-y-6">
      <h1 ref={headingRef} className="text-white text-5xl font-semibold">
        {CVData.cover.heading}
      </h1>
      {CVData.cover.subheading ? (
        <>
          <hr className=" h-0.5 border-0 bg-white" style={{ width: hrWidth }} />
          <h2
            ref={subheadingRef}
            className="text-white text-xl font-semibold text-center"
          >
            {CVData.cover.subheading}
          </h2>
        </>
      ) : (
        ""
      )}
    </div>
  ) : (
    <></>
  );
}

export default Cover;
