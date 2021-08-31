import React from "react";

import { useGlobalContext } from "../context/context";

const Stories = () => {
  const { loading, hits,removeItemHandle } = useGlobalContext();
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((item) => {
        const { objectID, title, author, points, num_comments, url } = item;
        
        return (
          <article key={objectID} className="story">
            <h4>{title}</h4>
            <p className="info">
              {points} points by <span>{author} |</span> {num_comments} comments
            </p>
            <div>
              <a href={url} className="read-link" target="_blank">
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => removeItemHandle(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
