import './App.css';
import AppRouter from './Layout/AppRouter/AppRouter';
import Header from './Layout/Header/Header';

const App = () => {
  return (
    <div className="App container">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
