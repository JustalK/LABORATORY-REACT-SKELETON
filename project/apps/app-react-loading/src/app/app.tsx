import { Route, Routes, Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import Experience1 from './components/Experience1';
import Experience2 from './components/Experience2';

export function App() {
  return (
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Experience1</Link>
          </li>
          <li>
            <Link to="/experience2">Experience2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Experience1 />} />
        <Route path="/experience2" element={<Experience2 />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
