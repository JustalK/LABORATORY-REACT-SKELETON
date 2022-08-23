import { Route, Routes, Link } from 'react-router-dom';
import Experience1 from './components/Experience1';

export function App() {
  return (
    <>
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Experience1 />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
