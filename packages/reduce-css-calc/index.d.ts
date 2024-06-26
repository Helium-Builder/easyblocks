declare module "@heliumblocks/reduce-css-calc" {
  const reduceCSSCalc: (
    x: string,
    precision: number,
    map?: { vw?: number; percent?: number }
  ) => string;
  export { reduceCSSCalc };
}
