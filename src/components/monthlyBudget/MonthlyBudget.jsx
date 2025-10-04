import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Buttons/GlobalButton";
import Swal from "sweetalert2";

const MonthlyBudget = ({ totalIncom, totalExpenses, residual, dispatch }) => {
  const alert = () => {
    Swal.fire({
      icon: "success",
    });
  };
  return (
    <div className='bg-white border-2 relative border-gray-100 rounded p-4 h-80'>
      <h2 className='text-2xl text-emerald-500 text-center mt-2 mb-10 font-semibolds'>
        الميزانية الشهرية
      </h2>
      <div className='tracking-box relative w-full h-6 bg-emerald-200 mx-auto my-8 rounded'>
        <div className='tracking-bar w-2/4 h-full bg-emerald-600 rounded'></div>
      </div>
      <div>
        <div className='flex items-center gap-x-4'>
          <FontAwesomeIcon icon={faSquare} className='text-emerald-600' />
          <p>
            انفقت {totalExpenses} ريال من اصل {totalIncom} ريال
          </p>
        </div>

        <div className='flex items-center gap-x-4 mt-4'>
          <FontAwesomeIcon icon={faSquare} className='text-emerald-200' />
          <p>الرصيد المتبقي هو {residual} ريال</p>
        </div>
      </div>
      <div className='absolute bottom-4 right-1/2 transform translate-x-1/2'>
        <Button title={"إعدادات الميزانية"} action={alert} />
      </div>
    </div>
  );
};

export default MonthlyBudget;
