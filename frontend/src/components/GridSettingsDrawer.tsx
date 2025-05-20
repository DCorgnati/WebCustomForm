import { useState, useEffect } from 'react';
import useStore from '../store';

export default function GridSettingsDrawer() {
  const [open, setOpen] = useState(false);
  const styles = useStore(s => s.styles);

  return (
    <div>
      <button className="px-2 py-1 border" onClick={() => setOpen(!open)}>Grid Settings</button>
      {open && (
        <div className="fixed right-0 top-0 w-64 h-full bg-white shadow p-4">
          <pre className="text-xs">{JSON.stringify(styles, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
