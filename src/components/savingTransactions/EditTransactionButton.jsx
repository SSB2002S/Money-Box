import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import Button from "../Buttons/GlobalButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { editTransactions } from "../../features/transactions/transactionsSlice";

export default function EditTransaction({ dispatch, item }) {
  let [isOpen, setIsOpen] = useState(false);
  const idRef = useRef("");
  const titleRef = useRef("");
  const categoryRef = useRef("");
  const amountRef = useRef("");
  const typeRef = useRef("");
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
      id: idRef.current.value,
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
      type: typeRef.current.value,
      date: dateRef.current.value,
      note:
        noteRef.current.value === ""
          ? "لا توجد ملاحظات"
          : noteRef.current.value,
    };
    dispatch(editTransactions(data));
    titleRef.current.value = "";
    amountRef.current.value = "";
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
                        defaultValue={item.id}
                        disabled
                        className='bg-gray-300 text-gray-500 border border-gray-300 rounded px-2 py-1 '
                      />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='nameTransaction' className='mb-1'>
                        اسم المعاملة<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='text'
                        name='nameTransaction'
                        id='nameTransaction'
                        placeholder='ادخل اسم المعاملة'
                        ref={titleRef}
                        defaultValue={item.title}
                        required
                        className='border border-gray-300 rounded px-2 py-1 '
                      />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='type' className='mb-1'>
                        الفئة<span className='text-red-400'>*</span>
                      </label>
                      <select
                        className='border border-gray-300 rounded px-2 py-1'
                        name='type'
                        id='type'
                        required
                        defaultValue={item.category}
                        ref={categoryRef}>
                        <option value='الطعام والشراب'>الطعام والشراب</option>
                        <option value='التسوق'>التسوق</option>
                        <option value='إسكان'>إسكان</option>
                        <option value='النقل'>النقل</option>
                        <option value='الحياة والترفية'>الحياة والترفية</option>
                        <option value='الاتصالات والكمبيوتر'>
                          الاتصالات والكمبيوتر
                        </option>
                        <option value='استثمار'>استثمار</option>
                        <option value='دخل'>دخل</option>
                        <option value='أخرى'>أخرى</option>
                      </select>
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='money' className='mb-1'>
                        المبلغ<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='number'
                        name='money'
                        id='money'
                        placeholder='ادخل المبلغ'
                        required
                        defaultValue={item.amount}
                        ref={amountRef}
                        className='border border-gray-300 rounded px-2 py-1 '
                      />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='type' className='mb-1'>
                        النوع<span className='text-red-400'>*</span>
                      </label>
                      <select
                        className='border border-gray-300 rounded px-2 py-1'
                        name='type'
                        id='type'
                        ref={typeRef}
                        defaultValue={item.type}
                        required>
                        <option value='دخل'>دخل</option>
                        <option value='مصروف'>مصروف</option>
                      </select>
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor='date' className='mb-1'>
                        التاريخ<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='date'
                        name='date'
                        id='date'
                        defaultValue={item.date}
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
                        defaultValue={item.note}
                        ref={noteRef}
                        placeholder='اكتب ملاحظة (ان وجدت)'></textarea>
                    </div>
                    <div className='mt-8 flex justify-center gap-x-4'>
                      <Button
                        title={"حفظ"}
                        type={"submit"}
                        action={() => closeModal()}
                      />
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
