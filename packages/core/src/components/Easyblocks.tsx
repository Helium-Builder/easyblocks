"use client";
import React, { ReactElement, useEffect } from "react";
import { RichTextClient } from "../compiler/builtins/$richText/$richText.client";
import { RichTextBlockElementClient } from "../compiler/builtins/$richText/$richTextBlockElement/$richTextBlockElement.client";
import { RichTextLineElementClient } from "../compiler/builtins/$richText/$richTextLineElement/$richTextLineElement.client";
import { RichTextPartClient } from "../compiler/builtins/$richText/$richTextPart/$richTextPart.client";
import { TextClient } from "../compiler/builtins/$text/$text.client";
import { ExternalData, RenderableDocument } from "../types";
import {
  ComponentBuilder,
  ComponentBuilderProps,
} from "./ComponentBuilder/ComponentBuilder";
import { EasyblocksExternalDataProvider } from "./EasyblocksExternalDataProvider";
import { EasyblocksMetadataProvider } from "./EasyblocksMetadataProvider";
import { MissingComponent } from "./MissingComponent";

export type EasyblocksProps = {
  renderableDocument: RenderableDocument;
  externalData?: ExternalData;
  components?: Record<string, React.ComponentType<any>>;
  componentOverrides?: ComponentOverrides;
};

export type ComponentOverrides = Record<string, ReactElement>;

const builtinComponents: ComponentBuilderProps["components"] = {
  "@heliumblocks/missing-component": MissingComponent,
  "@heliumblocks/rich-text.client": RichTextClient,
  "@heliumblocks/rich-text-block-element": RichTextBlockElementClient,
  "@heliumblocks/rich-text-line-element": RichTextLineElementClient,
  "@heliumblocks/rich-text-part": RichTextPartClient,
  "@heliumblocks/text.client": TextClient,
  "EditableComponentBuilder.client": ComponentBuilder,
};

function Easyblocks({
  renderableDocument,
  externalData,
  componentOverrides,
  components,
}: EasyblocksProps) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--shopstory-viewport-width",
      `calc(100vw - ${
        window.innerWidth - document.documentElement.clientWidth
      }px)`
    );
  });

  const renderableContent = renderableDocument.renderableContent;

  if (renderableContent === null) {
    return null;
  }

  if (componentOverrides) {
    const overridesEntries = Object.entries(componentOverrides);

    overridesEntries.forEach(([componentProp, componentOverride]) => {
      renderableContent.components[componentProp] = [componentOverride];
    });
  }

  return (
    <EasyblocksMetadataProvider meta={renderableDocument.meta}>
      <EasyblocksExternalDataProvider externalData={externalData ?? {}}>
        <ComponentBuilder
          compiled={renderableContent}
          path={""}
          components={{
            ...components,
            ...builtinComponents,
          }}
        />
      </EasyblocksExternalDataProvider>
    </EasyblocksMetadataProvider>
  );
}

export { Easyblocks };
