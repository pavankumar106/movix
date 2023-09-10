import React, { useState } from "react";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const api_key = "9647edf2e16e10bf8133acf7cb83f6c5";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const onTabChange = (tab) => {
    setEndpoint(tab === "movies" ? "movie" : "tv");
  };
  const { data, loading } = useFetch(`/${endpoint}/popular?api_key=${api_key}`);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["movies", "TV shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
