import { useContext } from 'react';
import { BookmarksContext } from '../context/bookmarks-context';

export const useBookmarks = () => {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarksProvider');
  }
  return context;
};
