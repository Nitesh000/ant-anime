import "./AnimeCard.css";

type AnimeCardProps = {
  data: any | undefined;
  isNumbered: boolean;
  tag: number;
};

const AnimeCard = ({ data, isNumbered , tag}: AnimeCardProps) => {
  console.log(isNumbered);
  return (
    <div className="container">
      <img src={data?.image} alt={data?.result?.title} />
      {isNumbered && <div className="tag">
        <span className="number">{tag}</span>
      </div>}
      <h4>{data?.title}</h4>
    </div>
  );
};

export default AnimeCard;
