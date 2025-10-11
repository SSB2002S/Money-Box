import MonthlyBudgetList from "../features/transactions/MonthlyTransactionsList";
import MonthlyBudget from "../components/monthlyBudget/MonthlyBudget";
import SavingGoals from "../components/savingGoals/SavingGoals";
import AddTransaction from "../features/transactions/AddTransactionButton";
import { useDispatch, useSelector } from "react-redux";
import AddGoal from "../components/Buttons/AddGoal";
import {
  editTransactions,
  deleteTransactions,
  totalIncom,
  totalExpenses,
  residual,
} from "../features/transactions/transactionsSlice";

const Dashbard = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.transaction);

  return (
    <main className='mt-20' id='mainPage'>
      <div className='info py-4 px-4 grid max-sm:grid-cols-1 max-sm:px-4 grid-cols-3 text-center gap-6 bg-white border-2 border-gray-100 overflow-hidden rounded'>
        <div className='bg-emerald-200 p-4 rounded-lg transition-all hover:scale-105'>
          <p className='mb-4 text-xl font-semibold'>اجمالي الدخل</p>
          <span className='text-lg'>
            {totalIncom} <span>ريال</span>
          </span>
        </div>
        <div className='bg-red-200 p-4 rounded-lg transition-all hover:scale-105'>
          <p className='mb-4 text-xl font-semibold'>اجمالي المصروفات</p>
          <span className='text-lg'>
            {totalExpenses} <span>ريال</span>
          </span>
        </div>
        <div className='bg-sky-200 p-4 rounded-lg transition-all hover:scale-105'>
          <p className='mb-4 text-xl font-semibold'>الرصيد المتبقي</p>
          <span className='text-lg'>
            {residual} <span>ريال</span>
          </span>
        </div>
      </div>
      <MonthlyBudgetList
        state={globalState}
        editTransactions={editTransactions}
        deleteTransactions={deleteTransactions}
        dispatch={dispatch}
      />

      <section className='bg-white my-8 p-4'>
        <div
          className='grid min-md:grid-cols-2  gap-x-4 mb-8'
          id='budgets&Goals'>
          <MonthlyBudget
            totalIncom={totalIncom}
            totalExpenses={totalExpenses}
            residual={residual}
            dispatch={dispatch}
          />
          <SavingGoals />
        </div>
        <div className='flex justify-center items-center gap-x-8'>
          <div></div>
        </div>
        <div className=' inset-0 flex items-center justify-center gap-x-8'>
          {/* <AddTransaction
            addTransactions={addTransactions}
            dispatch={dispatch}
          /> */}
          <AddGoal />
        </div>
      </section>
    </main>
  );
};

export default Dashbard;
