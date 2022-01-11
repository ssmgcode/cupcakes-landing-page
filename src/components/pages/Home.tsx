import HomeBanner from '../sections/HomeBanner'
import Services from './Services'
import Cupcakes from './Cupcakes'

const Home = (): JSX.Element => {
  return (
    <>
      <HomeBanner />
      <Cupcakes request="cupcakes?flavor_like=fresa" />
      <Services />
    </>
  )
}

export default Home
