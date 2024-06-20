import { NoCodeComponentDefinition } from "@heliumblocks/core";

const openDialogDefinition: NoCodeComponentDefinition = {
  id: "OpenDialog",
  type: "action",
  schema: [
    {
      prop: "Content",
      type: "component",
      required: true,
      accepts: ["DialogContent"],
    },
  ],
};

export { openDialogDefinition };
