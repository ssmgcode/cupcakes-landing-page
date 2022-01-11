import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './sections/Header/Header'
import Home from './pages/Home'
import Cupcakes from './pages/Cupcakes'
import Services from './pages/Services'
import Footer from './sections/Footer/Footer'
import styles from './App.module.css'

const App = (): JSX.Element => (
  <ChakraProvider>
    <Router>
      <div className={styles.div}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cupcakes"
              element={<Cupcakes title request="cupcakes" />}
            />
            <Route path="/servicios" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ChakraProvider>
)

export default App
