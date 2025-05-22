
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CollapsibleCategoryGroup from "./CollapsibleCategoryGroup";
import CategoryContent from "./CategoryContent";
import ChatInputField from "./ChatInputField";

const ChatContent = () => {
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
    <article className="grow shrink-0 px-20 bg-white basis-0 rounded-[30px] w-fit max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-start pt-12 bg-white rounded-2xl max-md:max-w-full">
        {/* Chat Messages */}
        <div className="flex flex-col items-end ml-5 max-w-full w-[286px] max-md:ml-2.5">
          <div className="flex gap-3.5 self-stretch text-xs text-black">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/be24feca349b831dcc29c74056abcd789b39f289?placeholderIfAbsent=true" 
              alt="Bot avatar" 
              className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]" 
            />
            <p className="self-start px-6 py-4 bg-gray-100 rounded-3xl max-md:px-5">안녕! 무슨 고민있어?</p>
          </div>

          {/* Category Accordions */}
          <div className="w-full mt-4 space-y-3">
            {/* 학사안내 Accordion */}
            <CollapsibleCategoryGroup 
              title="학사안내"
              isOpen={isAcademicInfoOpen}
              setIsOpen={setIsAcademicInfoOpen}
            >
              <CategoryContent questions={academicQuestions} />
            </CollapsibleCategoryGroup>

            {/* 강의안내 Accordion */}
            <CollapsibleCategoryGroup
              title="강의안내"
              isOpen={isLectureInfoOpen}
              setIsOpen={setIsLectureInfoOpen}
            >
              <CategoryContent questions={lectureQuestions} />
            </CollapsibleCategoryGroup>

            {/* 국제교류 Accordion */}
            <CollapsibleCategoryGroup
              title="국제교류"
              isOpen={isInternationalOpen}
              setIsOpen={setIsInternationalOpen}
            >
              <CategoryContent questions={internationalQuestions} />
            </CollapsibleCategoryGroup>

            {/* 교내문의 Accordion */}
            <CollapsibleCategoryGroup
              title="교내문의"
              isOpen={isCampusInfoOpen}
              setIsOpen={setIsCampusInfoOpen}
            >
              <CategoryContent questions={campusQuestions} />
            </CollapsibleCategoryGroup>
          </div>

          {/* Rating Icons */}
          <div className="flex gap-4 self-center mt-5 w-36 max-w-full">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/4c79a35e1da147337349912ccebc73d6dc963b30?placeholderIfAbsent=true" 
              alt="Rating" 
              className="object-contain shrink-0 w-4 aspect-square" 
            />
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/4efe9231589d86c2ad28e2501aadf10963e6f8a3?placeholderIfAbsent=true" 
              alt="Rating" 
              className="object-contain shrink-0 w-4 aspect-square" 
            />
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/13e25037826993bb8909b625c677135340b1d803?placeholderIfAbsent=true" 
              alt="Rating" 
              className="object-contain shrink-0 w-4 aspect-square" 
            />
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/df37983b6f44b7533db8ed2bca748cc90f60521c?placeholderIfAbsent=true" 
              alt="Rating" 
              className="object-contain shrink-0 w-4 aspect-square" 
            />
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/cc4d76aa6301564d7603ee8f9fdc2f0b31990c7a?placeholderIfAbsent=true" 
              alt="Rating" 
              className="object-contain shrink-0 w-4 aspect-square" 
            />
          </div>
        </div>

        {/* Message Input Field */}
        <ChatInputField />
      </div>
    </article>
  );
};

export default ChatContent;
