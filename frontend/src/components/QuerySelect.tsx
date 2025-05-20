import { useEffect } from 'react';
import useStore from '../store';

function QuerySelect() {
  const { queries, selected } = useStore();
  const setSelected = useStore(s => (q: any) => s.selected = q);

  return (
    <select
      className="p-2 border rounded"
      value={selected?.name || ''}
      onChange={e => {
        const q = queries.find(q => q.name === e.target.value);
        if (q) setSelected(q);
      }}
    >
      <option value="">Select Query</option>
      {queries.map(q => (
        <option key={q.name} value={q.name}>{q.name}</option>
      ))}
    </select>
  );
}

export default QuerySelect;
