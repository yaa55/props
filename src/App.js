import logo from './logo.svg';
import './App.css';
import Profile from "./profil/Profile"


  function alertMyname(name){
    alert(`my name is ${name}`)
  }
function App() {
  return (
    <div className="App">
      <Profile name="SSSSS" lastName="Y" age="33" alertFunction={alertMyname}>{logo}</Profile>
    </div>
  );
}

export default App;
