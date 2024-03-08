import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { _id, previewImg, title, year, length } = movie;
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center pt-3">
        <img className="rounded-t-lg" src={previewImg} alt={title} />
      </div>
      <div className="p-5">
        <Link to={`/movies/${_id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>

        <span className="mr-4">{year}</span>
        <span>{length}</span>
      </div>
    </div>
  );
};
export default MovieCard;