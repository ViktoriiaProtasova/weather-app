import Footer from './Footer/Footer';
import Search from './Search';

export const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Web site for a forecast of weather</h1>
      <Search />
      <Footer />
    </div>
  );
};
