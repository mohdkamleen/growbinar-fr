import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Organization from './components/Organization';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main>
        <Header />
        <Banner />
        <Organization />
        <Body />
        <Footer />
      </main>
    </>
  );
}

export default App;
