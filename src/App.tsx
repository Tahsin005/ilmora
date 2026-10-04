import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { SettingsProvider } from './context/SettingsContext';
import { BookmarksProvider } from './context/BookmarksContext';
import { Layout } from './components/layout/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { QuranPage } from './pages/QuranPage';
import { HadithPage } from './pages/HadithPage';
import { ProphetsPage } from './pages/ProphetsPage';
import { ProphetDetailPage } from './pages/ProphetDetailPage';
import { PrayerTimesPage } from './pages/PrayerTimesPage';
import { DuasPage } from './pages/DuasPage';
import { NamesPage } from './pages/NamesPage';
import { ZakatPage } from './pages/ZakatPage';
import { RuqyahPage } from './pages/RuqyahPage';
import { BookmarksPage } from './pages/BookmarksPage';

export const App: React.FC = () => {
  return (
    <SettingsProvider>
      <BookmarksProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<DashboardPage />} />
              <Route path="quran" element={<QuranPage />} />
              <Route path="hadith" element={<HadithPage />} />
              <Route path="prophets" element={<ProphetsPage />} />
              <Route path="prophets/:id" element={<ProphetDetailPage />} />
              <Route path="prayer-times" element={<PrayerTimesPage />} />
              <Route path="duas" element={<DuasPage />} />
              <Route path="names-of-allah" element={<NamesPage />} />
              <Route path="zakat" element={<ZakatPage />} />
              <Route path="ruqyah" element={<RuqyahPage />} />
              <Route path="bookmarks" element={<BookmarksPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BookmarksProvider>
    </SettingsProvider>
  );
};

export default App;
