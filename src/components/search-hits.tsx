import { format, parseISO } from "date-fns";
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
            <li key={hit.objectID}>
              <div className="container flex mx-8 my-2">
                <Link href={hit.slug} passHref>
                  {hit.title}
                </Link>
                <div className="ml-2 text-base text-gray-700">
                  {format(parseISO(hit.date), "LLLL d, yyyy")}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(SearchHits);
