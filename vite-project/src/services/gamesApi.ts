import type { Game } from '../types/game';

const API_URL = 'https://questlog-api.vercel.app/api/elena/games';

export const fetchGames = async (): Promise<Game[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  const data: Game[] = await response.json();
  return data;
};

export const fetchGameById = async (gameId: string): Promise<Game> => {
  const response = await fetch(`${API_URL}/${gameId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch game with ID: ${gameId}`);
  }

  const data: Game = await response.json();
  return data;
};
