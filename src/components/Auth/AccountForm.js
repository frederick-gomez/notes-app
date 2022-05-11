import React, { useState } from 'react';
import {
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	signInWithGoogle,
} from '../../firebase';

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

const AccountForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		shouldUnregister: true,
	});

	//Switch between loggin in and creating an account
	const [isSigning, setIsSigning] = useState(true);
	const switchModal = () => setIsSigning(!isSigning);

	const submitForm = (data) => {
		if (isSigning) {
			logInWithEmailAndPassword(data.email, data.password);
		} else {
			registerWithEmailAndPassword(data.name, data.email, data.password);
		}
		resetInputs();
	};

	const resetInputs = () => reset();

	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		minWidth: 300,
		maxWidth: 500,
		padding: 2,
	};

	// Card body info
	const signIn = {
		title: 'Welcome back!',
		subtitle: 'Sign in with your email',
		emailButton: 'Sign in with email',
		googleButton: 'Sign in with Google',
		footer: "Don't have an account?",
		footerButton: 'Register now',
	};

	const registerAccount = {
		title: 'Create your account',
		subtitle: 'Register with your email',
		emailButton: 'Register with email',
		googleButton: 'Register with Google',
		footer: 'Already have an account?',
		footerButton: 'Sign in',
	};

	return (
		<Card sx={modalStyle} component='form' onSubmit={handleSubmit(submitForm)}>
			<CardHeader
				title={isSigning ? signIn.title : registerAccount.title}
				titleTypographyProps={{
					component: 'h1',
					variant: 'h5',
					fontFamily: 'Open Sans',
				}}
				sx={{ paddingBottom: 0 }}
			/>
			<CardContent>
				<Typography gutterBottom>
					{isSigning ? signIn.subtitle : registerAccount.subtitle}
				</Typography>
				{!isSigning && (
					<TextField
						margin='dense'
						id='name'
						name='name'
						label='Name'
						fullWidth
						{...register('name')}
					/>
				)}
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
			</CardContent>
			<CardActions>
				<Stack spacing={1} width='100%'>
					<LoadingButton
						type='submit'
						variant='contained'
						color='primary'
						startIcon={<EmailIcon />}
						loading={false}
					>
						{isSigning ? signIn.emailButton : registerAccount.emailButton}
					</LoadingButton>
					<Typography align='center'>OR</Typography>
					<Button
						type='button'
						variant='contained'
						color='error'
						startIcon={<GoogleIcon />}
						onClick={signInWithGoogle}
					>
						{isSigning ? signIn.googleButton : registerAccount.googleButton}
					</Button>
					<Typography>
						{isSigning ? signIn.footer : registerAccount.footer}
						<Button onClick={switchModal}>
							{isSigning ? signIn.footerButton : registerAccount.footerButton}
						</Button>
					</Typography>
				</Stack>
			</CardActions>
		</Card>
	);
};

export default AccountForm;
