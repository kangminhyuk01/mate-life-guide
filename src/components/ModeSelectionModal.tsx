
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
              <Dialog.Panel className="overflow-hidden bg-white border border-solid border-zinc-400 shadow-lg rounded-lg w-full max-w-md">
                <div className="flex flex-col items-center p-8">
                  <div className="self-start absolute">
                    <button onClick={onClose} className="focus:outline-none">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/6ecf6dbea564e971e9346506a4c789397cace8ea?placeholderIfAbsent=true"
                        alt="닫기"
                        className="object-contain aspect-square w-[31px]"
                      />
                    </button>
                  </div>

                  <Dialog.Title className="text-3xl font-semibold text-center text-neutral-800 mb-12 mt-4">
                    MODE 선택
                  </Dialog.Title>

                  <div className="flex justify-center gap-20 w-full">
                    {/* Left Side - 반말 모드 (Informal) with blue squirrel */}
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-amber-100 p-4 w-32 h-32 flex items-center justify-center mb-6">
                        <img
                          src="/lovable-uploads/9a6a6880-3046-4052-bb95-1372437df7f9.png"
                          alt="반말 모드 캐릭터"
                          className="object-contain w-24 h-24"
                        />
                      </div>
                      <button 
                        className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-black rounded-lg transition-colors text-center w-24"
                        onClick={handleInformalMode}
                      >
                        반말 모드
                      </button>
                    </div>
                    
                    {/* Right Side - 존댓말 모드 (Formal) with brown squirrel */}
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-amber-100 p-4 w-32 h-32 flex items-center justify-center mb-6">
                        <img
                          src="/lovable-uploads/9a6a6880-3046-4052-bb95-1372437df7f9.png"
                          alt="존댓말 모드 캐릭터"
                          className="object-contain w-24 h-24"
                        />
                      </div>
                      <button
                        className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-black rounded-lg transition-colors text-center w-24"
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
