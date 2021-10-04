import React, {
  useState, 
  useEffect
} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {
  Container,
  Row
} from 'react-bootstrap';
import './App.css';
import Grid from './components/grid'
import Profile from './components/profile'

const Search = ({handleSearch, handleSubmit}) => {
  return(
    <div className={'right'}>
      <input
          type="text"
          id="search"
          placeholder="Github user"
          onChange={handleSearch}
      />
      <button 
        type="submit" 
        onClick={handleSubmit}
      >
        Search
      </button>
  </div>
  )
}

const App = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [repos, setRepos] = useState('');
  const [events, setEvents] = useState('');
  const [avatar, setAvatar] = useState('');
  const [blog, setBlog] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [availability, setAvailability] = useState('');
  const [bio, setBio] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, []);

  const setData = ({ 
    name, 
    login, 
    public_repos, 
    events_url, 
    avatar_url, 
    blog, 
    location, 
    email, 
    hireable, 
    bio}) => {
      setName(name);
      setUserName(login);
      setRepos(public_repos);
      setEvents(events_url);
      setAvatar(avatar_url);
      setBlog(blog);
      setLocation(location);
      setEmail(email);
      setAvailability(hireable);
      setBio(bio);
  }

  const handleSearch = (event) => setUserInput(event.target.value);
  const handleSubmit = () => {
    console.log(userInput)
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data =>{
      setData(data);
    });
  }

  return (
    <Container fluid>
      <Row fluid>
          <Search handleSearch={handleSearch} handleSubmit={handleSubmit} />
      </Row>
      <Profile 
        name={name} 
        avatar={avatar}
        blog={blog}
        location={location}
        email={email}
        availability={availability}
        bio={bio} 
      />
      <Grid />
    </Container>
  );
}

export default App;
