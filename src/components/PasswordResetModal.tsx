
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface PasswordResetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PasswordResetModal = ({ isOpen, onClose }: PasswordResetModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex overflow-hidden flex-col items-center pt-5 pr-20 pb-32 pl-5 text-base leading-none text-gray-900 bg-white border border-solid border-zinc-400 max-w-[671px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pr-5 max-md:pb-24">
                <header className="self-start w-full">
                  <button 
                    type="button" 
                    onClick={onClose}
                    aria-label="Close" 
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <img 
                      src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/6ecf6dbea564e971e9346506a4c789397cace8ea?placeholderIfAbsent=true" 
                      alt="Close" 
                      className="object-contain aspect-square w-[31px]"
                    />
                  </button>
                </header>

                <h1 className="mt-12 text-3xl font-semibold tracking-tighter leading-none text-center text-neutral-800 max-md:mt-10">
                  비밀번호 재설정
                </h1>

                <form className="w-full max-w-[400px] mt-12 max-md:mt-10" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="user-id" className="sr-only">ID</label>
                    <input
                      type="text"
                      id="user-id"
                      placeholder="ID"
                      className="w-full px-3 py-2 tracking-normal bg-white rounded-lg border-2 border-solid border-zinc-400 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="sr-only">비밀번호</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="비밀번호"
                      className="w-full px-3 py-2 tracking-normal bg-white rounded-lg border-2 border-solid border-zinc-400 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="confirm-password" className="sr-only">비밀번호 확인</label>
                    <input
                      type="password"
                      id="confirm-password"
                      placeholder="비밀번호 확인"
                      className="w-full px-3 py-2 tracking-normal bg-white rounded-lg border-2 border-solid border-zinc-400 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-16 pt-2 pb-3.5 font-medium leading-5 text-black bg-sky-500 rounded-lg text-center hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 max-md:px-5"
                  >
                    비밀번호 변경
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PasswordResetModal;
