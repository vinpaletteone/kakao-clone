import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './js/routes'

function App() {
  return (
    <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
