import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Profile from './components/profile';

const App = () => {
  return (
    <div>
      <div style={{ ...styles.profile }}>
        <h4>
          Wanna see what a certain someone is up to? Search for their username
          to see which repos they have updated most recently!
        </h4>
      </div>
      <Profile />
    </div>
  );
};

const styles = {
  profile: {
    margin: 15,
    padding: 15,
    borderRadius: '16px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    backgroundColor: '#FFC857',
    width: '50vw',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    position: 'relative',
    marginLeft: '50px',
    justifyContent: 'center',
  },
};

export default App;
