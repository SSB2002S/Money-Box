import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MonthlyBudget = ({ totalIncom, totalExpenses, residual }) => {
  return (
    <div className='bg-white border-2 relative border-gray-100 rounded p-4 h-80'>
      <h2 className='text-2xl text-emerald-500 text-center mt-2 mb-10 font-semibolds'>
        الميزانية
      </h2>
      <div className='tracking-box relative w-full h-6 bg-emerald-200 mx-auto my-8 rounded overflow-hidden'>
        {/* النسبة المئوية في منتصف الشريط */}
        <div className='absolute w-full h-full flex items-center justify-center z-10 text-sm font-medium text-gray-700'>
          {totalIncom > 0 ? Math.round((totalExpenses / totalIncom) * 100) : 0}%
        </div>
        {/* شريط التقدم */}
        <div
          className='tracking-bar h-full rounded-r transition-all duration-500 absolute top-0 right-0'
          style={{
            width:
              totalIncom > 0 ? `${(totalExpenses / totalIncom) * 100}%` : "0%",
            backgroundColor:
              totalExpenses / totalIncom > 0.8 ? "#ef4444" : "#059669",
          }}></div>
      </div>
      <div>
        <div className='flex items-center gap-x-4'>
          <FontAwesomeIcon icon={faSquare} className='text-red-500' />
          <p>
            انفقت {totalExpenses} ريال من اصل {totalIncom} ريال
          </p>
        </div>

        <div className='flex items-center gap-x-4 mt-4'>
          <FontAwesomeIcon icon={faSquare} className='text-emerald-500' />
          <p>الرصيد المتبقي هو {residual} ريال</p>
        </div>
      </div>
      {/* <div className='absolute bottom-4 right-1/2 transform translate-x-1/2'>
        <Button title={"إعدادات الميزانية"} action={alert} />
      </div> */}
    </div>
  );
};

export default MonthlyBudget;
