import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import Button from "./GlobalButton";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addGoal } from "../../features/goals/goalsSlice";
import { useDispatch } from "react-redux";

export default function AddGoal() {
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);
  const titleRef = useRef("");
  const moneyRef = useRef("");
  const dateRef = useRef("");
  const noteRef = useRef("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      title: titleRef.current.value,
      money: moneyRef.current.value,
      date: dateRef.current.value,
      note:
        noteRef.current.value === ""
          ? "لا توجد ملاحظات"
          : noteRef.current.value,
    };

    dispatch(addGoal(data));

    titleRef.current.value = "";
    moneyRef.current.value = "";
    dateRef.current.value = "";
    noteRef.current.value = "";
  };

  return (
    <>
      <div>
        <Button
          title={"اضافة هدف"}
          icon={<FontAwesomeIcon icon={faCrosshairs} />}
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
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-xl font-semibold leading-6 text-gray-900 text-center mb-4'>
                    اضافة هدف
                  </Dialog.Title>
                  <form onSubmit={handleForm} className='text-right'>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='nameTransaction' className='mb-1'>
                        عنوان الهدف<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='text'
                        name='nameTransaction'
                        id='nameTransaction'
                        placeholder='ادخل اسم المعاملة'
                        ref={titleRef}
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
                        ref={moneyRef}
                        required
                        className='border border-gray-300 rounded px-2 py-1 '
                      />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='date' className='mb-1'>
                        الموعد النهائي
                      </label>
                      <input
                        type='date'
                        name='date'
                        id='date'
                        placeholder='ادخل اسم المعاملة'
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
                        className='border border-gray-300 rounded px-2 py-1'
                        name='note'
                        id='note'
                        cols='1'
                        rows='3'
                        placeholder='اكتب ملاحظة (ان وجدت)'
                        ref={noteRef}></textarea>
                    </div>
                    <div className='mt-8 flex justify-center gap-x-4'>
                      <Button title={"اضافة هدف"} type={"submit"} />
                      <Button
                        title={"إلغاء"}
                        action={() => closeModal()}
                        type={"button"}
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
}
