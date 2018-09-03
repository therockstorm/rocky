interface Metadata {
  title: string
  description: string
  siteUrl: string
}

declare const graphql: (query: TemplateStringsArray) => void

declare module 'react-inlinesvg' {
  export default class SVG extends React.Component<{ src: string }, any> {}
}
