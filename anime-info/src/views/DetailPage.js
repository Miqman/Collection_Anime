import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_ANIME } from "../queries/animeList";

export default function DetailPage() {
  const { id } = useParams();
  const [nimeAdded, setNimeAdded] = useState([]);
  // const [newNime, setNewNime] = useState("");

  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: {
      mediaId: id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  function addCollect() {
    // if (localStorage.nimeAdded.title.romaji === data.Media.title.romaji) {
    //   <p>have been added</p>;
    // }
    nimeAdded.push(data.Media);
    // localStorage.setItem("nimeAdded", JSON.stringify(nimeAdded));
    // setNimeAdded("");
    console.log(nimeAdded);
  }

  console.log(data, "<<<");
  return (
    <>
      <div className="bg-slate-200 overflow-auto pb-10 h-full">
        <div className="overflow-hidden">
          <img src={data.Media.bannerImage} alt=""></img>
        </div>
        <div className="px-5">
          <div className="flex -mt-16">
            <div className="mr-5">
              <span className="h-44 w-40">
                <img
                  className="h-40 w-32 object-cover rounded-full bg-white p-1"
                  src={data.Media.coverImage.large}
                  alt=""
                ></img>
              </span>
              <div
                className="p-1 bg-cyan-500 cursor-pointer rounded-lg text-sm mt-5 text-center text-white font-semibold text-[12px]"
                onClick={addCollect}
              >
                Add to collection
              </div>
            </div>

            <div className="mt-[70px]  w-full">
              <h1 className="font-bold text-slate-600 text-[18px] mb-4">
                {data.Media.title.romaji}
              </h1>

              <span className="text-[14px] text-slate-600">
                {data.Media.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
