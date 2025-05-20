import QuerySelect from './components/QuerySelect';
import ParamsForm from './components/ParamsForm';
import TableView from './components/DataView/TableView';
import GridSettingsDrawer from './components/GridSettingsDrawer';
import ConfigEditorDialog from './components/ConfigEditorDialog/ConfigEditorDialog';
import useStore from './store';
import { useEffect } from 'react';

function App() {
  const fetchQueries = useStore(s => s.fetchQueries);
  useEffect(() => {
    fetchQueries();
  }, [fetchQueries]);

  return (
    <div className="p-4 space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">WebCustomForm</h1>
        <ConfigEditorDialog />
      </header>
      <QuerySelect />
      <ParamsForm />
      <TableView />
      <GridSettingsDrawer />
    </div>
  );
}

export default App;
