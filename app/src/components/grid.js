import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { useState, useEffect } from 'react';
import { Card } from './card';

const myToken = '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';

export const RepoGrid = ({ login }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [clone_url, setCloneUrl] = useState('');
  const [updated_at, setUpdatedAt] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}/repos`, {
      headers: {
        Authorization: `token ${myToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        for (var i = 0; i < data.length; i++) setData(data[i]);
      });
  }, []);

  const setData = ({ name, description, language, clone_url, updated_at }) => {
    setName(name);
    setDescription(description);
    setLanguage(language);
    setCloneUrl(clone_url);
    setUpdatedAt(updated_at);
  };

  console.log(name);
  console.log(description);
  console.log(language);
  console.log(clone_url);
  console.log(updated_at);
  return (
    <div>
      <div style={styles.card_container}>
        <Card size={'sm'} />
        <Card size={'lg'} />
        <Card size={'md'} />
        <Card size={'sm'} />
        <Card size={'sm'} />
        <Card size={'lg'} />
      </div>
    </div>
  );
};

const styles = {
  card_container: {
    margin: 0,
    padding: 0,
    width: '80vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    justifyContent: 'center',
  },
};

export default RepoGrid;
