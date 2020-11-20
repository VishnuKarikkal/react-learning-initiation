import './App.scss';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Header />  {/* Header Component */}
    <MainContent /> {/* MainContent Component */}
    <Footer />  {/* Footer Component */}
    </div>
  );
}

export default App;
