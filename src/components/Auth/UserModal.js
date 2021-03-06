import React, { useState, useEffect, useCallback, useContext } from 'react';
import db, { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

//Material UI
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const UserModal = ({ anchorEl, closeModal }) => {
	const authCtx = useContext(AuthContext);
	const [userInfo, setUserInfo] = useState('');
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	const isOpen = !!anchorEl;

	const fetchUserInfo = useCallback(async () => {
		if (user) {
			try {
				const docRef = doc(db, 'users', user.uid);
				const docSnap = await getDoc(docRef);
				setUserInfo({
					name: docSnap.data().name,
					email: docSnap.data().email,
				});
			} catch (error) {
				console.log(error);
			}
		}
	}, [user]);

	useEffect(() => {
		fetchUserInfo();
	}, [fetchUserInfo]);

	const signOut = () => {
		navigate('/login', { replace: true });
		authCtx.logout();
		closeModal();
	};

	const modalStyle = {
		minWidth: 300,
		maxWidth: 500,
		padding: 2,
	};

	return (
		<Popover
			id='user-account'
			open={isOpen}
			anchorEl={anchorEl}
			onClose={closeModal}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
		>
			<Card sx={modalStyle}>
				<CardContent>
					<Stack spacing={1} alignItems='center'>
						<Avatar sx={{ width: 56, height: 56 }} alt={userInfo?.name} src={user?.photoURL} />
						<Stack>
							<Typography align='center' variant='h6' sx={{ fontFamily: 'Open Sans' }}>
								{user?.displayName ? user?.displayName : userInfo?.name}
							</Typography>
							<Typography align='center' variant='body2'>
								{userInfo?.email}
							</Typography>
						</Stack>
					</Stack>
				</CardContent>

				<CardActions>
					<Button onClick={signOut}>Sign out</Button>
				</CardActions>
			</Card>
		</Popover>
	);
};

export default UserModal;
