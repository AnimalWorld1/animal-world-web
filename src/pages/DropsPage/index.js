import React from "react";
import "@neftyblocks/drops";

import "./index.scss";

export default function DropsPage({}) {
  return (
 <div className="packs-page">
      <div className="drops-page">
        <div className="drops-page__container">
          <neftyblocks-drops
            collection="animalworld1"
            limit="12"
          ></neftyblocks-drops>
        </div>
      </div>
      </div>
  );
}
