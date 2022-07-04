import { ChakraProvider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { theme } from '../styles/theme'

const Home: NextPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <h1>DashGo</h1>
    </ChakraProvider>
  )
}

export default Home
