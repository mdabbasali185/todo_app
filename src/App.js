import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Auth/SignUp/SignUP';
import LogIn from './Auth/LogIn/LogIn';
import NotFound from './Pages/Shared/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase/firebase.init';
import WorkTodo from './Pages/WorkTodo/WorkTodo';

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<WorkTodo />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
