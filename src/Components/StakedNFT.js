import React, { useState, useEffect } from "react";
import NFTCard from './NFTCard'
import Pagination from "./Pagination";
import PaginationBtn from "./PaginationBtn";

function StakedNFT(props) {
  const [totalPage, setTotalPage] = useState(null);
  const [page, setPage] = useState(0);
  const [currentPageAsset, setCurrentPageAsset] = useState([]);
  useEffect(() => {
    setTotalPage(parseInt(props.assets.length / props.perPage));
    setCurrentPageAsset(
        props.assets.slice(page * props.perPage, props.perPage * (page + 1))
      );
  }, []);
  useEffect(() => {
    setCurrentPageAsset(
      props.assets.slice(page * props.perPage, props.perPage * (page + 1))
    );
  }, [page]);
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div style={{ margin: "2%" }}>
      Staked NFT
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {currentPageAsset && currentPageAsset.map((i) => <NFTCard data={i} type={"Un-Stake Asset"} handler={props.handler} w_type={props.w_type} />)}
        <Pagination
          renderComponent={PaginationBtn}
          changePage={changePage}
          total={totalPage}
        />
      </div>
    </div>
  );
}


export default StakedNFT
