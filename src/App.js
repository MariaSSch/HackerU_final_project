import './App.sass';
import Author from './components/Author/Author';
import Books from './components/Books/Books';
import FirstLine from './components/FirstLine/FirstLine';
import Partners from './components/Partners/Partners';
import Promo from './components/Promo/Promo';
import GetBookCopy from './components/GetBookCopy/GetBookCopy';
import Learnings from './components/Learnings/Learnings';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <FirstLine />
      <Promo />
      <Books />
      <Author />
      <Partners />
      <GetBookCopy />
      <Learnings />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
