import WeeklyCard from "../shared/WeeklyCard";

export function Footer() {
  return (
    <div className="flex flex-col mt-10 items-center">
      <h1 className="mb-2 text-xl text-orange-500">
        Previsioni della settimana
      </h1>
      <WeeklyCard />
    </div>
  );
}

export default Footer;
