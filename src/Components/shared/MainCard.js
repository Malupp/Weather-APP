export function MainCard() {
  return (
    <div className="border-card h-80 w-80 md:w-10/12 shadow-lg flex justify-center md:justify-evenly items-center mt-2">
      {/* Left side */}
      <div className="mb-4 text-center flex flex-col">
        <h1 className="text-3xl mt-4">Nome città</h1>
        <h1 className="text-5xl mt-4">37°C</h1>
        <h1 className="text-xl mt-4">Nuvoloso</h1>
      </div>
      {/* Right side */}
      <div>
        <div className="hidden md:flex mb-4 text-center flex-col">
          <h1 className="text-3xl mt-4">Nome città</h1>
          <h1 className="text-5xl mt-4">37°C</h1>
          <h1 className="text-xl mt-4">Nuvoloso</h1>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
