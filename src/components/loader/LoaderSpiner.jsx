import React from "react";
import { ThreeDots } from "react-loader-spinner";

function LoaderSpiner() {
  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="#016BE6"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}

export { LoaderSpiner };
