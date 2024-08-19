import hr from "../../assets/hr.jpeg";
import screening from "../../assets/screening.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";

const AiAppointmentBooking = () => {
  const howItWorksSteps = [
    "Document Upload: Upload documents about your business, services, and pricing. Include your service menu to provide comprehensive information to customers.",
    "AI Training: Our system processes your documents, training the AI to accurately represent your business and services.",
    "Integration: Receive a unique URL and JavaScript code. Share the URL on various platforms or embed the JavaScript on your website for easy customer access.",
    "Customer Interaction: The AI engages with customers, answering questions about your services, prices, and availability.",
    "Appointment Booking: When a customer is ready, the AI guides them through the booking process, storing appointment details in the backend.",
    "Review and Management: Access the backend to view and manage booked appointments.",
    "Billing: You're charged $0.0005 per AI response. Funds are deducted from your pre-loaded wallet based on usage. No fixed monthly fees or long-term commitments.",
  ];

  const useCases = [
    {
      id: 1,
      title: "Luxury Day Spa Automation",
      description: `A high-end day spa can utilize the Appointment Booking AI Agent to elevate its customer service and streamline operations. 
                    The AI can provide detailed information about various treatments, from Swedish massages to aromatherapy sessions, 
                    along with their benefits and pricing. It can answer questions on deals or services based on customer inquiries, 
                    potentially increasing average booking value. By handling routine questions and bookings, the AI frees up staff to 
                    focus on providing exceptional in-person experiences, crucial for maintaining the spa's luxury image.`,
    },
    {
      id: 2,
      title: "24/7 Salon Scheduling",
      description: `For a bustling hair salon, the AI Agent can manage appointments round the clock, catering to clients with varying schedules. 
                    It can describe different hair services, estimated duration, and pricing, helping clients choose the right service. 
                    This 24/7 availability can significantly reduce no-shows and last-minute cancellations by sending reminders and allowing 
                    easy rescheduling, ultimately optimizing the salon's schedule and revenue.`,
    },
    {
      id: 3,
      title: "Boutique Nail Studio Customer Service",
      description: `A trendy nail studio can leverage the AI Agent to showcase its array of services, from basic manicures to intricate nail art. 
                    The AI can explain the latest trends, answer questions about different techniques or products used, and even show example 
                    images of nail designs. By efficiently handling inquiries and bookings, especially during peak hours or after business hours, 
                    the AI helps the studio capture more appointments without overwhelming staff. This allows nail technicians to focus on their 
                    artistry while the AI handles the administrative aspects of customer service.`,
    },
  ];

  return (
    <div className="mb-12 mt-6 lg:mx-auto mx-8 max-w-screen-xl">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="lg:text-7xl lg:mb-10 text-4xl max-sm:text-2xl mb-4 lg:mt-6 mt-4 font-bold text-blue-900">
          AI Appointment Booking
        </h1>
      </div>
      <div className="bg-white rounded-3xl text-blue-900 py-6 px-4 lg:px-16 lg:mb-6 mb-3">
        <div className="container">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 mb-4 md:mb-0 md:mr-6">
              <p className="md:text-lg">
                Automate Scheduling for Your Spa or Salon
              </p>
              <p className="md:text-lg mb-2">
                Streamline bookings, answer queries, and boost appointments with
                intelligent chat assistance
              </p>
              <p className="md:text-lg">
                <strong>Call-to-Action:</strong>Start Booking Appointments 24/7
              </p>
              <p className="md:text-lg">
                Rotuto's Appointment Booking Al Agent is a sophisticated
                solution designed to revolutionize how spas, salons, and similar
                businesses manage their scheduling and customer interactions.
                This Al-powered assistant can answer customer queries, provide
                information about services and pricing, and seamlessly book
                appointments. By automating these crucial tasks, businesses can
                provide round-the-clock availability, improve customer
                satisfaction, and increase bookings while reducing the workload
                on staff.
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
                Our Appointment Booking Al Agent combines advanced natural
                language processing with customizable business information to
                create a powerful tool that enhances your customer service and
                booking efficiency.
              </p>
              <p className="md:text-lg">
                <strong>Key features and benefits include:</strong>
              </p>
              <ul className="md:text-lg list-disc list-inside">
                <li>
                  Customized responses based on your uploaded business documents
                  and service menu
                </li>
                <li>
                  Multi-platform accessibility via URL sharing or website
                  embedding
                </li>
                <li>Automated appointment scheduling and management</li>
                <li>
                  Seamless integration with your existing website or social
                  media channels
                </li>
                <li>Detailed conversation logging for future reference</li>
                <li>Proactive appointment nudging to increase bookings</li>
                <li>Pay-per-response pricing for cost-effective service</li>
                <li>24/7 availability for customer inquiries and bookings</li>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase) => (
          <div
            key={useCase.id}
            className="relative rounded-3xl p-6 shadow-md bg-gradient-to-b from-blue-900 to-blue-950 overflow-hidden flex"
          >
            <div className="card-body flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white">{useCase.title}</h2>
              <p className="text-white mt-2">{useCase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiAppointmentBooking;
