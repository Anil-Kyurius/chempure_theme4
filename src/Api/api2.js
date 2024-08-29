import axios from "axios";

export default axios.create({
// baseURL: "http://192.168.0.164/Chempure-prod/Website_Api",
baseURL: `${process.env.NEXT_PUBLIC_REACT_APP_API}Website_Api`,
// baseURL: "https://chempure.in/chempureApi/Website_Api",


});

// baseURL: "http://13.127.253.200/Website_Api",
// baseURL: "https://chempure.in/chempureApi/Website_Api",
