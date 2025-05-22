
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ModeSelectionModal from "@/components/ModeSelectionModal";

const HomeLoggedIn = () => {
  const navigate = useNavigate();
  const [isModeSelectionOpen, setIsModeSelectionOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModeSelectionOpen(true);
  };

  return (
    <div className="overflow-hidden pt-9 pb-24 bg-slate-50">
      <header className="flex flex-col pt-4 w-full text-base font-medium leading-none bg-slate-50 text-neutral-800 max-md:max-w-full">
        <Navbar isLoggedIn={true} />
      </header>

      <main className="pb-24 mt-36 w-full bg-slate-50 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
        <section className="flex flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex z-10 flex-col mb-0 ml-3 w-full max-w-[1159px] max-md:mb-2.5 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-4/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-wrap gap-2.5 text-9xl tracking-tighter leading-none text-center text-neutral-800 max-md:text-4xl">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/01767757719eef5d052aeb1a221f393e2ab6a1af?placeholderIfAbsent=true"
                        className="object-contain shrink-0 self-start mt-4 max-w-full aspect-square rounded-[90px] w-[106px]"
                        alt="Campus Mate logo"
                      />
                      <h2 className="flex-auto w-[742px] max-md:max-w-full max-md:text-4xl">
                        Campus Mate
                      </h2>
                    </div>
                    <div className="flex flex-col items-start self-center mt-20 max-w-full text-xl font-bold leading-tight w-[467px] max-md:mt-10">
                      <p className="text-sky-500">Campus mate AI 출시 !</p>
                      <div className="shrink-0 mt-1 h-0.5 border-2 border-sky-500 border-solid w-[110px]"></div>
                      <p className="self-stretch mt-10 text-2xl leading-6 text-black max-md:mt-10 max-md:max-w-full">
                        단순 FAQ 응대가 아닌,
                        <br />
                        여러분들의 대학생활을 책임지는 똑똑한 상담사!
                      </p>
                      <button 
                        className="px-8 py-3 mt-8 whitespace-nowrap bg-blue-100 text-neutral-800 hover:bg-blue-200 transition-colors max-md:px-5"
                        onClick={handleGetStarted}
                      >
                        시작하기
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                  <div className="flex overflow-hidden flex-col py-3 mx-auto w-full bg-white border-black border-solid border-[5px] rounded-[44px] max-md:mt-10">
                    <div className="flex flex-col pr-4 pl-11 w-full text-xs text-black max-md:pl-5">
                      <div className="flex shrink-0 self-center bg-black h-[17px] rounded-[50px] w-[77px]"></div>
                      <div className="flex gap-1.5 self-end mt-5">
                        <div className="px-4 py-1.5 bg-white border border-sky-600 border-solid rounded-[30px]">
                          캠퍼스 메이트는 어떤 서비스야?
                        </div>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/cc73dc119c0b737953dad0c0fdbd47bcbf791cee?placeholderIfAbsent=true"
                          className="object-contain shrink-0 self-start aspect-square w-[26px]"
                          alt="Send icon"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col px-2.5 mt-3.5 w-full text-xs text-black">
                      <div className="flex gap-1">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b27d8203ce31f13bf8f0fe8143c4cfdda9b5c164?placeholderIfAbsent=true"
                          className="object-contain shrink-0 self-start aspect-square rounded-[90px] w-[38px]"
                          alt="Assistant avatar"
                        />
                        <p className="px-3.5 pt-3.5 pb-6 bg-gray-100 rounded-3xl">
                          캠퍼스 메이트는 국민대학교 학생들의 학교 생활 전반의 도움을 주는 챗봇이에요.
                        </p>
                      </div>
                      <div className="flex gap-1.5 self-end mt-5 max-md:mr-1.5">
                        <div className="px-4 py-1.5 bg-white border border-sky-600 border-solid rounded-[30px]">
                          캠퍼스 메이트의 특징은 뭐야?
                        </div>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/a1f84158add738f07b4ffaba4d4fc63e5bbb16b0?placeholderIfAbsent=true"
                          className="object-contain shrink-0 self-start aspect-square w-[26px]"
                          alt="Send icon"
                        />
                      </div>
                    </div>
                    <div className="flex gap-1 mt-4 mr-2.5 text-xs text-black max-md:ml-2.5">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/11b4e3b612d8937de3a4065c154b64e43e787d59?placeholderIfAbsent=true"
                        className="object-contain shrink-0 self-start aspect-square rounded-[90px] w-[38px]"
                        alt="Assistant avatar"
                      />
                      <p className="px-3.5 pt-2 pb-4 bg-gray-100 rounded-3xl">
                        캠퍼스 메이트는 친숙한 느낌을 주는 반말모드와 진중한 느낌을 주는 존댓말모드 중 선택해서 이용할 수 있어.
                      </p>
                    </div>
                    <div className="flex gap-5 justify-between items-start py-1 pr-2.5 pl-1 mt-12 mr-3.5 ml-3 rounded-3xl border-2 border-solid bg-slate-600 bg-opacity-10 border-black border-opacity-0 max-md:mx-2.5 max-md:mt-10">
                      <div className="flex gap-1.5 text-xs leading-3 text-gray-800">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ee214c25a5dbc72790c907ee1053a68caddb7947?placeholderIfAbsent=true"
                          className="object-contain shrink-0 aspect-[1.06] w-[17px]"
                          alt="Input icon"
                        />
                        <label htmlFor="message" className="sr-only">Type your message</label>
                        <input
                          type="text"
                          id="message"
                          placeholder="Type your message..."
                          className="bg-transparent border-none outline-none text-xs"
                        />
                      </div>
                      <div className="flex gap-1.5">
                        <button aria-label="Voice input">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/35055ae13a60984ceaaabfd7fe173ca5a106e22c?placeholderIfAbsent=true"
                            className="object-contain shrink-0 w-2.5 aspect-[0.71]"
                            alt="Voice input"
                          />
                        </button>
                        <button aria-label="Send message">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/4534aef4d748af8c61997bff29698abd3f4c46f9?placeholderIfAbsent=true"
                            className="object-contain shrink-0 self-start aspect-square w-[11px]"
                            alt="Send message"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex shrink-0 self-center mt-5 bg-black h-[7px] rounded-[50px] w-[77px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/a48df6a4a3cbb6c5268aaf09bd426e03e54a68fd?placeholderIfAbsent=true"
              className="object-contain self-center mt-7 ml-5 w-full aspect-[1.6] max-w-[1011px] max-md:max-w-full"
              alt="Campus Mate features"
            />
          </div>
        </section>
      </main>

      <Footer />

      {/* Mode Selection Modal */}
      <ModeSelectionModal 
        isOpen={isModeSelectionOpen}
        onClose={() => setIsModeSelectionOpen(false)}
      />
    </div>
  );
};

export default HomeLoggedIn;
