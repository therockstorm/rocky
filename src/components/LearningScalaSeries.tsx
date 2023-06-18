import { BlogSeries } from "@/components/BlogSeries";

export function LearningScalaSeries(): React.JSX.Element {
  return (
    <BlogSeries
      options={[
        {
          name: "Scala Learning Resources",
          path: "/blog/scala-learning-resources",
        },
        {
          name: "Scala: The Good Parts",
          path: "/blog/scala-the-good-parts",
        },
        {
          name: "Scala Best Practices",
          path: "/blog/scala-best-practices",
        },
      ]}
      title="Learning Scala"
    />
  );
}
