import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

export const Card = ({ size }) => {
  return (
    <div
      style={{
        ...styles.card,
        ...styles[size],
      }}
    >
      <h1>Hello</h1>
      <h3>Hello</h3>
      <h6>Hello</h6>
    </div>
  );
};

const styles = {
  card: {
    margin: 15,
    padding: 15,
    borderRadius: '16px',
    backgroundColor: '#A997DF',
    justifyContent: 'center',
  },
  sm: {
    gridRowEnd: 'span 26',
  },
  md: {
    gridRowEnd: 'span 33',
  },
  lg: {
    gridRowEnd: 'span 45',
  },
};
