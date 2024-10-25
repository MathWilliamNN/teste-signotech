import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreatePoll from "./pages/CreatePoll"
import AnswerPoll from "./pages/AnswerPoll"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"



const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainContainer>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/CreatePoll" element={<CreatePoll />} />
                    <Route path="/AnswerPoll/:id" element={<AnswerPoll />} />

                    {/* <Route path="*" element={<h1> not found </h1>} /> */}
                </Routes>
            </MainContainer>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default AppRoutes