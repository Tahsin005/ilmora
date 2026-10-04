import React, { useState, useEffect } from 'react';
import {
  BookmarksContext,
  type BookmarkedItem,
  type LastReadItem,
} from './bookmarks-context';

export const BookmarksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<BookmarkedItem[]>(() => {
    try {
      const stored = localStorage.getItem('ilmora_bookmarks');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [lastRead, setLastReadState] = useState<LastReadItem | null>(() => {
    try {
      const stored = localStorage.getItem('ilmora_last_read');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem('ilmora_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    if (lastRead) {
      localStorage.setItem('ilmora_last_read', JSON.stringify(lastRead));
    }
  }, [lastRead]);

  const addBookmark = (item: Omit<BookmarkedItem, 'createdAt'>) => {
    setBookmarks((prev) => {
      if (prev.some((b) => b.id === item.id)) return prev;
      return [{ ...item, createdAt: Date.now() }, ...prev];
    });
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const isBookmarked = (id: string) => {
    return bookmarks.some((b) => b.id === id);
  };

  const setLastRead = (item: LastReadItem) => {
    setLastReadState(item);
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        lastRead,
        setLastRead,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
