import { Route, Routes } from 'react-router';
import GamesPage from './pages/GamesPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<GamesPage />} />
      </Routes>
    </div>
  );
}

export default App;
