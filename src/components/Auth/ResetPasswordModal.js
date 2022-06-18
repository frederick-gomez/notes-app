import React, { useState } from 'react';
import { auth } from '../../firebase';
import useCheckErrors from '../../hooks/useCheckErrors';
import { sendPasswordResetEmail } from 'firebase/auth';
import Notification from '../UI/Notification';

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
import Button from '@mui/material/Button';
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

	const [openNotification, setOpenNotification] = useState(false);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const closeNotification = () => setOpenNotification(false);

	const closeModalHandler = () => {
		setError('');
		handleClose();
	};

	const passwordResetHandler = async (data) => {
		setLoading(true);
		try {
			await sendPasswordResetEmail(auth, data.email);
			handleClose();
			setOpenNotification(true);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			setError(err);
		}
	};

	let errorMessage = useCheckErrors(error);

	return (
		<>
			<Dialog open={isOpen} onClose={closeModalHandler} PaperProps={{ style: { padding: 16 } }}>
				<DialogTitle>Reset your password</DialogTitle>
				<DialogContent>
					<Typography>
						Enter your email below and we'll send you a link to reset your password.
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
					{errorMessage}
				</DialogContent>
				<DialogActions>
					<Button color='error' variant='outlined' onClick={closeModalHandler}>
						Cancel
					</Button>
					<LoadingButton
						type='submit'
						variant='contained'
						color='primary'
						loading={loading}
						onClick={handleSubmit(passwordResetHandler)}
					>
						Send Link
					</LoadingButton>
				</DialogActions>
			</Dialog>
			<Notification isOpen={openNotification} handleClose={closeNotification} alertType='info'>
				Reset email send. Check your inbox.
			</Notification>
		</>
	);
};

export default ResetPasswordModal;
