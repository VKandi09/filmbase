import { Link } from 'react-router-dom';
import Backup from '../assets/images/backup.png';

export const MovieCard = ({movie}) => {
  const { id, title, overview, poster_path } = movie;
  const image = (poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : Backup);

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`movie/${id}`}>
            <img className="rounded-t-lg" src={image} alt="poster" />
        </Link>
        <div className="p-5">
            <Link to={`movie/${title}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        </div>
    </div>
  )
}
