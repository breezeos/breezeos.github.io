import './index.css';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import Body from './components/Body';
import Footer from './components/Footer';
import Navigation from './components/Navigation'

function App() {
  const themeDark = useSelector(state => state.theme.dark);
  const nav = useSelector(state => state.nav.active);

  return (
    <div className={`${themeDark ? 'dark ' : ''}`}>
      <div className='w-full'>
        <Header/>
        <Body/>
        <Footer/>
      </div>
      <Navigation/>
    </div>
  )
}

export default App;
