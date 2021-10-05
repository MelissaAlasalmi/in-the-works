import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { useState, useEffect } from 'react';
import { Card } from './card';

const myToken = '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';

function getRepoData(login) {
  const [data, setData] = useState([]);

  async function getData() {
    const repos = [];
    const res = await fetch(`https://api.github.com/users/${login}/repos`, {
      headers: {
        Authorization: `token ${myToken}`,
      },
    });
    const content = await res.json();
    for (var i = 0; i < content.length; i++) {
      repos.push({
        name: content[i].name,
        description: content[i].description,
        language: content[i].language,
        url: content[i].clone_url,
        date: content[i].updated_at,
      });
    }
    setData(repos);
  }

  useEffect(() => {
    getData();
  }, []);
  return data;
}

export const RepoGrid = ({ login }) => {
  let repos = getRepoData(login);
  if (repos) {
    console.log(repos);
    return (
      <div style={styles.card_container}>
        {repos.map((item, index) => (
          <Card
            key={index}
            size={'md'}
            name={item.name}
            description={item.description}
            language={item.language}
            url={item.url}
            updated_at={item.updated_at}
          />
        ))}
      </div>
    );
  } else return <></>;
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
