import '../App.css';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { RepoGrid } from './grid';

function GetAvailability({ availability }) {
  if (availability === true)
    return (
      <h6>
        <strong>Available for hire!</strong>
      </h6>
    );
  else if (availability === false) return <h6>Not available for hire</h6>;
  else return <></>;
}

function GetBlog({ blog }) {
  return (
    <div>
      {blog ? (
        <h6>
          <a href={blog}>Personal link</a>
        </h6>
      ) : (
        <></>
      )}
    </div>
  );
}

const DisplayProfile = ({
  name,
  avatar,
  blog,
  location,
  email,
  availability,
  bio,
  error,
  login,
}) => {
  return (
    <div>
      {error ? (
        <div>
          <h1>User {error}</h1>
        </div>
      ) : login ? (
        <div style={{ ...styles.profile }}>
          {avatar ? <img src={avatar} alt="avatar" /> : <></>}
          {name ? <h1>{name}</h1> : <h1>Anonymous user</h1>}
          {email ? <h6>Email: {email}</h6> : <></>}
          <GetBlog blog={blog} />
          {bio ? <h6>{bio}</h6> : <></>}
          {location ? <h6>Location: {location}</h6> : <></>}
          <GetAvailability availability={availability} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Search = ({ handleSearch, handleSubmit }) => {
  return (
    <div className={'right'}>
      <input
        type="text"
        id="search"
        placeholder="Github user"
        onChange={handleSearch}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

const Profile = () => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
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
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    avatar_url,
    blog,
    location,
    email,
    hireable,
    bio,
  }) => {
    setName(name);
    setLogin(login);
    setAvatar(avatar_url);
    setBlog(blog);
    setLocation(location);
    setEmail(email);
    setAvailability(hireable);
    setBio(bio);
  };

  const handleSearch = (event) => setUserInput(event.target.value);
  const handleSubmit = () => {
    setError('');
    setLogin('');
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setError(data.message);
        else setData(data);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Search handleSearch={handleSearch} handleSubmit={handleSubmit} />
      </Row>
      <DisplayProfile
        name={name}
        avatar={avatar}
        blog={blog}
        location={location}
        email={email}
        availability={availability}
        bio={bio}
        error={error}
        login={login}
      />
      {login ? <RepoGrid login={login} /> : <></>}
    </Container>
  );
};

const styles = {
  profile: {
    margin: 15,
    padding: 15,
    borderRadius: '16px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    backgroundColor: '#FFC857',
    width: '40vw',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    justifyContent: 'center',
  },
};

export default Profile;
