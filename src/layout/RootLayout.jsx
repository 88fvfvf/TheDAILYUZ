import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

const RootLayout = ({ children }) => {


    return (
        <>
            <Header  />
            <Header />
            <Header />
            <main>
                { children }
            </main>
            <Footer/>
        </>
    )
}

export default RootLayout