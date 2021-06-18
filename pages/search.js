import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchHeader from '../components/SearchHeader';
import Response from '../Response';
import SearchResults from '../components/SearchResults';

function Search({ results }) {
  const router = useRouter();
  // console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <SearchHeader term={router.query.term} />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export const getServerSideProps = async (ctx) => {
  const useDummyData = false;
  const startIndex = ctx.query.start || '0';
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${ctx.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};
