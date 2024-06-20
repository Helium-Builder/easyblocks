import { NoCodeComponentEntry } from "@heliumblocks/core";
import { deepClone } from "@heliumblocks/utils";

/**
 * Outputs comparable config that is FULL COPY of config
 */
function getConfigSnapshot(config: NoCodeComponentEntry): NoCodeComponentEntry {
  const strippedConfig = deepClone(config);
  return strippedConfig;
}
export { getConfigSnapshot };
