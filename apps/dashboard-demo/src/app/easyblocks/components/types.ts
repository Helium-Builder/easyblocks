import { NoCodeComponentProps as NoCodeActionComponentProps$ } from "@heliumblocks/core";

export type NoCodeActionComponentProps = Record<string, any>;

export type ActionTriggerType<OwnProps> = React.FC<
  {
    href?: string;
    target?: string;
    as?: "div" | "a" | "button";
    onClick?: any;
  } & OwnProps &
    NoCodeComponentProps
>;

export type ActionWrapperType<OwnProps> = React.FC<
  {
    trigger: ReturnType<ActionTriggerType<{}>>;
  } & OwnProps &
    NoCodeComponentProps
>;

export type NoCodeComponentProps = NoCodeActionComponentProps & {
  [key: string]: any;
};
