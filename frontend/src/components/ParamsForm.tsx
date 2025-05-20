import { useState } from 'react';
import { z } from 'zod';
import useStore from '../store';

function ParamsForm() {
  const selected = useStore(s => s.selected);
  const runQuery = useStore(s => s.runQuery);
  const [values, setValues] = useState<Record<string, any>>({});

  if (!selected?.parameters || selected.parameters.length === 0) return null;

  const visibleParams = selected.parameters.filter(p => p.visible);
  const schema = z.object(Object.fromEntries(visibleParams.map(p => [p.name, z.any()])));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (parsed.success) runQuery(parsed.data);
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      {visibleParams.map(p => (
        <div key={p.name} className="flex flex-col">
          <label className="text-sm">{p.description || p.name}</label>
          <input
            className="p-2 border rounded"
            value={values[p.name] ?? ''}
            onChange={e => setValues({ ...values, [p.name]: e.target.value })}
          />
        </div>
      ))}
      <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">Run</button>
    </form>
  );
}

export default ParamsForm;
