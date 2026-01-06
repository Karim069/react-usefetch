import useFetch from "../hooks/useFetch";
import "./Photos.css";

const Photos = () => {
  const { data, loading, error } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  if (loading) {
    return <div className="center">Loading...</div>;
  }

  if (error) {
    return <div className="center error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Rick & Morty Characters</h1>

      <div className="grid">
        {data.results.slice(0, 8).map((char) => (
          <div className="card" key={char.id}>
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
            <p>{char.status} • {char.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
