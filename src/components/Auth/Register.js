import React, { useState, useEffect, useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import db, { auth, signInWithGoogle } from '../../firebase';
import useCheckErrors from '../../hooks/useCheckErrors';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import Transition from '../UI/Transition';

//Form Validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//Material UI
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';

const validationSchema = Yup.object().shape({
	name: Yup.string().optional(),
	email: Yup.string().required('Email is required').email('Email is invalid'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters')
		.max(20, 'Password must not exceed 20 characters'),
});

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		shouldUnregister: true,
	});
	const authCtx = useContext(AuthContext);
	const navigate = useNavigate();

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const submitRegisterForm = async (data) => {
		setLoading(true);
		try {
			const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
			const user = response.user;
			const token = await user.getIdToken();
			authCtx.login(token);
			await setDoc(doc(db, 'users', user.uid), {
				uid: user.uid,
				name: data.name,
				email: data.email,
				authProvider: 'local',
			});
		} catch (err) {
			setLoading(false);
			setError(err);
		}
	};

	const signInWithGoogleHandler = async () => {
		const token = await signInWithGoogle();
		authCtx.login(token);
	};

	//Redirect if successful
	const isLoggedIn = authCtx.isLoggedIn;
	useEffect(() => {
		if (isLoggedIn) {
			navigate('/notes', { replace: true });
		}
	}, [isLoggedIn, navigate]);

	let errorMessage = useCheckErrors(error);

	const modalStyle = {
		marginLeft: 'auto',
		marginRight: 'auto',
		minWidth: 300,
		maxWidth: 500,
		padding: 2,
	};

	return (
		<Transition>
			<Card sx={modalStyle} component='form' onSubmit={handleSubmit(submitRegisterForm)}>
				<CardHeader
					title='Create your account'
					titleTypographyProps={{
						component: 'h1',
						variant: 'h5',
						fontFamily: 'Open Sans',
					}}
					sx={{ paddingBottom: 0 }}
				/>
				<CardContent>
					<Typography gutterBottom>Register with your email</Typography>
					<TextField
						margin='dense'
						id='name'
						name='name'
						label='Name'
						fullWidth
						{...register('name')}
					/>
					<TextField
						margin='dense'
						id='email'
						name='email'
						label='Email'
						fullWidth
						{...register('email')}
						error={errors.email ? true : false}
						helperText={errors.email?.message}
					/>
					<TextField
						margin='dense'
						id='password'
						name='password'
						label='Password'
						type='password'
						fullWidth
						{...register('password')}
						error={errors.password ? true : false}
						helperText={errors.password?.message}
					/>
					{errorMessage}
				</CardContent>
				<CardActions>
					<Stack spacing={1} width='100%'>
						<LoadingButton
							type='submit'
							variant='contained'
							color='primary'
							startIcon={<EmailIcon />}
							loading={loading}
						>
							Register with email
						</LoadingButton>
						<Typography align='center'>OR</Typography>
						<Button
							type='button'
							variant='contained'
							color='error'
							startIcon={<GoogleIcon />}
							onClick={signInWithGoogleHandler}
						>
							Register with Google
						</Button>
						<Typography>
							Already have an account?
							<Button component={Link} to='/login'>
								Sign in
							</Button>
						</Typography>
					</Stack>
				</CardActions>
			</Card>
		</Transition>
	);
};

export default Register;
