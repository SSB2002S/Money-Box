import Goal from "./Goal";
import { useSelector } from "react-redux";
import AllGoals from "./AllGoals";
import AddGoal from "../Buttons/AddGoal";

const SavingGoals = () => {
  const goalsSlice = useSelector((state) => state.goal);

  return (
    <div
      id="savingGoals"
      className="bg-white relative border-2 border-gray-100 rounded py-4 h-80
    "
    >
      <h2 className="text-2xl text-emerald-500 text-center mt-2 mb-4 font-semibolds">
        الأهداف
      </h2>
      {/* {goalsSlice.slice(0, 2).map((goal) => {
        return <Goal key={goal.id} goal={goal} />;
      })} */}
      <div className="overflow-y-scroll h-40 mb-5">
        {goalsSlice.map((goal) => {
          return <Goal key={goal.id} goal={goal} />;
        })}
      </div>

      <div className="flex justify-center items-between gap-4 relative bottom-0 left-0 right-0">
        <div className="">
          <AllGoals data={goalsSlice} />
        </div>
        <div className=" ">
          <AddGoal />
        </div>
      </div>
    </div>
  );
};

export default SavingGoals;
