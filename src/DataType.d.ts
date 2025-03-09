type SidebarHeader = {
  type: "header";
  data: { heading: string; subheading?: string };
};
type SidebarInfo = {
  type: "info";
  heading: string;
  data: {
    heading: string;
    icon?: string;
    value: { name: string; href?: string };
  }[];
};
type SidebarList = {
  type: "list";
  heading: string;
  data: { heading: string; items: string[] }[];
};
type ContentSection = {
  heading: string;
  items: {
    left?: string;
    right?: string;
    lhref?: string;
    rhref?: string;
  }[][];
};
export type Data = {
  sidebar: {
    data: (SidebarHeader | SidebarInfo | SidebarList)[];
    note?: {
      name: string;
      href: string;
    };
  };
  content: ContentSection[];
};
