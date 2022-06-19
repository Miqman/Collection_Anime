import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_ANIMES_LIST, TRENDING_ANIME } from "../queries/animeList";

export default function HomePage() {
  const navigate = useNavigate();

  const [next, setNext] = useState(1);
  const [previous, setPrevious] = useState(0);

  const { loading, error, data } = useQuery(TRENDING_ANIME, {
    variables: {
      perPage: 4,
      sort: "TRENDING_DESC",
    },
  });

  const {
    loading: loadMain,
    error: errMain,
    data: dataMain,
  } = useQuery(GET_ANIMES_LIST, {
    variables: {
      page: localStorage.next,
      perPage: 10,
      sort: "SCORE_DESC",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (loadMain) return <p>Loading...</p>;
  if (errMain) return <p>Error :(</p>;

  function goNext() {
    setNext(next + 1);
    localStorage.next = next + 1;
    console.log(next);
  }
  function goPrevious() {
    if (next >= 1) {
      setNext(next - 1);
      localStorage.next = next - 1;
      console.log(next, "====");
    } else {
      setNext(1);
      localStorage.next = 1;
    }
  }
  function goDetail(id) {
    navigate(`/detail/${id}`);
  }

  return (
    <>
      <div className="flex flex-col pt-2 px-4 overflow-auto pb-10 h-full">
        <div className="mx-2 pb-2 flex justify-between">
          <h1 className="font-bold">Trending Now</h1>
          <p className="text-[12px] cursor-pointer align-baseline leading-7">
            View All
          </p>
        </div>

        <div className="flex flex-row justify-evenly">
          {data.Page.mediaTrends.map((el) => (
            <div className="h-44 w-20 mx-2" key={el.media.id}>
              <div
                className="h-32 w-20 overflow-hidden rounded-t shadow-sm cursor-pointer"
                onClick={() => goDetail(el.media.id)}
              >
                <img src={el.media.coverImage.large} alt=""></img>
              </div>
              <div className="h-10 font-sans antialiased tracking-tight mt-[-10px]">
                <p className="text-sm break-words truncate">
                  {el.media.title.romaji}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-2 flex justify-between">
          <h3 className="font-bold">Top 100 Anime</h3>
          <p className="text-[12px] cursor-pointer align-baseline leading-7">
            View All
          </p>
        </div>

        {dataMain.Page.media.map((el) => (
          <div
            className="mt-2 mx-1 my-2 h-auto w-auto bg-white p-3 rounded cursor-pointer shadow-md"
            key={el.id}
            onClick={(e) => {
              e.preventDefault();
              goDetail(el.id);
            }}
          >
            <div className="flex justify-between">
              <div className="flex">
                <div className="h-20 w-16 overflow-hidden rounded mr-2">
                  <img src={el.coverImage.large} alt=""></img>
                </div>
                <div className="flex flex-col">
                  <p className="mx-1 mb-1 font-bold text-slate-600 text-[15px]">
                    {el.title.romaji}
                  </p>
                  <div className="flex flex-wrap">
                    {el.genres.map((genre, index) => (
                      <div
                        className={`bg-cyan-400 text-white py-0 px-2 mt-1 rounded-full text-[9px] font-bold mx-1`}
                        key={index}
                      >
                        <p>{genre}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end w-[100px]">
                <h1>{el.averageScore} %</h1>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}

        <div className="mt-5">
          <button
            onClick={goPrevious}
            className="py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </button>

          <button
            onClick={goNext}
            className="py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
