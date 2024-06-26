"use client";

import { Easyblocks, easyblocksGetStyleTag } from "@heliumblocks/core";
import { useServerInsertedHTML } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

function EasyblocksContent(props: ComponentPropsWithoutRef<typeof Easyblocks>) {
  useServerInsertedHTML(() => {
    return easyblocksGetStyleTag();
  });

  return <Easyblocks {...props} />;
}

export { EasyblocksContent };
