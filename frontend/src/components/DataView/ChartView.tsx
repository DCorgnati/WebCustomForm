import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useStore from '../../store';

export default function ChartView() {
  const results = useStore(s => s.results);
  if (results.length === 0) return null;
  const data = results;
  const keys = Object.keys(data[0]);
  const [x, y1, y2] = keys;
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={x} />
      <YAxis />
      <Tooltip />
      <Legend />
      {y1 && <Line type="monotone" dataKey={y1} stroke="#8884d8" />}
      {y2 && <Line type="monotone" dataKey={y2} stroke="#82ca9d" />}
    </LineChart>
  );
}
