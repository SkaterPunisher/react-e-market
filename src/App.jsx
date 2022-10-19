import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import Privat from './hoc/Privat';
import PrivatAdmin from './hoc/PrivatAdmin';
import AdminPage from './pages/AdminPage';
import BasketPage from './pages/BasketPage';
import EditGoodPage from './pages/EditGoodPage';
import GoodsPage from './pages/GoodsPage';
import HomePage from './pages/HomePage';
import LkPage from './pages/LkPage';
import LoginPage from './pages/LoginPage';
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
          <Route
            path='goods/:id/edit'
            element={
              <PrivatAdmin>
                <EditGoodPage />
              </PrivatAdmin>
            }
          />
          <Route
            path='admin'
            element={
              <PrivatAdmin>
                <AdminPage />
              </PrivatAdmin>
            }
          />
          <Route
            path='basket'
            element={
              <Privat>
                <BasketPage />
              </Privat>
            }
          />
          <Route
            path='lk'
            element={
              <Privat>
                <LkPage />
              </Privat>
            }
          />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<NoteFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
