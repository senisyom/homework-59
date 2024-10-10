interface Props {
  title: string;
  onClick: React.MouseEventHandler
}

const MovieInput: React.FC<Props> = ({ title, onClick }) => {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={title}
          aria-label={title}
          aria-describedby="button-addon2"
        />
        <button
          onClick={onClick}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Add new movie
        </button>
      </div>
    </div>
  );
};

export default MovieInput;
