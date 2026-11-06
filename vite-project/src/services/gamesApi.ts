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

export const addGame = async (
  newGame: Omit<Game, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<Game> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newGame),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.log('API error:', errorText);
    throw new Error('Failed to add game');
  }

  const data: Game = await response.json();
  return data;
};

export const updateGame = async (
  gameId: string,
  updatedGame: Partial<Omit<Game, 'id' | 'createdAt' | 'updatedAt'>>,
): Promise<Game> => {
  const response = await fetch(`${API_URL}/${gameId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedGame),
  });

  if (!response.ok) {
    throw new Error(`Failed to update game with ID: ${gameId}`);
  }

  const data: Game = await response.json();
  return data;
};

export const deleteGame = async (gameId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${gameId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to delete game with ID: ${gameId}`);
  }
};
