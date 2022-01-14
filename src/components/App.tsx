import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Header from './sections/Header/Header'
import Home from './pages/Home'
import Cupcakes from './pages/Cupcakes'
import Services from './pages/Services'
import Footer from './sections/Footer/Footer'
import styles from './App.module.css'

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
})

const App = (): JSX.Element => (
  <ChakraProvider theme={theme}>
    <Router>
      <div className={styles.div}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cupcakes" element={<Cupcakes title />} />
            <Route path="/servicios" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ChakraProvider>
)

export default App
