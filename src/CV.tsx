import { CVData } from "./Data";

import Sidebar from "./Components/Sidebar";
import SidebarHeader from "./Components/Sidebar/Header";
import SidebarInfo from "./Components/Sidebar/Info";
import SidebarSection from "./Components/Sidebar/Section";
import SidebarValue from "./Components/Sidebar/Value";
import SidebarList from "./Components/Sidebar/List";
import Content from "./Components/Content";
import ContentSection from "./Components/Content/Section";
import ContentRow from "./Components/Content/Row";

function CV() {
  return (
    <Sidebar
      note={CVData.sidebar.note}
      content={CVData.sidebar.data.map((sidebarItem, sidebarItemIdx) => {
        if (sidebarItem.type === "header") {
          return (
            <SidebarHeader
              key={sidebarItemIdx}
              heading={sidebarItem.data.heading}
              subheading={sidebarItem.data.subheading}
            />
          );
        }
        if (sidebarItem.type === "info") {
          return (
            <SidebarSection key={sidebarItemIdx} heading={sidebarItem.heading}>
              {sidebarItem.data.map((sidebarInfo, sidebarInfoIdx) => (
                <SidebarInfo
                  key={sidebarInfoIdx}
                  heading={sidebarInfo.heading}
                  icon={sidebarInfo.icon}
                  value={
                    <SidebarValue
                      value={sidebarInfo.value.name}
                      href={sidebarInfo.value.href}
                    />
                  }
                />
              ))}
            </SidebarSection>
          );
        }
        if (sidebarItem.type === "list") {
          return (
            <SidebarSection key={sidebarItemIdx} heading={sidebarItem.heading}>
              {sidebarItem.data.map((sidebarList, sidebarListIdx) => (
                <SidebarInfo
                  key={sidebarListIdx}
                  heading={sidebarList.heading}
                  value={<SidebarList items={sidebarList.items} />}
                />
              ))}
            </SidebarSection>
          );
        }
      })}
    >
      <Content>
        {CVData.content.map((contentItem, contentItemIdx) => (
          <ContentSection key={contentItemIdx} heading={contentItem.heading}>
            {contentItem.items.map((contentRows, contentRowsIdx) => (
              <div key={contentRowsIdx}>
                {contentRows.map((contentRow, contentRowIdx) => (
                  <ContentRow
                    key={contentRowIdx}
                    left={contentRow.left}
                    right={contentRow.right}
                    lhref={contentRow.lhref}
                    rhref={contentRow.rhref}
                  />
                ))}
              </div>
            ))}
          </ContentSection>
        ))}
      </Content>
    </Sidebar>
  );
}

export default CV;
