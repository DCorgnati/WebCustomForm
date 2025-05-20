export interface QueryParam {
  name: string;
  type: string;
  required: boolean;
  description?: string;
  default?: any;
  visible: boolean;
}

export interface Query {
  name: string;
  type: string;
  description: string;
  query: string;
  parameters?: QueryParam[] | null;
}
