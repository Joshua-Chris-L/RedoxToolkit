import './App.css';
import Login from './component/login';
import Logout from './component/logout';
import Profile from './component/profile';

function App() {
  return (
    <div className="App">

        <Profile />
        <Login />
        <Logout />
        
    </div>
  );
}

export default App;
