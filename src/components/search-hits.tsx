import Link from "next/link";
import { BasicDoc, SearchResults, SearchState } from "react-instantsearch-core";
import { connectStateResults } from "react-instantsearch-dom";

interface Props {
  readonly searchState: SearchState;
  readonly searchResults: SearchResults<BasicDoc>;
}

function SearchHits({ searchState, searchResults }: Props) {
  const valid = (searchState.query?.length ?? 0) >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && valid && <p>No results found.</p>}
      {searchResults?.hits.length > 0 && valid && (
        <ol>
          {searchResults.hits.map((hit) => (
            <li className="ml-8 mr-3" key={hit.objectID}>
              <div className="container flex my-2">
                <Link href={hit.slug} passHref>
                  {hit.title}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(SearchHits);
