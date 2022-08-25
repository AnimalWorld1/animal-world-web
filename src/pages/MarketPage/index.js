import React from "react";
import "@neftyblocks/market";

import "./index.scss";

export default function MarketPage({}) {
  return (
 <div className="packs-page">
      <div className="drops-page">
        <div className="drops-page__container">
          <neftyblocks-market
            collection="animalworld1"
            limit="12"
          ></neftyblocks-market>
        </div>
      </div>
      </div>
  );
}
