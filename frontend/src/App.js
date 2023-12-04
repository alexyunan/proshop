import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome To ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
