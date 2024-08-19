import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Support = () => {
  const [supportData, setSupportData] = useState(null);
  const [formattedUpdatedAt, setFormattedUpdatedAt] = useState(null);
  useEffect(() => {
    // Fetch data from the API
    const fetchTermsData = async () => {
      try {
        const response = await axios.get("/api/v1/users/settings");
        // console.log(response.data.settings);
        const data = response?.data?.settings?.supportContent;
        // Update state with fetched data
        setSupportData(data);
        if (data && data.updatedAt) {
          // Format the updatedAt date
          const updatedAt = new Date(data.updatedAt);
          const formattedDate = updatedAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          setFormattedUpdatedAt(formattedDate);
        } else {
          setFormattedUpdatedAt("Not Available");
        }
      } catch (error) {
        console.error("Error fetching terms and conditions data:", error);
      }
    };

    fetchTermsData();
  }, []);
  const addStylesToHTML = (content) => {
    if (!content) return "";
    content = content.replace(
      /<p>/g,
      '<p style=" text-transform: capitalize;">'
    );
    content = content.replace(
      /<ul>/g,
      '<ul style="list-style-type: disc; margin-left: 2.5rem; margin-bottom: 1rem;">'
    );
    content = content.replace(/<li>/g, '<li style="margin-bottom: 0.5rem;">');
    content = content.replace(
      /<strong>/g,
      '<strong style="font-weight: bold; font-size: 1.2em; display: block;">'
    );
    return content;
  };
  return (
    <section className="my-8 mx-8 lg:mx-32">
      <div className="bg-white rounded-3xl py-8 px-4 lg:px-16">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold mb-3 max-sm:text-xl">
                Support
              </h2>
              <p className="text-xl">
                {" "}
                Last Updated: {formattedUpdatedAt || "Loading..."}
              </p>
            </div>
          </div>
          <div className="mt-4 row">
            <div className="col-12">
              {supportData ? (
                <div
                  className="terms-content"
                  dangerouslySetInnerHTML={{
                    __html: addStylesToHTML(supportData.content),
                  }}
                />
              ) : (
                <p>Loading terms And Condition Content content...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
