import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CollapsibleCategoryGroup from "@/components/chat/CollapsibleCategoryGroup";
import CategoryContent from "@/components/chat/CategoryContent";

const FormalChat = () => {
  const [isAcademicInfoOpen, setIsAcademicInfoOpen] = useState(false);
  const [isLectureInfoOpen, setIsLectureInfoOpen] = useState(false);
  const [isInternationalOpen, setIsInternationalOpen] = useState(false);
  const [isCampusInfoOpen, setIsCampusInfoOpen] = useState(false);

  const academicQuestions = [
    "1전공 졸업요건이 궁금합니다",
    "졸업하려면 몇학점 들어야하나요?",
    "계절학기는 언제 신청하나요?",
    "신입생은 언제 휴학신청이 가능한가요?",
    "예비군은 어떻게 신청하나요?",
    "휴학하고 싶은데 등록금 환불은 어떻게 하나요 ?",
  ];

  const lectureQuestions = [
    "수강신청은 어떻게 하나요?",
    "강의 평가는 어디서 볼 수 있나요?",
    "전공필수과목이 무엇인가요?",
    "수업 교재는 어디서 구매하나요?",
    "수업 출석은 어떻게 확인하나요?",
  ];

  const internationalQuestions = [
    "교환학생 신청 방법이 궁금해요",
    "해외 인턴십 프로그램은 어떻게 참여하나요?",
    "어학연수 프로그램이 있나요?",
    "외국인 친구를 사귈 수 있는 프로그램이 있나요?",
  ];

  const campusQuestions = [
    "도서관 운영시간이 어떻게 되나요?",
    "학생증 재발급은 어디서 하나요?",
    "기숙사 신청 방법이 궁금합니다",
    "학내 식당 메뉴는 어디서 확인하나요?",
    "셔틀버스 운영 시간을 알고 싶어요",
  ];

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
              <div className="flex flex-wrap gap-5 justify-between py-4 pr-3.5 pl-8 w-full bg-orange-400 bg-blend-normal max-md:pl-5 max-md:max-w-full">
                <div className="flex gap-10 my-auto text-neutral-800">
                  <h1 className="my-auto text-2xl font-extrabold tracking-tighter leading-none basis-auto">Campus Mate</h1>
                  <Link to="/home-logged-in" className="my-auto">Home</Link>
                  <a href="#" className="my-auto">Features</a>
                </div>
                <div className="flex gap-3">
                  <Link to="/" className="px-2.5 py-2 rounded-lg border-2 border-solid border-neutral-800 text-neutral-800">Log out</Link>
                  <button className="px-4 py-2 text-black bg-sky-100 rounded-lg border border-black border-solid">Try it free</button>
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
                    <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ba9228467889a5c4b8eb820f798a7329ba956025?placeholderIfAbsent=true" alt="AI Assistant" className="object-contain shrink-0 self-start aspect-square rounded-[90px] w-[45px]" />
                    <p className="self-start px-6 py-4 bg-gray-100 rounded-3xl max-md:px-5">
                      안녕하세요! 무슨 고민이 있으신가요?
                    </p>
                  </div>

                  {/* Category Accordions */}
                  <div className="w-full mt-4 space-y-3">
                    {/* 학사안내 Accordion */}
                    <CollapsibleCategoryGroup 
                      title="학사안내"
                      isOpen={isAcademicInfoOpen}
                      setIsOpen={setIsAcademicInfoOpen}
                      className="bg-orange-100"
                    >
                      <CategoryContent questions={academicQuestions} />
                    </CollapsibleCategoryGroup>

                    {/* 강의안내 Accordion */}
                    <CollapsibleCategoryGroup
                      title="강의안내"
                      isOpen={isLectureInfoOpen}
                      setIsOpen={setIsLectureInfoOpen}
                      className="bg-orange-100"
                    >
                      <CategoryContent questions={lectureQuestions} />
                    </CollapsibleCategoryGroup>

                    {/* 국제교류 Accordion */}
                    <CollapsibleCategoryGroup
                      title="국제교류"
                      isOpen={isInternationalOpen}
                      setIsOpen={setIsInternationalOpen}
                      className="bg-orange-100"
                    >
                      <CategoryContent questions={internationalQuestions} />
                    </CollapsibleCategoryGroup>

                    {/* 교내문의 Accordion */}
                    <CollapsibleCategoryGroup
                      title="교내문의"
                      isOpen={isCampusInfoOpen}
                      setIsOpen={setIsCampusInfoOpen}
                      className="bg-orange-100"
                    >
                      <CategoryContent questions={campusQuestions} />
                    </CollapsibleCategoryGroup>
                  </div>

                  {/* Rating Icons */}
                  <div className="flex gap-4 self-center mt-5 w-36 max-w-full">
                    <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/acfef5a3f2e547f57763a1d1d7d0cb71eae6bf69?placeholderIfAbsent=true" alt="Rating" className="object-contain shrink-0 w-4 aspect-square" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/c68460d4dcbd2af7d140472ba2d3beb0f7956dcd?placeholderIfAbsent=true" alt="Rating" className="object-contain shrink-0 w-4 aspect-square" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ee60d28949bfbde443907a2c4a0076f64ac3b1f3?placeholderIfAbsent=true" alt="Rating" className="object-contain shrink-0 w-4 aspect-square" />
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
                      <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/a6c2400a34b73a8b17b274c0a1eb691e50108a10?placeholderIfAbsent=true" alt="Send" className="object-contain shrink-0 w-8 rounded-2xl aspect-square" />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Mode Toggle Button */}
            <Link to="/friendly-chat" className="flex gap-2 self-end text-base font-bold text-sky-500 whitespace-nowrap mt-[599px] max-md:mt-10">
              <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/be24feca349b831dcc29c74056abcd789b39f289?placeholderIfAbsent=true" alt="Mode toggle" className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]" />
              <span className="my-auto">반말모드하기<br /></span>
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

export default FormalChat;
