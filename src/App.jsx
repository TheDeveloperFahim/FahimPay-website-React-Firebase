import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Services from "./components/Services/Services";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error";
import { Route, Switch } from "react-router";

export default function App() {
  return (
    <>
      <Navbar />
      {/* Pages */}
      <Switch>
        <Route exact path="/">
          <Hero />
          <Features />
          <About />
          <Services />
          <ContactForm />
        </Route>
        <Route exact path="/Services" component={Services} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={ContactForm} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}
