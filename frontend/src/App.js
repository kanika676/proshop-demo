import { Container } from "react-bootstrap"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

import React from 'react'

const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
      <Container>
    <HomeScreen></HomeScreen>
    </Container>
    </main>
    <Footer></Footer>
    </>
  )
};

export default App
