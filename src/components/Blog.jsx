import { TriangleAlert } from "lucide-react";

const Blog = () => {
  return (
    <article>
      <div className="flex flex-col items-center justify-center my-40 gap-4">
        <TriangleAlert size={96} />
        <p>Unfortunately, this page is still under development</p>
      </div>
    </article>
  );
};

export default Blog;
