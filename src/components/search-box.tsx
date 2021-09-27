import { connectSearchBox } from "react-instantsearch-dom";

import { Search } from "./icons";

interface Props {
  readonly refine: (value: string) => void;
}

export function SearchBox({ refine }: Props): JSX.Element {
  return (
    <form className="flex items-center my-4" role="search">
      <Search className="mr-3 h-6 w-6" />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="search"
        onChange={(e) => refine(e.currentTarget.value)}
        placeholder="Search"
        type="search"
      ></input>
    </form>
  );
}

export default connectSearchBox(SearchBox);
