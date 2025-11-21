import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditTransaction from "./EditTransactionButton";
import Swal from "sweetalert2";
import { addTransactions } from "../../features/transactions/transactionsSlice";
import AddTransaction from "./AddTransactionButton";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const MonthlyBudgetList = ({ state, dispatch, deleteTransactions }) => {
  const printTransactions = () => {
    const table = document.getElementById("transactions-table");
    if (!table) return;

    // Clone the table so we don't modify the on-screen table
    const clone = table.cloneNode(true);

    // Determine index of the 'اجراء' column by checking header text
    const headerCells = clone.querySelectorAll("thead th");
    let actionIndex = -1;
    headerCells.forEach((th, idx) => {
      const text = th.textContent ? th.textContent.trim() : "";
      if (text === "اجراء" || text.toLowerCase() === "action") {
        actionIndex = idx;
      }
    });
    // fallback to last column if specific header not found
    if (actionIndex === -1) actionIndex = headerCells.length - 1;

    // Remove the header cell for the action column
    const headerRow = clone.querySelector("thead tr");
    if (headerRow && headerRow.children[actionIndex]) {
      headerRow.removeChild(headerRow.children[actionIndex]);
    }

    // Remove each corresponding tbody cell
    clone.querySelectorAll("tbody tr").forEach((row) => {
      if (row.children[actionIndex]) row.removeChild(row.children[actionIndex]);
    });

    const newWin = window.open("", "_blank");
    const style = `
      body { direction: rtl; font-family: Arial, Helvetica, sans-serif; padding: 16px; }
      table { width: 100%; border-collapse: collapse; }
      th { background: #0f766e; color: #fff; padding: 8px; }
      td { border: 1px solid #e5e7eb; padding: 8px; text-align: center; }
    `;
    newWin.document.write(
      `<!doctype html><html><head><meta charset="utf-8"><title>طباعة المعاملات</title><style>${style}</style></head><body>${clone.outerHTML}</body></html>`
    );
    newWin.document.close();
    newWin.focus();
    newWin.print();
  };
  return (
    <>
      <section className='mt-8' id='transaction'>
        <div className='bg-white border-2 border-gray-100 rounded-md p-2 py-4'>
          <h2 className='text-2xl text-emerald-500 text-center mt-2 font-semibold'>
            المعاملات الاخيرة
          </h2>
          <div className='bg-white max-sm:overflow-x-scroll px-2'>
            <table id='transactions-table' className='w-full mt-8'>
              <thead className='bg-emerald-600 text-white'>
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
                    className='border border-gray-200 transition-all hover:bg-gray-100'
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
          </div>
        </div>
        <div className='flex justify-center mt-4 gap-4'>
          <AddTransaction
            addTransactions={addTransactions}
            dispatch={dispatch}
          />
          <button
            type='button'
            onClick={printTransactions}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:brightness-95'>
            طباعة المعاملات
            <FontAwesomeIcon icon={faPrint} className='mr-1' />
          </button>
        </div>
      </section>
    </>
  );
};

export default MonthlyBudgetList;
