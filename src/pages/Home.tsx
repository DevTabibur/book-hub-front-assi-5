
import AllBooks from "../components/AllBooks"
import RootLayout from "../components/Layout/RootLayout"
import Banner from "../components/banner"

const Home = () => {


  return (
    <>
      <RootLayout>
        <Banner />
        <AllBooks />
      </RootLayout>

    </>
  )
}

export default Home