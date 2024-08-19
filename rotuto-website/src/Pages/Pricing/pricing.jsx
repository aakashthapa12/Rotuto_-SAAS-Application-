import { useState, useEffect } from "react";
import axios from "axios";

const Pricing = () => {
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState("");
  const [trialPrice, setTrialPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [agentResponse, settings] = await Promise.all([
          axios.get("/api/v1/agent/"),
          axios.get("/api/v1/users/settings"),
        ]);
        setData(agentResponse.data.data);
        setCurrency(settings.data?.settings?.symbol);
        setTrialPrice(settings.data?.settings?.trialAmount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-12 lg:mx-auto mx-8 max-w-screen-xl">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="lg:text-7xl lg:mb-10 text-4xl max-sm:text-2xl mb-4 lg:mt-6 mt-4 font-bold text-blue-900">
          Pricing
        </h1>
        <p className="max-w-3xl lg:text-xl text-blue-800 font-semibold mx-4 lg:mx-auto mb-8">
          Flexible Pay-As-You-Go Pricing: Only pay for what you use, with no
          long-term commitments. New users start with a {currency}
          {trialPrice} credit
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-slate-100 rounded-3xl p-6 shadow-md"
          >
            <div className="card-body">
              <h5 className="text-xl font-bold mb-4">{item.name}</h5>
              <div className="relative">
                {/* Adjusted image size and positioning */}
                <img
                  src={item.image.url}
                  alt=""
                  className="absolute lg:-top-4 sm:-top-5 md:top-2 right-2 h-12 w-12 rounded-full"
                  style={{ transform: "translate(50%, -50%)" }}
                />
              </div>
              <h6 className="text-xl font-semibold mb-2">
                {currency}
                {item.price} / {item.text}
              </h6>
              <p className="text-base font-medium mb-4">{item.description}</p>
              <div className="flex justify-center">
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full mt-4">
                  <p className="mx-3">Get Started free</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
