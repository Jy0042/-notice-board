import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return ( 
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<DayList />} />
            <Route path="/login_page" element={<LoginPage />} />
            <Route path="/register_page" element={<RegisterPage />} />
            <Route path="/day/:day" element={<Day />} />
            <Route path="*" element={<EmptyPage />} />
            <Route path="/create_word" element={<CreateWord />} />
            <Route path="/create_day" element={<CreateDay />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;