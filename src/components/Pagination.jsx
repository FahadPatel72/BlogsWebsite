import React, { useContext } from "react";
import "./Pagination.css";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, pageHandle, totalPage } = useContext(AppContext);

  return (
    <div className="footer">
      <div className="foot-btns">
        {page > 1 && (
          <button onClick={() => pageHandle(page - 1)}>Previous</button>
        )}

        {page < totalPage && (
          <button onClick={() => pageHandle(page + 1)}>Next</button>
        )}
      </div>

      <p className="total-page">
        Page {page} of {totalPage}
      </p>
    </div>
  );
};

export default Pagination;
