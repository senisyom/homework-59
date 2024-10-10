interface Props {
  title: string;
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>; 
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const MovieInput: React.FC<Props> = ({ title, onClick, value, onChange }) => {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={title}
          aria-label={title}
          aria-describedby="button-addon2"
          value={value}
          onChange={onChange}
        />
        <button
          onClick={onClick}
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Add new movie
        </button>
      </div>
    </div>
  );
};

export default MovieInput;
