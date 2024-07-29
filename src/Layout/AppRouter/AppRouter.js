import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import { routes } from '../../utility/constant';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={routes.HOME}
        element={<Home />}
      />
    </Routes>
  );
};

export default AppRouter;
