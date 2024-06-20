import type { WidgetComponentProps } from "@heliumblocks/core";
import { MediaPicker } from "./MediaPicker";

export function MockVideoPicker({
  id,
  onChange,
}: WidgetComponentProps<string>) {
  return <MediaPicker id={id} onChange={onChange} mediaType={"video"} />;
}
