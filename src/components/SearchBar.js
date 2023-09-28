import "../App.css"
export default function SearchBar({
  handleSubmit,
  value,
  isLoading,
  onChange,
}) {
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
        className="input"
          value={value}
          disabled={isLoading}
          onChange={onChange}
          placeholder="search.."
        />
        <input className="input2" value="search" type="submit" disabled={isLoading} />
      </form>
    </div>
  );
}
