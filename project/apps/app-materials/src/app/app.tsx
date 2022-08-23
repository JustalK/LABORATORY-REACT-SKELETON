import { Route, Routes, Link } from 'react-router-dom';
import Experience1 from './components/Experience1';
import Experience2 from './components/Experience2';
import Experience3 from './components/Experience3';

export function App() {
  return (
    <>
      <div />
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Experience1</Link>
          </li>
          <li>
            <Link to="/experience2">Experience2</Link>
          </li>
          <li>
            <Link to="/experience3">Experience3</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Experience1 />} />
        <Route path="/experience2" element={<Experience2 />} />
        <Route path="/experience3" element={<Experience3 />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
