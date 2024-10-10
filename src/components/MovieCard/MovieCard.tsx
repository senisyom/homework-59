import React, { useEffect } from "react";

interface Props {
  title: string;
  id: string;
  onDelete: (id: string) => void;
  value: string;
  onChange: (id: string, newValue: string) => void;
}

const MovieCard: React.FC<Props> = React.memo(
  ({ title, onDelete, id }) => {
    useEffect(() => {
      console.log("[MovieCard] (useEffect) - mount/update");
    }, []);

    console.log("[MovieCard render");

    return (
      <div className="">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={title}
            aria-label={title}
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => onDelete(id)}
          >
            X
          </button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.title === nextProps.title && prevProps.value === nextProps.value
    );
  }
);

export default MovieCard;
