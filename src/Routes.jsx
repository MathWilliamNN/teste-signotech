import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import NavBar from "./components/Navbar"
import MainContainer from "./components/MainContainer"



const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainContainer>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="*" element={<h1> not found </h1>} /> */}
                </Routes>
            </MainContainer>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default AppRoutes