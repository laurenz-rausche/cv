function SidebarHeader({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) {
  return (
    <div className="pl-4">
      <h3 className="text-white text-xl font-semibold">{heading}</h3>
      {subheading ? <h4 className="text-white text-sm">{subheading}</h4> : ""}
    </div>
  );
}

export default SidebarHeader;
