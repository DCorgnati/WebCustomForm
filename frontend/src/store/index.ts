import create from 'zustand';
import { Query } from '../types';
import api from '../api/client';

interface State {
  queries: Query[];
  selected?: Query;
  results: any[];
  styles: any;
  fetchQueries: () => Promise<void>;
  runQuery: (params: Record<string, any>) => Promise<void>;
}

const useStore = create<State>((set, get) => ({
  queries: [],
  results: [],
  styles: {},
  async fetchQueries() {
    const { data } = await api.get<Query[]>('/api/queries');
    set({ queries: data });
  },
  async runQuery(params) {
    const sel = get().selected;
    if (!sel) return;
    const { data } = await api.post(`/api/query/${encodeURIComponent(sel.name)}`, params);
    set({ results: data });
  }
}));

export default useStore;
