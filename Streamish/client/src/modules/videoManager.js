const baseUrl = '/api/video';

export const getAllVideos = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};
export const getAllWithComments = () => {
    return fetch(baseUrl + "/GetWithComments", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
}
export const searchComments = () => {
    return fetch(baseUrl + "/Search", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
}

