import '../App.css';

export const Card = ({size}) => {
	return(
		<div style={{
			...styles.card,
			...styles[size]
		}}>

		</div>
	);
}

const styles = {
	card: {
		margin: 15,
		padding: 10,
		borderRadius: '16px',
		backgroundColor: 'white'
	},
	sm: {
		gridRowEnd: 'span 26'
	},
	md: {
		gridRowEnd: 'span 33'
	},
	lg: {
		gridRowEnd: 'span 45'
	}
}