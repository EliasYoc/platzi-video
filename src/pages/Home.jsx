import { connect } from "react-redux";
import "../assets/styles/App.scss";
import Carousel from "../componentes/Carousel";
import CarouselItem from "../componentes/CarouselItem";
import Categories from "../componentes/Categories";
import Search from "../componentes/Search";

// const API = "http://localhost:3000/initialState";

const Home = ({ myList, trends, originals }) => {
  // console.log(props);
  // const videos = useFetchState(API);
  return (
    <>
      <Search />
      {myList?.length > 0 && (
        <Categories title="mi lista">
          <Carousel>
            {myList?.map((vid) => (
              <CarouselItem isList key={vid.id} {...vid} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencia">
        <Carousel>
          {trends?.map((vid) => (
            <CarouselItem key={vid.id} {...vid} />
          ))}
        </Carousel>
      </Categories>
      <Categories title={`Originals (${originals?.length})`}>
        <Carousel>
          {originals?.map((vid) => (
            <CarouselItem key={vid.id} {...vid} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};
const mapStateToProps = (state) => {
  // console.log("ownProps", ownProps);
  console.log("mapStateToProps", state);
  return {
    myList: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
//para conectarme a redux y traer el store como props
export default connect(mapStateToProps, null)(Home);
