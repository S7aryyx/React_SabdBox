import './App.css'
import Greeting from './componets/Greeting.jsx'
import Header from './componets/Header.jsx'
import StudentCard from './componets/StudentCard.jsx'
import Footer from './componets/Footer.jsx'

function App() 
{
  return (
    <div className='app'>
      <Header/>
      <StudentCard/>
      <Footer/>
    </div>
  );
}

export default App
