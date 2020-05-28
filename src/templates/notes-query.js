import React from "react"
import Notes from "../components/notes/notes"

const NotesPage = ({
  pageContext: { groupedNotes, urls, breadcrumbs, siteTitle },
  ...props
}) => (
  <Notes
    directories={groupedNotes}
    files={urls}
    breadcrumbs={breadcrumbs}
    siteTitle={siteTitle}
    {...props}
  />
)

export default NotesPage
