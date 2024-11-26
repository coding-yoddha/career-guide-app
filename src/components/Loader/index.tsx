const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0">
      <div className="flex flex-row space-x-4">
        <div
          className="w-12 h-12 rounded-full animate-spin 
                 border-4 border-solid border-white border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
