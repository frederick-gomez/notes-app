import React, { useState, useEffect } from 'react';
import { auth, signInWithGoogle } from '../../firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

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
import useCheckErrors from '../../hooks/useCheckErrors';
import ResetPasswordModal from './ResetPasswordModal';

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Email is required').email('Email is invalid'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters')
		.max(20, 'Password must not exceed 20 characters'),
});

const SignIn = ({ switchForm }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		shouldUnregister: true,
	});

	//Handle reset password modal
	const [isResetModal, setIsResetModal] = useState(false);
	const openModal = () => setIsResetModal(true);
	const closeModal = () => setIsResetModal(false);

	const navigate = useNavigate();

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const submitSignInForm = (data) => {
		try {
			signInWithEmailAndPassword(data.email, data.password);
		} catch (error) {
			console.log(error);
		}
	};

	//Redirect if succesful
	useEffect(() => {
		if (user) {
			navigate('/notes', { replace: true });
		}
	}, [user, navigate]);

	let errorMessage = useCheckErrors(error);

	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		minWidth: 300,
		maxWidth: 500,
		padding: 2,
	};

	return (
		<>
			<Card
				sx={modalStyle}
				component='form'
				onSubmit={handleSubmit(submitSignInForm)}
			>
				<CardHeader
					title='Welcome back!'
					titleTypographyProps={{
						component: 'h1',
						variant: 'h5',
						fontFamily: 'Open Sans',
					}}
					sx={{ paddingBottom: 0 }}
				/>
				<CardContent>
					<Typography gutterBottom>Sign in with your email</Typography>
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
					<Button onClick={openModal}>Forgot your password?</Button>
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
							Sign in with email
						</LoadingButton>
						<Typography align='center'>OR</Typography>
						<Button
							type='button'
							variant='contained'
							color='error'
							startIcon={<GoogleIcon />}
							onClick={signInWithGoogle}
						>
							Sign in with Google
						</Button>
						<Typography>
							Don't have an account?
							<Button onClick={switchForm}>Register now</Button>
						</Typography>
					</Stack>
				</CardActions>
			</Card>
			<ResetPasswordModal isOpen={isResetModal} handleClose={closeModal} />
		</>
	);
};

export default SignIn;
