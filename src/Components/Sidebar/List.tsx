function SidebarList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1 pt-1">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

export default SidebarList;
