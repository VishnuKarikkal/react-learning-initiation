import './App.scss';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Example from './components/Example';
import Header from './components/Header';
import APIFetch from './components/APIFetch';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
    <Header />  {/* Header Component */}
    <MainContent />{/* MainContent Component */}
    <Example />
    <APIFetch />
    <Forms />
    <Footer />  {/* Footer Component */}
    </div>
  );
}

export default App;
