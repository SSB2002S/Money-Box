import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../Buttons/GlobalButton";
import { useDispatch } from "react-redux";
import { editGoal } from "../../features/goals/goalsSlice";

const EditGoalButton = ({ goal }) => {
  let [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const idRef = useRef("");
  const titleRef = useRef("");
  const moneyRef = useRef("");
  const dateRef = useRef("");
  const noteRef = useRef("");
  const dialogRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  const handleForm = (e) => {
    e.preventDefault();

    const data = {
      id: idRef.current.value,
      title: titleRef.current.value,
      money: moneyRef.current.value,
      date: dateRef.current.value,
      note:
        noteRef.current.value === ""
          ? "لا توجد ملاحظات"
          : noteRef.current.value,
    };
    dispatch(editGoal(data));
    titleRef.current.value = "";
    moneyRef.current.value = "";
    dateRef.current.value = "";
    noteRef.current.value = "";
  };
  return (
    <>
      <div>
        <button type='button' onClick={openModal}>
          <FontAwesomeIcon
            icon={faEdit}
            title='تعديل'
            className='text-blue-500 transition hover:scale-110'
          />
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={closeModal}
          initialFocus={dialogRef}>
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
                <Dialog.Panel
                  ref={dialogRef}
                  tabIndex={-1}
                  className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-xl font-semibold leading-6 text-gray-900 text-center mb-4'>
                    تعديل معاملة
                  </Dialog.Title>
                  <form onSubmit={handleForm} className='text-right'>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='nameTransaction' className='mb-1'>
                        ID<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='text'
                        name='nameTransaction'
                        id='nameTransaction'
                        placeholder='ادخل اسم المعاملة'
                        ref={idRef}
                        defaultValue={goal.id}
                        disabled
                        className='bg-gray-300 text-gray-500 border border-gray-300 rounded px-2 py-1 '
                      />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='nameTransaction' className='mb-1'>
                        الهدف<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='text'
                        name='nameTransaction'
                        id='nameTransaction'
                        placeholder='ادخل اسم المعاملة'
                        ref={titleRef}
                        defaultValue={goal.title}
                        required
                        className='border border-gray-300 rounded px-2 py-1 '
                      />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='money' className='mb-1'>
                        المبلغ المستهدف<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='number'
                        name='money'
                        id='money'
                        placeholder='ادخل المبلغ'
                        required
                        ref={moneyRef}
                        defaultValue={goal.money}
                        className='border border-gray-300 rounded px-2 py-1 '
                      />
                    </div>

                    <div className='flex flex-col mb-4'>
                      <label htmlFor='date' className='mb-1'>
                        التاريخ<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='date'
                        name='date'
                        id='date'
                        defaultValue={goal.date}
                        ref={dateRef}
                        required
                        className='border border-gray-300 rounded px-2 py-1 '
                      />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='note' className='mb-1'>
                        ملاحظة
                      </label>
                      <textarea
                        className='border border-gray-300 rounded px-2 py-1 '
                        name='note'
                        id='note'
                        cols='1'
                        rows='3'
                        defaultValue={goal.note}
                        ref={noteRef}
                        placeholder='اكتب ملاحظة (ان وجدت)'></textarea>
                    </div>
                    <div className='mt-8 flex justify-center gap-x-4'>
                      <Button
                        title='حفظ'
                        type='submit'
                        action={() => closeModal()}
                      />
                      <Button
                        title='إلغاء'
                        action={() => closeModal()}
                        type='button'
                      />
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditGoalButton;
