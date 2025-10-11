import { faCheck, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Goal = ({ goal }) => {
  const isCompleted = goal.moneySaved >= goal.money;
  const progressPercentage =
    goal.money > 0 ? (goal.moneySaved / goal.money) * 100 : 0;

  return (
    <div className='px-4 mt-4'>
      <div
        className={`goal-title flex items-center gap-x-3 p-4 rounded-lg transition-all duration-300 ${
          isCompleted ? "bg-emerald-50" : ""
        }`}>
        <div
          className={`p-2 px-2.5 rounded-full transition-colors duration-300 ${
            isCompleted ? "bg-emerald-400" : "bg-emerald-600"
          }`}>
          {isCompleted ? (
            <FontAwesomeIcon
              icon={faCheck}
              width={"20px"}
              className='text-emerald-100'
            />
          ) : (
            <FontAwesomeIcon
              icon={faCrosshairs}
              width={"20px"}
              className='text-emerald-100'
            />
          )}
        </div>
        <div className='w-full ml-8'>
          <div className='flex justify-between items-center mb-2'>
            <h4
              className={`font-semibold ${
                isCompleted ? "text-emerald-600" : ""
              }`}>
              {goal.title}
            </h4>
            <span
              className={`text-sm font-medium ${
                isCompleted ? "text-emerald-500" : "text-gray-600"
              }`}>
              {goal.moneySaved} / {goal.money} ريال
            </span>
          </div>
          <div className='goal-box relative right-0 mt-2 w-full h-3 bg-emerald-200 rounded-full overflow-hidden'>
            {/* النسبة المئوية فوق شريط التقدم */}
            <div className='absolute w-full h-full flex items-center justify-center z-10 text-xs font-bold text-gray-700'>
              {Math.round(progressPercentage)}%
            </div>
            {/* شريط التقدم */}
            <div
              className='h-full rounded-r transition-all duration-500 absolute top-0 right-0'
              style={{
                width: `${progressPercentage}%`,
                backgroundColor: isCompleted
                  ? "#059669"
                  : progressPercentage > 80
                  ? "#10b981"
                  : "#34d399",
              }}></div>
          </div>
          {/* {isCompleted && (
            <div className='text-emerald-500 text-sm mt-0.5 font-medium text-center'>
              🎉 تم تحقيق الهدف! 🎉
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Goal;
