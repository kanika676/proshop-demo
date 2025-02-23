import { Container } from "react-bootstrap"
import Header from "./components/Header";
import Footer from "./components/Footer";

import React from 'react'

const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
      <Container>
    <h1>Welcome to proshop</h1>
    </Container>
    </main>
    <Footer></Footer>
    </>
  )
};

export default App
