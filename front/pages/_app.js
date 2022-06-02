import { ChakraProvider, Grid, GridItem, localStorageManager } from '@chakra-ui/react'
import theme from '../theme'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme} colorModeManager={localStorageManager}>
      <Grid height={'100vh'} templateRows={'13% auto'}>
        <GridItem>
          <Header />
        </GridItem>
        <GridItem>
          <Component {...pageProps} />
        </GridItem>
      </Grid>
    </ChakraProvider>
  )
}

export default MyApp