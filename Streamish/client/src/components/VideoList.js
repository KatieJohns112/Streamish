import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllWithComments } from "../modules/videoManager";



const VideoList = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getAllWithComments().then(videos => setVideos(videos));
    };

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <><form className="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search"></input>
            <button type="submit" placeholder="Search.."></button>
        </form><div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div></>
    );
};

export default VideoList;