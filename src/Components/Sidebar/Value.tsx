function SidebarValue({ href, value }: { href?: string; value: string }) {
  return href ? (
    <a target="_blank" className="italic" href={href}>
      {value}
    </a>
  ) : (
    <span>{value}</span>
  );
}

export default SidebarValue;
