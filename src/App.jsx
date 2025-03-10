import './App.css'
import Article from './components/Article'
import Footer from './components/Footer'
import Header from './components/Header';
import NavBar from './components/NavBar';
import image from "./assets/blog-image-1.jpg";
import image2 from "./assets/blog-image-2.jpg";

function App() {
  return (
    <div>
      <header>
        <h1 className="header-title">Sartre's List</h1>
        <h2>Better-Dressed People</h2>
        <NavBar />
      </header>

      <Article 
        title="On the Street in Brooklyn"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi, amet nihil, magnam dolorem corporis consequuntur officia doloribus laboriosam quae, sapiente at quia vero! Pariatur recusandae repudiandae nisi illo ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi, amet nihil, magnam dolorem corporis consequuntur officia doloribus laboriosam quae, sapiente at quia vero! Pariatur recusandae repudiandae nisi illo ex. "
        date="11/12/20"
        img={image}
      />
      <Article
        title="Vintage in Vogue"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi, amet nihil, magnam dolorem corporis consequuntur officia doloribus laboriosam quae, sapiente at quia vero! Pariatur recusandae repudiandae nisi illo ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi, amet nihil, magnam dolorem corporis consequuntur officia doloribus laboriosam quae, sapiente at quia vero! Pariatur recusandae repudiandae nisi illo ex. "
        date="11/11/20"
        img={image2}
      /> 
      <Footer />
    </div>
  )
}

export default App

