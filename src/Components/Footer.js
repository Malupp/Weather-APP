import WeeklyCard from "./shared/WeeklyCard";

function Footer() {

  return (
    <div className="flex flex-col ml-10 mt-10 ">
        <h1 className="mb-8 text-xl">Extended forecast</h1>
      <WeeklyCard />
    </div>
  );
}

export default Footer;
