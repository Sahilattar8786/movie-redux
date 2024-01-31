import logo from './logo.svg';
import './App.scss';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDeatil from './components/MovieDetail/MovieDeatil';

function App() {
  return (
   <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movie/:imdbID" element={<MovieDeatil/>}></Route>
      <Route element={<PageNotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

   </>
  );
}

export default App;
