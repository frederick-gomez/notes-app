import React from 'react';
import { auth } from '../../firebase';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

//Form validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//Material UI
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Email is required').email('Email is invalid'),
});

const ResetPasswordModal = ({ isOpen, handleClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		shouldUnregister: true,
	});

	const [sendPasswordResetEmail, sending, resetError] =
		useSendPasswordResetEmail(auth);

	const passwordResetHandler = (data) => {
		sendPasswordResetEmail(data.email);
		if (resetError) {
			console.log(resetError);
		}
		handleClose();
	};

	return (
		<Dialog open={isOpen} onClose={handleClose}>
			<DialogTitle>Reset your password</DialogTitle>

			<DialogContent>
				<Typography>
					Enter your email below and we'll send you a link to reset your
					password.
				</Typography>
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
			</DialogContent>

			<DialogActions>
				<LoadingButton
					type='submit'
					variant='contained'
					color='primary'
					loading={sending}
					onClick={handleSubmit(passwordResetHandler)}
				>
					Send Link
				</LoadingButton>
			</DialogActions>
		</Dialog>
	);
};

export default ResetPasswordModal;
