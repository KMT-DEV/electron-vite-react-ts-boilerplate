import { Box, Paper } from '@mui/material'
import LocaleTypography from '@renderer/locales/components/LocaleTypography'
const Home = () => {

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '400px'
        }}
      >
        <LocaleTypography DictionaryKey="Welcome" variant="h4" color="primary" />
      </Paper>
    </Box>
  )
}

export default Home
