import { NoCodeComponentDefinition } from "@heliumblocks/core";

const appShellSidebarDefinition: NoCodeComponentDefinition = {
  id: "AppShellSidebar",
  schema: [
    {
      prop: "Items",
      type: "component-collection",
      accepts: ["SidebarItem"],
    },
  ],
};

export { appShellSidebarDefinition };
