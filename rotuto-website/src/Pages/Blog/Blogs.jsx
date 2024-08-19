import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/v1/blog/getallblog");
        // console.log(response.data);
        setBlogs(response?.data?.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="mb-12 lg:mx-auto mx-8 max-w-screen-xl">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="lg:text-7xl lg:mb-10 text-4xl max-sm:text-2xl mb-4 lg:mt-6 mt-4 font-bold text-blue-900">
          From our Blog
        </h1>
        <p className="max-w-3xl lg:text-xl text-blue-800 font-semibold mx-4 lg:mx-auto mb-8">
          Explore the potential of Business AI on our dynamic AI blog, where we
          reveal the newest advances, innovations, and tactics for using
          artificial intelligence to transform your business operations and
          maintain a competitive edge in the market.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="rounded-3xl p-6 shadow-md bg-gradient-to-b from-blue-900 to-blue-950 flex items-center justify-center"
          >
            <div className="card-body flex flex-col items-center">
              <img src={blog.image.url} alt={blog.title} className="w-full h-48 object-cover rounded-t-3xl" />
              <h2 className="text-2xl font-bold text-white mt-4">{blog.title}</h2>
              <p className="text-white mt-2" dangerouslySetInnerHTML={{ __html: `${blog.blog_content.substring(0, 150)}...` }}></p>
              <button 
                className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-full mt-4 border-black border shadow-lg shadow-black"
                onClick={() => navigate(`/blogdetails/${blog._id}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
