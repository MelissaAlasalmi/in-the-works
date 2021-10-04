import '../App.css';
import {Card} from './card'

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
	}
}

function Grid() {
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
	)
  }

export default Grid