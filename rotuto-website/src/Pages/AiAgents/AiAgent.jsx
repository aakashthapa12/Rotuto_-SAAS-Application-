import React from "react";
import { useNavigate } from "react-router-dom";

const AiAgent = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      title: "AI Customer Service Assistant",
      description:"Rotuto's Customer Service Agent is an Al-powered solution designed to transform how businesses handle customer interactions. Our service allows you to create a virtual assistant that can answer customer queries, generate leads, and collect feedback, all based on your specific business information. By automating these crucial tasks, businesses can provide consistent, round-the-clock support while significantly reducing costs and freeing up human resources for more complex issues.",
      path:"/agent/customer-service",
    },
    {
      id: 2,
      title: "AI-Powered Resume Screening",
      description:"Rotuto's Resume Screening AI Agent is an advanced solution designed to revolutionize your hiring process. This intelligent tool automatically analyzes and evaluates resumes based on your specific job requirements, saving you countless hours of manual screening. By quickly identifying the most qualified candidates, your organization, ultimately leading to faster and more effective hiring decisions.",
      path:"/agent/resume-screening",
    },
    {
      id: 3,
      title: "AI Appointment Booking",
      description:" Rotuto's Appointment Booking Al Agent is a sophisticated solution designed to revolutionize how spas, salons, and similar businesses manage their scheduling and customer interactions. This Al-powered assistant can answer customer queries, provide information about services and pricing, and seamlessly book appointments. By automating these crucial tasks, businesses can provide round-the-clock availability, improve customer satisfaction, and increase bookings while reducing the workload on staff.",
      path:"/agent/appointment-booking",
    },
  ];

  return (
    <div className="my-12 lg:mx-auto mx-8 max-w-screen-xl">
      <div className="flex items-center justify-center">
        <h1 className="lg:text-7xl lg:mb-10 text-4xl max-sm:text-2xl mb-8 lg:mt-6 mt-4 font-bold text-blue-900">
          AI Agents
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl p-6 shadow-md bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col justify-between"
          >
            <div className="card-body flex flex-col flex-grow">
              <h2 className="text-white font-bold text-2xl mb-2">{item.title}</h2>
              <p className="text-white mb-4">{item.description}</p>
              <div className="mt-auto flex justify-center">
                <button 
                  className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-full border-black border shadow-lg shadow-black"
                  onClick={() => navigate(item.path)}
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiAgent;
