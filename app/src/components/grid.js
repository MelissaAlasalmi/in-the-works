import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { useState, useEffect } from 'react';
import { Card } from './card';

function getSize(len) {
  if (len > 300) return 'lg';
  else if (len < 300 && len > 100) return 'md';
  else if (len < 100 && len > 50) return 'sm';
  else return 'xs';
}

function getRepoData(login) {
  const [data, setData] = useState([]);

  async function getData() {
    const repos = [];
    const res = await fetch(`https://api.github.com/users/${login}/repos`);
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

  repos.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  if (repos) {
    return (
      <div style={styles.card_container}>
        {repos.map((item, index) => (
          <Card
            key={index}
            size={item.description ? getSize(item.description.length) : 'xxs'}
            name={item.name}
            description={item.description}
            language={item.language}
            url={item.url}
            updated_at={item.date}
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
