import hr from "../../assets/hr.jpeg";
import screening from "../../assets/screening.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";

const AiPowerResume = () => {
  const howItWorksSteps = [
    "Job Post Creation: Create a detailed job post specifying the role requirements and desired candidate qualifications. Indicate which factors should be prioritized or ignored in the screening process.",
    "Sharing: Our system generates a unique URL for your job post. Share this link across various platforms like WhatsApp, Instagram, LinkedIn, and Twitter to reach a wide pool of candidates.",
    "Application Submission: Candidates apply by submitting their resumes through the provided link. All resumes, along with applicant names and email addresses, are securely stored in our backend system.",
    "AI Screening: Our AI Agent automatically screens each resume against your specified criteria. It evaluates qualifications, experience, and other relevant factors.",
    "Results Generation: For each application, the AI Agent either shortlists or rejects the candidate. Rejected applications receive a brief explanation. Shortlisted candidates are assigned a percentage grade and a short message highlighting their strengths.",
    "Review and Selection: Access the screened results to quickly identify top candidates. Use the AI-generated insights to make informed decisions about which candidates to interview.",
    "Billing: You're charged $0.0005 per resume screened. Funds are deducted from your pre-loaded wallet based on usage.",
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
          AI-Powered Resume Screening
        </h1>
      </div>
      <div className="bg-white rounded-3xl text-blue-900 py-6 px-4 lg:px-16 lg:mb-6 mb-3">
        <div className="container">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 mb-4 md:mb-0 md:mr-6">
              <p className="md:text-lg">Streamline Your Hiring Process</p>
              <p className="md:text-lg mb-2">
                Efficiently shortlist candidates and save time with intelligent
                resume analysis
              </p>
              <p className="md:text-lg">
                <strong>Call-to-Action:</strong> Start Screening Resumes Now
              </p>
              <p className="md:text-lg">
                Rotuto's Resume Screening AI Agent is an advanced solution
                designed to revolutionize your hiring process. This intelligent
                tool automatically analyzes and evaluates resumes based on your
                specific job requirements, saving you countless hours of manual
                screening. By quickly identifying the most qualified candidates,
                our AI Agent helps you focus on interviewing the best fits for
                your organization, ultimately leading to faster and more
                effective hiring decisions.
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
                Our Resume Screening AI Agent combines cutting-edge technology
                with customizable parameters to deliver a powerful hiring tool
                tailored to your needs. This service is designed to enhance your
                recruitment process, ensuring you never miss out on top talent.
              </p>
              <p className="md:text-lg">
                <strong>Key features and benefits include:</strong>
              </p>
              <ul className="md:text-lg list-disc list-inside">
                <li>
                  Customizable job post creation and requirement specification
                </li>
                <li>Automated resume analysis based on your criteria</li>
                <li>Instant shortlisting or rejection of candidates</li>
                <li>Percentage grading for shortlisted applicants</li>
                <li>
                  Explanation messages for both rejected and shortlisted
                  candidates
                </li>
                <li>Secure storage of all applicant information</li>
                <li>Easy sharing of job posts across multiple platforms</li>
                <li>Pay-per-screen pricing model for cost-effective hiring</li>
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

export default AiPowerResume;
