import hr from "../../assets/hr.jpeg";
import screening from "../../assets/screening.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";

const AiCustomerService = () => {
  const howItWorksSteps = [
    "Document Upload: Start by uploading documents about your products, services, and business information. This forms the knowledge base for your AI assistant.",
    "Set Objectives: Choose what you want to achieve with the AI Agent. Options include answering questions, generating leads, noting complaints, and collecting feedback.",
    "Integration: Our system generates a unique URL and JavaScript code. Share the URL on various platforms or embed the JavaScript on your website to make the AI assistant accessible to your customers.",
    "Customer Interaction: The AI engages with your customers, providing information, answering queries, and collecting data as per your set objectives.",
    "Data Organization: All conversations are recorded. Leads, feedback, and complaints are automatically segregated into separate sections for easy access and analysis.",
    "Billing: You're charged $0.0005 per AI response. Add money to your wallet, and the amount is deducted based on usage. No fixed monthly fees or long-term commitments.",
  ];

  const useCases = [
    {
      id: 1,
      title: "Luxury Day Spa Automation",
      description:
        "A high-end day spa can utilize the Appointment Booking AI Agent to elevate its customer service and streamline operations. The AI can provide detailed information about various treatments, from Swedish massages to aromatherapy sessions, along with their benefits and pricing. It can answer questions on deals or services based on customer inquiries, potentially increasing average booking value. By handling routine questions and bookings, the AI frees up staff to focus on providing exceptional in-person experiences, crucial for maintaining the spa's luxury image.",
      image: one,
    },
    {
      id: 2,
      title: "24/7 Salon Scheduling",
      description:
        "For a bustling hair salon, the AI Agent can manage appointments round the clock, catering to clients with varying schedules. It can describe different hair services, estimated duration, and pricing, helping clients choose the right service. This 24/7 availability can significantly reduce no-shows and last-minute cancellations by sending reminders and allowing easy rescheduling, ultimately optimizing the salon's schedule and revenue.",
      image: two,
    },
    {
      id: 3,
      title: "Luxury Day Spa Automation",
      description:
        "A high-end day spa can utilize the Appointment Booking AI Agent to elevate its customer service and streamline operations. The AI can provide detailed information about various treatments, from Swedish massages to aromatherapy sessions, along with their benefits and pricing. It can answer questions on deals or services based on customer inquiries, potentially increasing average booking value. By handling routine questions and bookings, the AI frees up staff to focus on providing exceptional in-person experiences, crucial for maintaining the spa's luxury image.",
      image: one,
    },
    {
      id: 4,
      title: "24/7 Salon Scheduling",
      description:
        "For a bustling hair salon, the AI Agent can manage appointments round the clock, catering to clients with varying schedules. It can describe different hair services, estimated duration, and pricing, helping clients choose the right service. This 24/7 availability can significantly reduce no-shows and last-minute cancellations by sending reminders and allowing easy rescheduling, ultimately optimizing the salon's schedule and revenue.",
      image: two,
    },
  ];

  return (
    <div className="mb-12 mt-6 lg:mx-auto mx-8 max-w-screen-xl">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="lg:text-7xl lg:mb-10 text-4xl max-sm:text-2xl mb-4 lg:mt-6 mt-4 font-bold text-blue-900">
          AI Customer Service Assistant
        </h1>
      </div>
      <div className="bg-white rounded-3xl text-blue-900 py-6 px-4 lg:px-16 lg:mb-6 mb-3">
        <div className="container">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 mb-4 md:mb-0 md:mr-6">
              <p className="md:text-lg">
                Automate Support, Generate Leads, Collect Feedback
              </p>
              <p className="md:text-lg">
                <strong>Call-to-Action:</strong>Start Screening Resumes Now
              </p>
              <p className="md:text-lg">
                Rotuto's Customer Service Agent is an Al-powered solution
                designed to transform how businesses handle customer
                interactions. Our service allows you to create a virtual
                assistant that can answer customer queries, generate leads, and
                collect feedback, all based on your specific business
                information. By automating these crucial tasks, businesses can
                provide consistent, round-the-clock support while significantly
                reducing costs and freeing up human resources for more complex
                issues.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center items-center relative md:-mr-12">
              <img
                src={hr}
                alt="AI Employee"
                className="w-full rounded-3xl md:w-auto h-full md:h-auto md:rounded-l-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl text-blue-900 py-6 px-4 lg:px-16 relative overflow-hidden lg:mb-6 mb-3">
        <div className="container">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 mb-4 md:mb-0 md:mr-6">
              <p className="md:text-3xl text-xl font-semibold">
                Key Features and Benefits
              </p>
              <p className="md:text-lg mb-2">
                Our Customer Service Agent is packed with features designed to
                streamline your customer service operations and boost your
                business performance. By leveraging advanced Al technology, we
                offer a comprehensive solution that adapts to your unique
                business needs.
              </p>
              <p className="md:text-lg">
                <strong>Key features and benefits include:</strong>
              </p>
              <ul className="md:text-lg list-disc list-inside">
                <li>
                  Customized responses based on your uploaded business documents
                </li>
                <li>
                  Multi-channel deployment via URL sharing or website embedding
                </li>
                <li>Automatic lead generation from customer conversations</li>
                <li>Systematic complaint and feedback collection</li>
                <li>Detailed conversation recording and data organization</li>
                <li>
                  Pay-per-response pricing model for cost-effective service
                </li>
                <li>24/7 availability for continuous customer support</li>
                {/* <li>Pay-per-screen pricing model for cost-effective hiring</li> */}
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center items-center md:absolute md:top-0 md:right-0 h-full md:rounded-tr-none md:rounded-br-none overflow-hidden">
              <img
                src={screening}
                alt="AI Employee"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl text-blue-900 py-6 px-4 lg:px-16 relative overflow-hidden lg:mb-6 mb-3">
        <div className="container">
          <div className="mb-4 md:mb-0 md:mr-6">
            <p className="md:text-3xl text-xl font-semibold">How it works</p>
            <ul className="md:text-lg list-disc list-inside">
              {howItWorksSteps.map((step, index) => {
                const [boldText, normalText] = step.split(": ");
                return (
                  <li key={index}>
                    <span className="font-semibold">{boldText}:</span>{" "}
                    <span>{normalText}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="lg:text-7xl lg:mb-10 text-4xl max-sm:text-2xl mb-4 lg:mt-6 mt-4 font-bold text-blue-900">
          Use Cases
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {useCases.map((useCase) => (
          <div
            key={useCase.id}
            className="relative rounded-3xl p-6 shadow-md bg-gradient-to-b from-blue-900 to-blue-950 overflow-hidden flex items-center justify-center"
          >
            <img
              src={useCase.image}
              alt={useCase.title}
              className="absolute top-0 left-0 right-0 w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="card-body flex flex-col items-center pt-48">
              <h2 className="text-2xl font-bold text-white">{useCase.title}</h2>
              <p className="text-white mt-2">{useCase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiCustomerService;
