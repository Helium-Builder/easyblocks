import { NoCodeComponentDefinition } from "@heliumblocks/core";

export const simpleBannerDefinition: NoCodeComponentDefinition = {
  id: "SimpleBanner",
  label: "SimpleBanner",
  type: "section",
  schema: [
    {
      prop: "backgroundColor",
      label: "Background Color",
      type: "color",
    },
    {
      prop: "hasBorder",
      label: "Has Border?",
      type: "boolean",
      responsive: true,
    },
    {
      prop: "padding",
      label: "Pading",
      type: "space",
    },
    {
      prop: "gap",
      label: "Gap",
      type: "space",
    },
    {
      prop: "buttonsGap",
      label: "Buttons gap",
      type: "space",
    },
    {
      prop: "Title",
      type: "component",
      required: true,
      accepts: ["@heliumblocks/rich-text"],
    },
    {
      prop: "Stack",
      type: "component",
      required: true,
      accepts: ["Stack"],
    },
    {
      prop: "Buttons",
      type: "component-collection",
      accepts: ["Button"],
      placeholderAppearance: {
        height: 36,
        width: 100,
        label: "Add button",
      },
    },
  ],
  styles: ({ values }) => {
    return {
      styled: {
        Root: {
          backgroundColor: values.backgroundColor,
          border: values.hasBorder ? `2px solid black` : "none",
          padding: values.padding,
        },
        Wrapper: {
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          gap: values.gap,
        },
        ButtonsWrapper: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: values.buttonsGap,
        },
      },
    };
  },
  editing: ({ values, editingInfo }) => {
    return {
      components: {
        Buttons: values.Buttons.map(() => ({
          direction: "horizontal",
        })),
      },
    };
  },
};
