// src/TourList.js
import Tour from "./components/Tour";

const TourList = (props) => {
  const { tours } = props;
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>{
        tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
      })}
      </div>
    </section>
  );
};

export default TourList;
