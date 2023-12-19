import './App.css';
import MainPage from './components/MainPage/MainPage';
import Nav from './components/MainPage/Nav';
import Footer from './components/MainPage/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
