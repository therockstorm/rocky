import algoliasearch from "algoliasearch/lite";
import React from "react";
import { InstantSearch } from "react-instantsearch-dom";

import SearchBox from "./search-box";
import SearchHits from "./search-hits";

interface Props {
  readonly index: string;
}

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ?? ""
);

export function Search({ index }: Props): JSX.Element {
  return (
    <InstantSearch searchClient={searchClient} indexName={index}>
      <SearchBox />
      <SearchHits />
    </InstantSearch>
  );
}
