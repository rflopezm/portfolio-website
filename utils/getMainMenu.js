import { query } from './query';
export async function getMainMenu() {
  const mainMenu = await query('/navigation');
  if (!mainMenu || !mainMenu.items) {
    return [];
  }
  return mainMenu ? mainMenu.items : [];
}
