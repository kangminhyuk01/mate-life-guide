
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
              <Dialog.Panel className="overflow-hidden bg-white border border-solid border-zinc-400 shadow-lg rounded-lg max-w-2xl">
                <div className="flex gap-5 p-6 max-md:flex-col">
                  {/* Left Side - 반말 모드 (Informal) */}
                  <div className="w-3/4 max-md:w-full">
                    <div className="flex flex-col">
                      <div className="self-start">
                        <button onClick={onClose} className="focus:outline-none">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/6ecf6dbea564e971e9346506a4c789397cace8ea?placeholderIfAbsent=true"
                            alt="닫기"
                            className="object-contain aspect-square w-[31px]"
                          />
                        </button>
                      </div>
                      <div className="flex flex-col items-start max-w-full">
                        <Dialog.Title className="text-2xl font-semibold mb-6 text-center text-neutral-800">
                          모드 선택
                        </Dialog.Title>
                        <div className="flex flex-col items-center">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/fb062b47b1fd21abd84d9d722e97e3e5219623cd?placeholderIfAbsent=true"
                            alt="반말 모드 캐릭터"
                            className="object-contain mt-8 max-w-full aspect-square rounded-[90px] w-[122px]"
                          />
                          <button 
                            className="px-6 py-3 mt-6 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors text-center"
                            onClick={handleInformalMode}
                          >
                            반말 모드
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - 존댓말 모드 (Formal) */}
                  <div className="w-1/4 max-md:w-full">
                    <div className="flex flex-col items-center mt-20 text-base text-black max-md:mt-10">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/dd4085cd3b49e838fbd89b524e7a94bbc12d3eed?placeholderIfAbsent=true"
                        alt="존댓말 모드 캐릭터"
                        className="object-contain aspect-square rounded-[90px] w-[122px]"
                      />
                      <button
                        className="px-4 py-3 mt-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors text-center"
                        onClick={handleFormalMode}
                      >
                        존댓말 모드
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModeSelectionModal;
