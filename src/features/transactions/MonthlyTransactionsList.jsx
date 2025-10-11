import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditTransaction from "./EditTransactionButton";
import Swal from "sweetalert2";
import { addTransactions } from "./transactionsSlice";
import AddTransaction from "./AddTransactionButton";

const MonthlyBudgetList = ({
  state,
  dispatch,
  deleteTransactions,
  // editTransactions,
}) => {
  return (
    <>
      <section className='mt-8' id='transaction'>
        <div className='bg-white border-2 border-gray-100 rounded p-2 py-4 max-sm:overflow-x-scroll'>
          <h2 className='text-2xl text-emerald-500 text-center mt-2 font-semibold'>
            المعاملات الاخيرة
          </h2>
          <table className='w-full border border-gray-200 rounded-lg mt-8 overflow-x-scroll'>
            <thead className=''>
              <tr className=''>
                <th hidden className='p-2'>
                  رقم
                </th>
                <th className='p-2'>الاسم</th>
                <th className='p-2'>المبلغ</th>
                <th className='p-2'>النوع</th>
                <th className='p-2'>التاريخ</th>
                <th className='p-2'>الفئة</th>
                <th className='p-2'>ملاحظة</th>
                <th className='p-2'>اجراء</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {state.map((item) => (
                <tr
                  className='border border-gray-200 rounded-lg transition-all hover:bg-gray-100'
                  key={item.id}>
                  <td hidden className='p-2'>
                    {Number(item.id) + 1}
                  </td>
                  <td className='p-2'>{item.title}</td>
                  <td className='p-2'>
                    {item.amount} <span>ريال</span>
                  </td>
                  <td className='p-2'>{item.type}</td>
                  <td className='p-2'>{item.date}</td>
                  <td className='p-2'>{item.category}</td>
                  <td className='p-2'>{item.note}</td>
                  <td className='p-2 flex justify-center gap-4'>
                    <EditTransaction
                      item={item}
                      // editTransactions={editTransactions}
                      dispatch={dispatch}
                    />
                    <button
                      type='button'
                      onClick={() => dispatch(deleteTransactions(item.id))}>
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        title='حذف'
                        className='text-red-500 transition hover:scale-110'
                        onClick={() =>
                          Swal.fire({
                            icon: "success",
                            iconColor: "#ff5959",
                            title: "Deleted",
                            color: "#ff5959",
                            showConfirmButton: false,
                            timer: 1000,
                          })
                        }
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <AddTransaction
              addTransactions={addTransactions}
              dispatch={dispatch}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MonthlyBudgetList;
