import "./App.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Userpage from "./components/UserPage/Userpage";
import Createuser from "./components/CreateUser/Createuser";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Userpage/:id" element={<Userpage />}></Route>
        <Route path="/Createuser" element={<Createuser />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
