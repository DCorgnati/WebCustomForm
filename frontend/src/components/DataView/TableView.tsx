import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import useStore from '../../store';

function TableView() {
  const results = useStore(s => s.results);

  if (results.length === 0) return null;

  const columns = Object.keys(results[0]).map(field => ({ field }));

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact rowData={results} columnDefs={columns} />
    </div>
  );
}

export default TableView;
