import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import AdminPage from './pages/AdminPage';
import BasketPage from './pages/BasketPage';
import EditGoodPage from './pages/EditGoodPage';
import GoodsPage from './pages/GoodsPage';
import HomePage from './pages/HomePage';
import LkPage from './pages/LkPage';
import NoteFoundPage from './pages/NoteFoundPage';
import SingleGoods from './pages/SingleGoods';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='goods' element={<GoodsPage />} />
          <Route path='goods/:id' element={<SingleGoods />} />
          <Route path='goods/:id/edit' element={<EditGoodPage />} />
          <Route path='admin' element={<AdminPage />} />
          <Route path='basket' element={<BasketPage />} />
          <Route path='lk' element={<LkPage />} />
          <Route path='*' element={<NoteFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
