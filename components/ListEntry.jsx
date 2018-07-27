import React from "react";

const ListEntry = ({ title, description, id }) => {
  return (
    <div className="entry">
      <h2 className="title">{title}</h2>
      <div className="desc">{description}</div>
      <style jsx>
        {`
          .entry {
            border: solid #eaebef 1.5px;
            border-radius: 5px;
            text-align: center;
            margin-bottom: 1rem;
            padding-bottom: 3rem;
            font-family: sans-serif;
          }
          .title {
            color: #3385ff;
            margin-bottom: 0.5rem;
          }
          ,
          .desc {
            font-family: sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default ListEntry;
