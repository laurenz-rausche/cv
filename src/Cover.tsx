import { Data } from "./DataType";

function Cover({ CVData }: { CVData: Data }) {
  return CVData.cover ? (
    <div className="h-screen flex items-center justify-center flex-col bg-sky-800 space-y-6">
      <h1 className="text-white text-5xl font-semibold">
        {CVData.cover.heading}
      </h1>
      {CVData.cover.subheading ? (
        <>
          <hr className=" h-0.5 border-0 bg-white w-80" />
          <h2 className="text-white text-xl font-semibold text-center">
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
