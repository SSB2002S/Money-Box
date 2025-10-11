import Goal from "./Goal";
import { useSelector } from "react-redux";
import AllGoals from "./AllGoals";

const SavingGoals = () => {
  const goalsSlice = useSelector((state) => state.goal);

  return (
    <div
      id='savingGoals'
      className='bg-white relative border-2 border-gray-100 rounded py-4 h-80
    '>
      <h2 className='text-2xl text-emerald-500 text-center mt-2 mb-4 font-semibolds'>
        الأهداف
      </h2>
      {goalsSlice.slice(0, 2).map((goal) => {
        return <Goal key={goal.id} goal={goal} />;
      })}
      <div className='absolute bottom-4 right-1/2 transform translate-x-1/2'>
        <AllGoals data={goalsSlice} />
      </div>
    </div>
  );
};

export default SavingGoals;
