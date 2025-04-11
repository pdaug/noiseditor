export type FlowDataNode = {
  id: string;
  data: {
    [key: string]: unknown;
  };
  type: string;
  position: number[];
  dragHandle?: string;
};

export type FlowDataEdge = {
  id: string;
  source: string;
  target: string;
};

export type FlowData = {
  nodes: FlowDataNode[];
  edges: FlowDataEdge[];
};

export type FlowWithProps = FlowData & {
  id: string;
  createDate: string;
  updateDate: string;
};
