import { RequestedExternalData } from "@heliumblocks/core";
import { fetchAssets } from "./types/asset/fetch";

async function fetchExternalData(externalData: RequestedExternalData) {
  const assetsExternalData = await fetchAssets(externalData);

  return {
    ...assetsExternalData,
  };
}

export { fetchExternalData };
