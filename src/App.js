import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Courses from './components/Courses/Courses';
import Company from './components/Company/Company';
import Placement from './components/Placement/Placement';
import Training from './components/Training/Training';
import Brances from './components/Brances/Brances';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Courses/>
      <Company/>
      <Placement/>
      <Training/>
      <Brances/>
      <Footer/>
    </div>
  );
}
export default App;
