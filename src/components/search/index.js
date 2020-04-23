/** @jsx jsx */
import algoliasearch from "algoliasearch/lite"
import { useState, useEffect, createRef } from "react"
import {
  connectStateResults,
  Hits,
  Index,
  InstantSearch,
} from "react-instantsearch-dom"
import { jsx, Styled } from "theme-ui"
import SearchByAlgolia from "../SearchByAlgolia"
import { PostHit } from "./PostHit"
import { Input } from "./Input"

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`]
  const detectClickOutside = (event) =>
    ref.current && !ref.current.contains(event.target) && handler()
  useEffect(() => {
    for (const event of events)
      document.addEventListener(event, detectClickOutside)
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside)
    }
  })
}

export default function Search({ indices, collapse }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  useClickOutside(ref, () => setFocus(false))
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
      <Styled.div
        sx={{
          display: query.length > 0 && focus ? `grid` : `none`,
          bg: "background",
          position: "absolute",
          left: "50%",
          top: "100px",
          zIndex: 2,
          width: "80vw",
          maxWidth: "30em",
          boxShadow: (theme) => `0 0 5px 0 ${theme.colors.muted}`,
          borderRadius: "5px",
          p: 2,
          ul: { listStyle: "none", p: 0 },
        }}
      >
        {indices.map(({ name, title }) => (
          <Index key={name} indexName={name}>
            <header>
              <Styled.h3 sx={{ mt: 2 }}>{title}</Styled.h3>
            </header>
            <Styled.hr sx={{ mb: 1 }} />
            <Results>
              <Hits hitComponent={PostHit(() => setFocus(false))} />
            </Results>
          </Index>
        ))}
        <Styled.a href="https://algolia.com" sx={{ mt: -1, textAlign: `end` }}>
          <SearchByAlgolia sx={{ width: `6em` }} />
        </Styled.a>
      </Styled.div>
    </InstantSearch>
  )
}
