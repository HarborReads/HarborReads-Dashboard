 
import './App.css';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';
import SignUp from './component/SignUpPage/SignUp';
import SignIn from './component/SignInPage/SignIn';
import OpenScreen from './component/OpenScreen/OpenScreen';


function App() {
  return (
    <div className="App">
      <LeftBar/>
      <OpenScreen/>
      <RightBar/>
    </div>
  );
}

export default App;
