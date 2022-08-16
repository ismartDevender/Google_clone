import React from 'react';
import Head from 'next/head';
import Header_search_results from '../components/Header_search_results.js';
import { API_KEY, CONTEXT_KEY } from '../keys.js';
import Response from '../Response';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      {/* Header */}
      <Header_search_results />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || '0';
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // After SERVER side is rendered....... pass the results to the clients
  return {
    props: {
      results: data,
    },
  };
}
