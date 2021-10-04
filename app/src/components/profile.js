import '../App.css';

function GetAvailability({availability}) {
	if (availability === true)
		return(<h6>Available for hire</h6>);
	else if (availability === false)
		return(<h6>Not available for hire</h6>);
	else
		return(<></>);
}

const Profile = ({
	name,
	avatar,
	blog,
	location,
	email,
	availability,
	bio
}) => {
	return(
		<div style={{
			...styles.profile,
		}}>
			{avatar ? 
				<img src={avatar} alt='avatar'/> : 
				<></>
			}
			{name ? 
				<h1>{name}</h1> : 
				<h1>Anonymous user</h1>
			}
			{email ?
				<h6>Email: {email}</h6> :
				<></>
			}
			{blog ?
				<h6><a href={blog}>Link</a></h6> :
				<></>
			}
			{bio ?
				<h6>{bio}</h6> :
				<></>
			}
			{location ?
				<h6>Location: {location}</h6> :
				<></>
			}
			<GetAvailability availability={availability} />
		</div>
	);
}

const styles = {
	profile: {
		margin: 15,
		padding: 15,
		borderRadius: '16px',
		backgroundColor: '#FFC857',
		width: '40vw',
		gridTemplateColumns: 'repeat(auto-fill, 250px)',
		gridAutoRows: '10px',
		position: 'relative',
		left: '50%',
		transform: 'translateX(-50%)',
		justifyContent: 'center',
	}
}

export default Profile;