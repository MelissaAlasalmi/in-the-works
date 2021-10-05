import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

// ˇˇˇˇall credit for these two functions go to Github user zellwkˇˇˇˇ//
export function toKebab(string) {
  return string
    .split('')
    .map((letter) => {
      if (/[A-Z]/.test(letter)) {
        return ` ${letter.toLowerCase()}`;
      }
      return letter;
    })
    .join('')
    .trim()
    .replace(/[_\s]+/g, '-');
}

export function toTitle(string) {
  return toKebab(string)
    .split('-')
    .map((word) => {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
//^^^^all credit for these two functions go to Github user zellwk^^^^//

export const Card = ({ size, name, description, language, url }) => {
  return (
    <div
      style={{
        ...styles.card,
        ...styles[size],
      }}
    >
      <h4>
        <strong>
          <a href={url}>{toTitle(name)}</a>
        </strong>
      </h4>
      {description ? <h6>{description}</h6> : <></>}
      {language ? (
        <h6>
          Written in <strong>{language}</strong>
        </h6>
      ) : (
        <></>
      )}
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
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
  },
  xxs: {
    gridRowEnd: 'span 20',
  },
  xs: {
    gridRowEnd: 'span 30',
  },
  sm: {
    gridRowEnd: 'span 35',
  },
  md: {
    gridRowEnd: 'span 40',
  },
  lg: {
    gridRowEnd: 'span 50',
  },
};
