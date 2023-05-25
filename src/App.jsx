import './index.css';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const themeDark = useSelector(state => state.theme.dark);

  return (
    <div className={`${themeDark ? 'dark' : ''} h-screen`}>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App;
