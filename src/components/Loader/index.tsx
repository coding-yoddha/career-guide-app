const Loader = ({ message = "Loading, please wait..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-75 fixed inset-0 z-50">
      <div className="flex flex-row space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full border-4 border-solid border-white border-t-transparent animate-spin"></div>
      </div>
      <p className="text-white text-lg font-semibold">{message}</p>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .pulse {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
