// import Sky from '../components/Sky/Sky';
import Dropdown from './Dropdown/Dropdown';

export const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Web site for a forecast of weather</h1>
      <Dropdown />
      {/* <Sky initialValue={1} /> */}
    </div>
  );
};
