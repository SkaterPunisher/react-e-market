import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import Privat from './hoc/Privat';
import PrivatAdmin from './hoc/PrivatAdmin';
import HomePage from './pages/HomePage';
import { routes, customerRoutes, AdminRoutes } from './utils/routes';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          {routes.map((item) => {
            return <Route path={item.link} element={item.component} />;
          })}
          {customerRoutes.map((item) => {
            return <Route path={item.link} element={<Privat>{item.component}</Privat>} />;
          })}
          {AdminRoutes.map((item) => {
            return <Route path={item.link} element={<PrivatAdmin>{item.component}</PrivatAdmin>}/>;
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
