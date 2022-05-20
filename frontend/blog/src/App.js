import MainView from "./views/MainView/MainView";
import FullPageNews from "./views/FullPageNews/FullPageNews";
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
          <Route path="/" element={<MainView/>}/>
          <Route path="/news/:id_news" element={<FullPageNews/>}/>
    </Routes>
  );
}

export default App;
