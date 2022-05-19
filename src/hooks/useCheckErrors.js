import Box from '@mui/material/Box';

const errorStyle = {
	color: 'error.main',
	marginTop: 1,
	marginLeft: 1,
};

const useCheckErrors = (error) => {
	if (!error) {
		return;
	}
	if (error?.message.includes('auth/wrong-password')) {
		return <Box sx={errorStyle}>Wrong password</Box>;
	}
	if (error?.message.includes('auth/user-not-found')) {
		return <Box sx={errorStyle}>User doesn't exist</Box>;
	}
	if (error?.message.includes('auth/network-request-failed')) {
		return (
			<Box sx={errorStyle}>
				Network request failed. <br /> Check your internet connection.
			</Box>
		);
	}
	if (error?.message.includes('auth/too-many-requests')) {
		return (
			<Box sx={errorStyle}>
				Too many failed attempts. <br /> Try again later or reset your password.
			</Box>
		);
	}
	if (error?.message.includes('email-already-in-use')) {
		return <Box sx={errorStyle}>Email already in use</Box>;
	}
	if (error) {
		console.log(error);
		return <Box sx={errorStyle}>Something went wrong</Box>;
	} else {
		return null;
	}
};

export default useCheckErrors;
