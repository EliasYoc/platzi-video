import Header from "./componentes/Header";
import "./assets/styles/App.scss";
import Search from "./componentes/Search";
import Categories from "./componentes/Categories";
import Carousel from "./componentes/Carousel";
import CarouselItem from "./componentes/CarouselItem";
import Footer from "./componentes/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Categories>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
}

export default App;
