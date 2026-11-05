import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import GamesPage from './pages/GamesPage';
import GameDetailsPage from './pages/GameDetailsPage';
import AddGamePage from './pages/AddGamePage';
import NotFoundPage from './pages/NotFoundPage';
import EditGamePage from './pages/EditGamePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GamesPage />} />
        <Route path="games/:gameId" element={<GameDetailsPage />} />
        <Route path="add-game" element={<AddGamePage />} />
        <Route path="games/:gameId/edit" element={<EditGamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
