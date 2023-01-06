import { Box, Typography } from '@mui/material';
import { qr } from 'assets';
import StyledImage from 'styles/StyledImage';

const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'lightGrey',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        width={260}
        height={400}
        bgcolor="white"
        borderRadius={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <StyledImage src={qr} alt="qr-img" />
        <Box mx={3}>
          <Typography component={'h1'} fontWeight={700} textAlign="center" color="darkBlue">
            Improve your front-end skills by building projects
          </Typography>
          <Typography fontSize={12} textAlign="center" color="greyishBlue" mt={1}>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
