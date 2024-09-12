export const Loading = () => {
  return (
    <div className="container">
      <div className="w-full flex justify-center items-center my-4 p-10 bg-gradient-to-r from-white via-gray-100 to-white animate-pulse rounded-lg">
        <p className="text-3xl">Данные загружаются...</p>
      </div>
    </div>
  );
};
