import { ReactNode } from "react";

function SidebarSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h5 className="py-1 pl-2 bg-sky-900 text-white font-medium text-sm">
        {heading}
      </h5>
      <div className="pt-2 space-y-2">{children}</div>
    </div>
  );
}

export default SidebarSection;
