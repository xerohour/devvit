import type { RedisClient } from '@devvit/public-api';
import type { Tile } from '../types.js';

const Keys = {
  userTiles: (postId: string, username: string) => `userTiles:${postId}:${username}`,
} as const;

export const getUserTiles = async (
  redis: RedisClient,
  postId: string,
  currentUserName: string
): Promise<Tile[] | null> => {
  const storedTiles = await redis.get(Keys.userTiles(postId, currentUserName));
  if (!storedTiles) {
    return null;
  }
  return JSON.parse(storedTiles);
};

export const setUserTiles = async (
  redis: RedisClient,
  postId: string,
  currentUserName: string,
  tiles: Tile[]
): Promise<void> => {
  const tilesData = JSON.stringify(tiles);
  await redis.set(Keys.userTiles(postId, currentUserName), tilesData);
};
