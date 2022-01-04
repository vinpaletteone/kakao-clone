import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './js/routes';
import 'sass-reset'

function App() {
  return (
    <>
      <BrowserRouter className="App">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
