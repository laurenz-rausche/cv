import { ReactNode } from "react";

function Content({ children }: { children: ReactNode }) {
  return <main className="flex flex-col p-4 space-y-6">{children}</main>;
}

export default Content;
