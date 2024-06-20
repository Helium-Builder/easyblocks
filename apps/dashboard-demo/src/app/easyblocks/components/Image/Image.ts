import { NoCodeComponentDefinition } from "@heliumblocks/core";

const imageComponentDefinition: NoCodeComponentDefinition = {
  id: "Image",
  type: "item",
  schema: [
    {
      prop: "image",
      label: "Image",
      type: "image",
      optional: true,
    },
  ],
};

export { imageComponentDefinition };
