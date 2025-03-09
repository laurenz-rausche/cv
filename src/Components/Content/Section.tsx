import { ReactNode } from "react";

function ContentSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-sky-800 text-xl font-medium">{heading}</h2>
      <hr className="border-t-1 border-gray-400" />
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export default ContentSection;
