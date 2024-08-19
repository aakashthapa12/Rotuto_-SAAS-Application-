
const MeetYourEmployee = () => {
  return (
    <div className="w-full bg-blue-900 text-white">
    <div className="flex flex-col items-center max-w-screen-xl lg:mx-auto mx-8">
      <h1 className="lg:text-7xl font-bold text-4xl max-sm:text-2xl lg:mb-10 mb-6 mt-6">
        Meet Your AI Employee
      </h1>
      <p className="lg:text-xl text-lg max-sm:text-base lg:max-w-4xl font-semibold text-justify px-4 lg:px-0 leading-relaxed lg:mb-4 mb-2">
        Get things done 10x cheaper and faster with
      </p>
      <p className="lg:text-xl text-lg max-sm:text-base lg:max-w-4xl font-semibold text-justify px-4 lg:px-0 leading-relaxed lg:mb-10 mb-6">
       Your custom AI - no coding required
      </p>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full lg:mb-12 mb-8">
           <p className="mx-3">Join Waitlist</p> 
          </button>
    </div>
    </div>
  );
}

export default MeetYourEmployee;