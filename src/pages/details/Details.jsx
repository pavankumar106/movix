import React from "react";
import { useParams } from "react-router-dom";

import "./details.scss";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendations";

const api_key = "9647edf2e16e10bf8133acf7cb83f6c5";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(
    `/${mediaType}/${id}/videos?api_key=${api_key}`
  );
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits?api_key=${api_key}`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
