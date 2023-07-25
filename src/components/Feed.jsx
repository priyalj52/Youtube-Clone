import React, { useContext, useEffect } from "react";
import { Context } from "../context/context";
import VideoCard from "./VideoCard";
import SideBar from "./SideBar";

const FeedPage = () => {
  const { loading, res} = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <SideBar />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            Array.isArray(res) &&
            res.map((item) => {
              // Ensure 'item' is an object before accessing the 'video' property
              if (item?.type === "video") {
                return (
                  <VideoCard
                    key={item?.video?.videoId}
                    video={item?.video}
                  />
                );
              }
              return null; // Skip rendering for non-video items
            })}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
