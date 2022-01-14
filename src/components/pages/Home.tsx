import HomeBanner from '../sections/HomeBanner'
import Services from './Services'
import Cupcakes from './Cupcakes'

const Home = (): JSX.Element => {
  return (
    <>
      <HomeBanner />
      <Cupcakes isAtHome />
      <Services />
    </>
  )
}

export default Home
