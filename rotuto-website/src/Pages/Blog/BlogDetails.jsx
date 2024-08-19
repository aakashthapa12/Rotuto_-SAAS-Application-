import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  async function getBlogDetails() {
    try {
      let response = await axios.get(`/api/v1/blog/getoneblog/${blogId}`);
      setBlog(response.data.blog);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBlogDetails();
  }, [blogId]);

  return (
    <div className="relative mb-12 lg:mx-auto mx-8 max-w-screen-xl">
      {blog ? (
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <button
            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg z-10"
            onClick={() => navigate('/blogs')}
          >
            Back
          </button>
          <div className="w-full lg:h-60vh overflow-hidden rounded-lg mb-6 mt-12">
            <img
              src={blog.image?.url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-4">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">{blog.title}</h1>
            <div
              className="text-lg mb-4 text-justify"
              dangerouslySetInnerHTML={{ __html: blog.blog_content }}
            ></div>
            <p className="text-gray-600">
              Date:{" "}
              {new Date(blog.createdAt).toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
            <p className="text-gray-600 mt-2">
              Tags: {blog.tags.map((tag) => `#${tag}`).join(", ")}
            </p>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default BlogDetails;
