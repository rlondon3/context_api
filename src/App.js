import FBIWantedState from './ContextAPI/FBIWantedState';
import WantedProfile from './components/wantedProfile'
import './App.css';


function App() {
  return (
    <FBIWantedState>
      <WantedProfile />
    </FBIWantedState>
  );
}

export default App;
