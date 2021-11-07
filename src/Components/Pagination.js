import React, { useEffect, useState } from "react";
import "../styles/Pagination.css";

function Pagination(props) {
  var data= props.total>0?([0, 1, 2]):([0]);
  const [page, setPage] = useState(data);
  const [currentPage, setCurrentPage] = useState(0);
  const pageclickcallback = (pageNo) => {
    if (pageNo === "Last") {
      pageNo = props.total;
    } else if (pageNo === "First") {
      pageNo = 0;
    }
    let pageDiv;
    if (pageNo < props.total && pageNo > 1) {
      pageDiv = [-1, 0, 1];
    } else if (pageNo === 1) {
      pageDiv = [0, 1, 2];
    } else if (pageNo === props.total && pageNo != 0) {
      pageDiv = [-2,-1,0];
    } else if (pageNo == 0 && props.total==0) {
      pageDiv = [0,];
    }    else {
      pageDiv = [0, 1, 2];
    }
    setPage(pageDiv.map((i) => pageNo + i));
    setCurrentPage(Number(pageNo));
  };
  useEffect(() => {
    props.changePage(currentPage);
  }, [currentPage]);
  return (
    <div className="pagination-container" style={{ padding:"3% 20%", textAlign: "center",}}>
      <div style={{ display: "flex", justifyContent: "center",  }}>
        {props.renderComponent({
          active: currentPage === 0,
          pageclickcallback,
          item: "First",
        })}
        ..
        {page.map(
          (item) =>
            props.renderComponent({
              active: item === currentPage,
              pageclickcallback,
              item,
            })
          // <Pagediv idx={crntpage} pageclickcallback={pageclick} item={item} />
        )}
        ..
        {props.renderComponent({
          active: currentPage === props.total,
          pageclickcallback,
          item: "Last",
        })}
      </div>
    </div>
  );
}

export default Pagination;