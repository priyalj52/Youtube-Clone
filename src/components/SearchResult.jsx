import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchSearchResultFromAPI } from "../context/api";
import { Context } from "../context/context"

import SearchResultVideoCard from "./SearchResultVideoCard";
import SideBar from "./SideBar";

const SearchResult = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults();
    }, [searchQuery]);

    const fetchSearchResults = () => {
        setLoading(true);
        fetchSearchResultFromAPI(searchQuery).then((res)=>res.json())
        .then((res) => {
            console.log(res);
            setResult(res?.contents);
            setLoading(false);
        });
    };

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <SideBar/>
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
