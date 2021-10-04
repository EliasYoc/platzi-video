import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import { connect } from "react-redux";
import { deleteFavorite, setFavorite } from "../actions";
import deleteIcon from "../assets/static/014.png";
const CarouselItem = (props) => {
  const { id, title, cover, contentRating, duration, year, isList } = props;
  const handleFavorites = () => {
    props.setFavorite({ id, title, cover, contentRating, duration, year });
  };
  const deleteFromFavorite = () => {
    props.deleteFavorite(id);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />

          {isList ? (
            <img
              onClick={deleteFromFavorite}
              className="carousel-item__details--img"
              src={deleteIcon}
              alt="Delete Icon"
            />
          ) : (
            <img
              onClick={handleFavorites}
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} minutos`}</p>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};
export default connect(null, mapDispatchToProps)(CarouselItem);
