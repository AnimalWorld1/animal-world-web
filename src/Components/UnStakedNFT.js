import React, { useState, useEffect } from "react";
import NFTCard from "./NFTCard";
import Pagination from "./Pagination";
import PaginationBtn from "./PaginationBtn";

function UnStakedNFT(props) {
  const [totalPage, setTotalPage] = useState(null);
  const [page, setPage] = useState(0);
  const [currentPageAsset, setCurrentPageAsset] = useState([]);
  useEffect(() => {
    const asL = props.unstaked_data.length/props.perPage;
    setTotalPage(parseInt(props.unstaked_data.length / props.perPage));
    setCurrentPageAsset(
        props.unstaked_data.slice(page * props.perPage, props.perPage * (page + 1))
      );
  }, []);
  useEffect(() => {
    setCurrentPageAsset(
      props.unstaked_data.slice(page * props.perPage, props.perPage * (page + 1))
    );
  }, [page]);
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div style={{ margin: "2%" }}>
      UnStaked NFT
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {currentPageAsset && currentPageAsset.map((i) => <NFTCard data={i} type={"Stake Asset"} handler={props.handler} w_type={props.w_type} />)}
        {/* <Pagination pageSize="10" component={NFTCard} dataList={props.assets} /> */}
        <Pagination
          renderComponent={PaginationBtn}
          changePage={changePage}
          total={totalPage}
        />
      </div>
    </div>
  );
}

export default UnStakedNFT;
