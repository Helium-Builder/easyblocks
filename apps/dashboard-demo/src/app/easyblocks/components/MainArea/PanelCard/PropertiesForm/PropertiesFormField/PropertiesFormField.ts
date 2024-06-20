import { NoCodeComponentDefinition } from "@heliumblocks/core";

const propertiesFormTextField: NoCodeComponentDefinition = {
  id: "PropertiesFormTextField",
  schema: [
    {
      prop: "property",
      type: "propertyText",
    },
  ],
};

const propertiesFormBooleanField: NoCodeComponentDefinition = {
  id: "PropertiesFormBooleanField",
  schema: [
    {
      prop: "property",
      type: "propertyBoolean",
    },
  ],
};

export { propertiesFormTextField, propertiesFormBooleanField };
