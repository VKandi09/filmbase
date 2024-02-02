import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieCard } from '../components';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';

export const Search = ({apiPath}) => {
  const [ searchParams ]  = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);
  const pageTitle = useTitle(`Search result for ${queryTerm}`);

  useEffect(() => {
    document.title = `Search result for ${queryTerm} / Cinemate`
  },[]);


  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-grey-700 dark:text-white'>{ movies.length === 0 ? `No Results found for '${queryTerm}'` : `Results for '${queryTerm}'`}</p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div  className='flex justify-start flex-wrap'>
          { movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}
