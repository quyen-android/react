
import { Link } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';

const App = () =>{


  return(
    <div className='app-container'>
      <Header/>
      <div> 
        test links
        <button>
          <Link to='/admins'>
            Go to the admins page
          </Link>
        </button>
        <button>
          <Link to='/users'>
            Go to the user page
          </Link>
        </button>
      </div>
    </div>

  )
}


export default App;
