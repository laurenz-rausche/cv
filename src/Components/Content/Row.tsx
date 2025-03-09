function ContentRow({
  left,
  right,
  lhref,
  rhref,
}: {
  left?: string;
  right?: string;
  lhref?: string;
  rhref?: string;
}) {
  return (
    <div className="flex">
      <div className="text-gray-800 w-5/12 text-xs">
        {left ? lhref ? <a href={lhref}>{left}</a> : <span>{left}</span> : ""}
      </div>
      <div className="text-gray-800 w-7/12 text-xs">
        {right ? (
          rhref ? (
            <a target="_blank" className="italic" href={rhref}>
              {right}
            </a>
          ) : (
            <span>{right}</span>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ContentRow;
