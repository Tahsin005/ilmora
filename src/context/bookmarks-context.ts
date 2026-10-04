import { createContext } from 'react';

export interface BookmarkedItem {
  id: string; // unique key
  type: 'quran' | 'hadith' | 'dua' | 'prophet';
  title: string;
  subtitle?: string;
  arabicText?: string;
  translation?: string;
  link: string;
  createdAt: number;
}

export interface LastReadItem {
  type: 'quran' | 'prophet';
  title: string;
  subtitle: string;
  link: string;
  timestamp: number;
}

export interface BookmarksContextType {
  bookmarks: BookmarkedItem[];
  addBookmark: (item: Omit<BookmarkedItem, 'createdAt'>) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  lastRead: LastReadItem | null;
  setLastRead: (item: LastReadItem) => void;
}

export const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined);
