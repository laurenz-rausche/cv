import { ReactNode } from "react";

function Sidebar({
  content,
  children,
  note,
}: {
  content: ReactNode;
  children: ReactNode;
  note?: { name: string; href: string };
}) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-52 h-full bg-sky-800 pt-4">
        <div className="flex-1 space-y-4">{content}</div>
        {note ? (
          <a
            href={note.href}
            target="_blank"
            className="text-white text-[0.625rem] pl-2 pb-2 font-light italic"
          >
            {note.name}
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default Sidebar;
