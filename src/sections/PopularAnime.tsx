import { useQuery } from "react-query";
import animeApi from "../utils/axios";
import AnimeCard from "../components/AnimeCard";
import "./PopularAnime.css";

const PopularAnime = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: "popularAnime",
    queryFn: async () => {
      const res = await animeApi.get("/top-airing");
      const data = res.data;
      return data;
    },
    retry: 2,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(data);
  // create two scroll buttons of left and right side to scroll the component left and right 100 scroll 

  return (
    <div className="popular-container">
      <div className="scroll-btn left">
        <i className="fas fa-chevron-left"></i>
      </div>
      {data?.results.map((anime: any, i: number) => {
        return <AnimeCard key={anime?.id} data={anime} isNumbered={true} tag={i + 1}/>;
      })}
      <div className="scroll-btn right">
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default PopularAnime;
