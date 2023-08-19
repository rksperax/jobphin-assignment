import { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import appRoutes from './app/router';
import Loader from './components/Loader';

function App() {
  return (
    <div className="m-2.5">
      <BrowserRouter>
          <Suspense fallback={Loader()}>
              <Routes>
                {appRoutes.map((route) => (
                  <Route path={route.path} element={route.element} key={route.path}/>
                ))}
              </Routes>
          </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;