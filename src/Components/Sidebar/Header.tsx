function SidebarHeader({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) {
  return (
    <div className="pl-4">
      <h1 className="text-white text-xl font-semibold">{heading}</h1>
      {subheading ? <h2 className="text-white text-sm">{subheading}</h2> : ""}
    </div>
  );
}

export default SidebarHeader;
