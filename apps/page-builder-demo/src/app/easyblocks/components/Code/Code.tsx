import { NoCodeComponentProps } from "@heliumblocks/core";

function Code({
  children,
  Wrapper,
}: NoCodeComponentProps & Record<string, any>) {
  return <Wrapper.type {...Wrapper.props}>{children}</Wrapper.type>;
}

export { Code };
