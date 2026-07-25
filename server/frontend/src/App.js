import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register"
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";
import Home from './components/Home/Home';
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
    <div className="app">
    <Header></Header>
    {/* <main className="main-content"> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/login" element={<LoginPanel />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dealers" element={<Dealers/>} />
          <Route path="/dealer/:id" element={<Dealer/>} />
          <Route path="/postreview/:id" element={<PostReview/>} />

      </Routes>
    {/* </main> */}
    <Footer/>
    </div>
    </>
  );
}
export default App;
