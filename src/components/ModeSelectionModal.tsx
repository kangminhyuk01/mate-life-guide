
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

interface ModeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModeSelectionModal = ({ isOpen, onClose }: ModeSelectionModalProps) => {
  const navigate = useNavigate();

  const handleInformalMode = () => {
    onClose();
    navigate("/friendly-chat");
  };

  const handleFormalMode = () => {
    onClose();
    navigate("/formal-chat");
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
              <Dialog.Panel className="flex flex-col items-center p-8 text-base text-gray-900 bg-white border border-solid border-zinc-400 max-w-md shadow-lg rounded-lg">
                <Dialog.Title className="text-2xl font-semibold mb-6">모드 선택</Dialog.Title>

                <div className="flex flex-col gap-4 w-full">
                  <button 
                    className="py-4 px-6 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                    onClick={handleInformalMode}
                  >
                    반말 모드
                  </button>
                  <button 
                    className="py-4 px-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors"
                    onClick={handleFormalMode}
                  >
                    존댓말 모드
                  </button>
                </div>

                <button 
                  className="mt-6 text-gray-500 hover:text-gray-700"
                  onClick={onClose}
                >
                  취소
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModeSelectionModal;
