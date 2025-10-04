import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "../Buttons/GlobalButton";
import EditGoalButton from "./EditGoalButton";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../../features/goals/goalsSlice";
import AddMoneyToGaol from "./AddMoneyToGaol";

const AllGoals = ({ data }) => {
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div>
        <Button
          title={"جميع أهدافي"}
          // icon={<FontAwesomeIcon icon={faCrosshairs} />}
          action={openModal}
        />
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-xl font-semibold leading-6 text-gray-900 text-center mb-4'>
                    اضافة هدف
                  </Dialog.Title>
                  <table className='w-full text-center'>
                    <thead className='border border-gray-300'>
                      <tr className=''>
                        <th className='p-1'>الهدف</th>
                        <th className='p-1'>المبلغ المستهدف</th>
                        <th className='p-1'>الموعد النهائي</th>
                        <th className='p-1'>ملاحظة</th>
                        <th className='p-1'>اجراء</th>
                      </tr>
                    </thead>
                    <tbody className='border border-gray-300'>
                      {data.map((goal) => {
                        return (
                          <tr className='text-center' key={goal.id}>
                            <td className='p-3'>{goal.title}</td>
                            <td className='p-3'>{goal.money}</td>
                            <td className='p-3'>{goal.date}</td>
                            <td className='p-3'>{goal.note}</td>
                            <td className='p-3 flex justify-center gap-2'>
                              <EditGoalButton goal={goal} />

                              <button
                                type='button'
                                onClick={() => dispatch(deleteGoal(goal.id))}>
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
                              <AddMoneyToGaol goal={goal} />
                              {/* <button type='button'>
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  title='اضافة'
                                  className='text-green-500 transition hover:scale-110'
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
                              </button> */}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AllGoals;
