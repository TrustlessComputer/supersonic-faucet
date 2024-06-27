export type ILightNodeItem = {
  base_batch_number: string;
  bitcoin_tx_hash: string;
  da_tx_hash: string;
  batch_data: any;
};

export type ILightNodeStatusResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ILightNodeItem[];
};
