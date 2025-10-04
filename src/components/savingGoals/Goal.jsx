import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Buttons/GlobalButton";
import '../../../main'

const Goal = ({ goal }) => {
  return (
    <div className='px-4 mt-4'>
      <div
        className='goal-title
        flex items-center gap-x-3'>
        <div className='bg-emerald-600 p-2 px-2.5 rounded-4xl'>
          <FontAwesomeIcon
            icon={faCrosshairs}
            width={"20px"}
            className='text-emerald-100'
          />
        </div>
        <div className='w-full ml-8'>
          <h4>{goal.title}</h4>
          <span>{goal.money}</span>
          {/* <div className='goal-box relative right-0 mt-2 w-full h-3 bg-emerald-200 rounded'>
            <div className='w-2/4 h-full bg-emerald-600 rounded'></div>
          </div> */}
          <div className='goal-box relative right-0 mt-2 w-full h-3 bg-emerald-200 rounded'>
            <div
              className='line w-0 h-full bg-emerald-600 rounded'
              data-prog=''></div>
          </div>
        </div>
        {/* <Button title={"اضافة مبلغ محفوظ"} /> */}
      </div>
    </div>
  );
};

export default Goal;
