function WeeklyCard() {
  return (
    <div>
      {/* single card component */}
      <div className="border-card h-40 w-40 shadow-lg flex flex-col justify-center items-center hover:scale-125 bg-[#e0f8fb]">
        <div className="mb-4 text-center">
          <h1 className="text-sm">Day</h1>
          <h2 className=" mt-4">Clear</h2>
          <p className=" mt-4">Max°/Min°</p>
        </div>
      </div>
    </div>
  );
}

export default WeeklyCard;
