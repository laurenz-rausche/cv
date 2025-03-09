import { ReactNode } from "react";

function SidebarInfo({
  icon,
  heading,
  value,
}: {
  icon?: string;
  heading: string;
  value?: ReactNode;
}) {
  return (
    <div className="flex-1 pl-2 text-xs text-white">
      <div className="flex space-x-1 items-center">
        {icon ? <img src={icon} className="w-3 h-3" /> : ""}
        <h4 className="font-medium">{heading}</h4>
      </div>
      {value}
    </div>
  );
}

export default SidebarInfo;
