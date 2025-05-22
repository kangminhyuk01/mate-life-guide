import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const FriendlyChat = () => {
  const [isAcademicInfoOpen, setIsAcademicInfoOpen] = useState(false);
  const [isLectureInfoOpen, setIsLectureInfoOpen] = useState(false);
  const [isInternationalOpen, setIsInternationalOpen] = useState(false);
  const [isCampusInfoOpen, setIsCampusInfoOpen] = useState(false);

  return (
    <main className="flex overflow-hidden flex-col pt-14 pb-32 bg-white max-md:pb-24">
      <div className="flex self-center w-full max-w-[1362px] max-md:max-w-full">
        {/* Side Panel Navigation */}
        <nav className="overflow-hidden self-start py-6 mt-28 text-base font-medium leading-none whitespace-nowrap bg-white text-neutral-800 max-md:mt-10">
          <ul>
            <li className="px-4 py-2 bg-white rounded-lg">Dashboard</li>
            <li className="px-4 py-2 bg-white rounded-lg max-md:pr-5">Messages</li>
            <li className="px-4 py-2 bg-white rounded-lg max-md:pr-5">Settings</li>
            <li className="px-4 py-2 bg-white rounded-lg max-md:pr-5">Help</li>
          </ul>
        </nav>

        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          {/* Header Section */}
          <header className="flex flex-col justify-center items-center px-20 py-7 text-base font-medium leading-none bg-white max-md:px-5 max-md:max-w-full">
            <div className="overflow-hidden px-0.5 max-w-full rounded-2xl bg-cyan-700 bg-opacity-20 shadow-[0px_4px_24px_rgba(0,0,0,0.16)] w-[886px]">
              <div className="flex flex-wrap gap-5 justify-between py-4 pr-3.5 pl-8 w-full bg-sky-100 bg-blend-normal max-md:pl-5 max-md:max-w-full">
                <div className="flex gap-10 my-auto text-neutral-800">
                  <h1 className="my-auto text-2xl font-extrabold tracking-tighter leading-none basis-auto">Campus Mate</h1>
                  <Link to="/home-logged-in" className="my-auto">Home</Link>
                  <a href="#" className="my-auto">Features</a>
                </div>
                <div className="flex gap-3">
                  <Link to="/" className="px-2.5 py-2 rounded-lg border-2 border-solid border-slate-600 border-opacity-20 text-neutral-800">
                    Log out
                  </Link>
                  <button className="px-4 py-2 text-white bg-sky-500 rounded-lg">Try it free</button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Chat Interface */}
          <section className="flex z-10 flex-wrap gap-10 self-end -mt-4 w-full max-w-[1189px] max-md:mr-2.5 max-md:max-w-full">
            <article className="grow shrink-0 px-20 bg-white basis-0 rounded-[30px] w-fit max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col items-start pt-12 bg-white rounded-2xl max-md:max-w-full">
                {/* Chat Messages */}
                <div className="flex flex-col items-end ml-5 max-w-full w-[286px] max-md:ml-2.5">
                  <div className="flex gap-3.5 self-stretch text-xs text-black">
                    <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/be24feca349b831dcc29c74056abcd789b39f289?placeholderIfAbsent=true" alt="Bot avatar" className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]" />
                    <p className="self-start px-6 py-4 bg-gray-100 rounded-3xl max-md:px-5">안녕! 무슨 고민있어?</p>
                  </div>

                  {/* Category Accordions */}
                  <div className="w-full mt-4 space-y-3">
                    {/* 학사안내 Accordion */}
                    <Collapsible
                      open={isAcademicInfoOpen}
                      onOpenChange={setIsAcademicInfoOpen}
                      className="w-full border border-dashed border-purple-500 rounded-md p-2"
                    >
                      <CollapsibleTrigger className="flex justify-between items-center w-full px-5 py-3.5 bg-sky-100 rounded-xl">
                        <span className="text-sm">학사안내</span>
                        <ChevronDown className="h-5 w-5 transition-transform duration-200" style={{ transform: isAcademicInfoOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <div className="flex flex-col space-y-3">
                          <section className="flex flex-col self-start px-3 pt-3 pb-6 bg-white rounded-xl border border-black border-solid">
                            <p className="self-start">1전공 졸업요건이 궁금합니다</p>
                            <p className="mt-3.5">졸업하려면 몇학점 들어야하나요?</p>
                            <p className="self-start mt-3.5">계절학기는 언제 신청하나요?</p>
                            <p className="mt-2.5">신입생은 언제 휴학신청이 가능한가요?</p>
                            <p className="self-start mt-3.5">예비군은 어떻게 신청하나요?</p>
                            <p className="mt-3.5">휴학하고 싶은데 등록금 환불은 어떻게 하나요 ?</p>
                          </section>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* 강의안내 Accordion */}
                    <Collapsible
                      open={isLectureInfoOpen}
                      onOpenChange={setIsLectureInfoOpen}
                      className="w-full border border-dashed border-purple-500 rounded-md p-2"
                    >
                      <CollapsibleTrigger className="flex justify-between items-center w-full px-5 py-3.5 bg-sky-100 rounded-xl">
                        <span className="text-sm">강의안내</span>
                        <ChevronDown className="h-5 w-5 transition-transform duration-200" style={{ transform: isLectureInfoOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <div className="flex flex-col space-y-3">
                          <section className="flex flex-col self-start px-3 pt-3 pb-6 bg-white rounded-xl border border-black border-solid">
                            <p className="self-start">수강신청은 어떻게 하나요?</p>
                            <p className="mt-3.5">강의 평가는 어디서 볼 수 있나요?</p>
                            <p className="self-start mt-3.5">전공필수과목이 무엇인가요?</p>
                            <p className="mt-2.5">수업 교재는 어디서 구매하나요?</p>
                            <p className="self-start mt-3.5">수업 출석은 어떻게 확인하나요?</p>
                          </section>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* 국제교류 Accordion */}
                    <Collapsible
                      open={isInternationalOpen}
                      onOpenChange={setIsInternationalOpen}
                      className="w-full border border-dashed border-purple-500 rounded-md p-2"
                    >
                      <CollapsibleTrigger className="flex justify-between items-center w-full px-5 py-3.5 bg-sky-100 rounded-xl">
                        <span className="text-sm">국제교류</span>
                        <ChevronDown className="h-5 w-5 transition-transform duration-200" style={{ transform: isInternationalOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <div className="flex flex-col space-y-3">
                          <section className="flex flex-col self-start px-3 pt-3 pb-6 bg-white rounded-xl border border-black border-solid">
                            <p className="self-start">교환학생 신청 방법이 궁금해요</p>
                            <p className="mt-3.5">해외 인턴십 프로그램은 어떻게 참여하나요?</p>
                            <p className="self-start mt-3.5">어학연수 프로그램이 있나요?</p>
                            <p className="mt-2.5">외국인 친구를 사귈 수 있는 프로그램이 있나요?</p>
                          </section>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* 교내문의 Accordion */}
                    <Collapsible
                      open={isCampusInfoOpen}
                      onOpenChange={setIsCampusInfoOpen}
                      className="w-full border border-dashed border-purple-500 rounded-md p-2"
                    >
                      <CollapsibleTrigger className="flex justify-between items-center w-full px-5 py-3.5 bg-sky-100 rounded-xl">
                        <span className="text-sm">교내문의</span>
                        <ChevronDown className="h-5 w-5 transition-transform duration-200" style={{ transform: isCampusInfoOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <div className="flex flex-col space-y-3">
                          <section className="flex flex-col self-start px-3 pt-3 pb-6 bg-white rounded-xl border border-black border-solid">
                            <p className="self-start">도서관 운영시간이 어떻게 되나요?</p>
                            <p className="mt-3.5">학생증 재발급은 어디서 하나요?</p>
                            <p className="self-start mt-3.5">기숙사 신청 방법이 궁금합니다</p>
                            <p className="mt-2.5">학내 식당 메뉴는 어디서 확인하나요?</p>
                            <p className="self-start mt-3.5">셔틀버스 운영 시간을 알고 싶어요</p>
                          </section>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  {/* Rating Icons */}
                  <div className="flex gap-4 self-center mt-5 w-36 max-w-full">
                    <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/4c79a35e1da147337349912ccebc73d6dc963b30?placeholderIfAbsent=true" alt="Rating" className="object-contain shrink-0 w-4 aspect-square" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/4efe9231589d86c2ad28e2501aadf10963e6f8a3?placeholderIfAbsent=true" alt="Rating" className="object-contain shrink-0 w-4 aspect-square" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/13e25037826993bb8909b625c677135340b1d803?placeholderIfAbsent=true" alt="Rating" className="object-contain shrink-0 w-4 aspect-square" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/df37983b6f44b7533db8ed2bca748cc90f60521c?placeholderIfAbsent=true" alt="Rating" className="object-contain shrink-0 w-4 aspect-square" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/cc4d76aa6301564d7603ee8f9fdc2f0b31990c7a?placeholderIfAbsent=true" alt="Rating" className="object-contain shrink-0 w-4 aspect-square" />
                  </div>
                </div>

                {/* Message Input Field */}
                <div className="flex overflow-hidden flex-col justify-center px-16 py-4 mt-64 mr-0 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-wrap gap-5 justify-between py-0.5 pr-0.5 pl-2 w-full rounded-3xl border-2 border-solid bg-slate-600 bg-opacity-10 border-black border-opacity-0 max-md:max-w-full">
                    <div className="flex gap-2 my-auto text-base leading-none text-gray-800">
                      <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/94713650efb2b00fec2a444e763b1724eeeddd85?placeholderIfAbsent=true" alt="Message icon" className="object-contain shrink-0 w-6 aspect-square" />
                      <span className="my-auto basis-auto">Type your message...</span>
                    </div>
                    <div className="flex gap-2">
                      <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/695030f406df7986e70c34a8c1b98227897a7288?placeholderIfAbsent=true" alt="Attachment" className="object-contain shrink-0 my-auto w-6 aspect-square" />
                      <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/91d2a382ed5e6c3045c5a0f3d2382f45da888c52?placeholderIfAbsent=true" alt="Send" className="object-contain shrink-0 w-8 rounded-2xl aspect-square" />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Mode Toggle Button */}
            <Link to="/formal-chat" className="flex gap-2 self-end text-base font-bold text-sky-500 whitespace-nowrap mt-[599px] max-md:mt-10">
              <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ba9228467889a5c4b8eb820f798a7329ba956025?placeholderIfAbsent=true" alt="Mode toggle" className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]" />
              <span className="my-auto">존댓말모드하기<br /></span>
            </Link>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col pt-24 pb-8 w-full text-base font-medium leading-none text-gray-800 bg-white max-md:max-w-full">
        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/72736308ef58234350c9db67fdcac42557a7e0ba?placeholderIfAbsent=true" alt="Divider" className="object-contain w-full aspect-[1000] max-md:max-w-full" />

        <div className="flex gap-5 justify-between self-center mt-10 w-full max-w-[1218px] max-md:max-w-full">
          {/* Company Logo and Info */}
          <div className="self-start mt-2 text-2xl font-extrabold tracking-tighter leading-none text-cyan-800">
            <h2>Campus Mate</h2>
            <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/737595f120a8f9e6edc2a45562435d7a13ca300b?placeholderIfAbsent=true" alt="Payment options" className="object-contain mt-14 w-24 aspect-[4] max-md:mt-10" />
          </div>

          {/* Footer Links */}
          <nav className="flex flex-col">
            <h3 className="text-neutral-800">Company</h3>
            <a href="#" className="mt-2 max-md:mr-1.5">About Us</a>
            <a href="#" className="self-start mt-2">Careers</a>
            <a href="#" className="self-start mt-2">Press</a>
          </nav>

          <nav className="flex flex-col items-start">
            <h3 className="text-neutral-800">Support</h3>
            <a href="#" className="mt-2">Help Center</a>
            <a href="#" className="mt-2">Contact Us</a>
            <a href="#" className="self-stretch mt-2">Privacy Policy</a>
          </nav>

          <nav className="flex flex-col items-start self-start">
            <h3 className="text-neutral-800">Legal</h3>
            <a href="#" className="self-stretch mt-2">Terms of Service</a>
            <a href="#" className="mt-2">Cookie Policy</a>
          </nav>

          <nav className="flex flex-col items-start whitespace-nowrap">
            <h3 className="text-neutral-800">Social</h3>
            <a href="#" className="self-stretch mt-2">Facebook</a>
            <a href="#" className="mt-2">Twitter</a>
            <a href="#" className="mt-2">LinkedIn</a>
          </nav>
        </div>
      </footer>
    </main>
  );
};

export default FriendlyChat;
