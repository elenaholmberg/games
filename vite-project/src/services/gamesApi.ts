import type { Game } from '../types/game';

const API_URL = 'https://questlog-api.vercel.app/api/elena/games';

// GET: Fetch all games or filter by status
export const fetchGames = async (status?: string): Promise<Game[]> => {
  const url =
    status && status !== 'all' ? `${API_URL}?status=${status}` : API_URL;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  const data: Game[] = await response.json();
  return data;
};

// GET: Fetch one game by ID
export const fetchGameById = async (gameId: string): Promise<Game> => {
  const response = await fetch(`${API_URL}/${gameId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch game with ID: ${gameId}`);
  }

  const data: Game = await response.json();
  return data;
};

// POST: Add a new game
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

// PATCH: Update an existing game
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
    throw new Error('Failed to update game');
  }

  const data: Game = await response.json();
  return data;
};

// DELETE: Delete a game
export const deleteGame = async (gameId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${gameId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete game');
  }
};
