import { NoCodeComponentDefinition } from "@heliumblocks/core";

const assetLinkDefinition: NoCodeComponentDefinition = {
  id: "AssetLink",
  label: "Asset Link",
  type: "action",
  schema: [
    {
      prop: "asset",
      type: "asset",
      optional: true,
    },
  ],
};

export { assetLinkDefinition };
