"use client";
import { useEffect, useState } from "react";

export default function EventModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 모달 표시 여부 확인
    const hideModal = localStorage.getItem("hideEventModal");
    const lastShownDate = localStorage.getItem("lastShownModalDate");
    const today = new Date().toDateString();

    // 오늘 안보기를 선택하지 않았거나, 날짜가 바뀌었으면 모달 표시
    if (!hideModal || (lastShownDate && lastShownDate !== today)) {
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const hideForToday = () => {
    localStorage.setItem("hideEventModal", "true");
    localStorage.setItem("lastShownModalDate", new Date().toDateString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-[72px] left-0 right-0 z-30 bg-red-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold mr-3">3월 특별 이벤트:</span>
            <span>
              신규 회원 가입 시 원포인트 레슨 1회 무료! FULL SWING 시스템 분석
              50% 할인!
            </span>
          </div>
          <div className="flex items-center">
            <button
              onClick={hideForToday}
              className="text-white text-sm underline mr-4 hover:text-gray-200"
            >
              오늘 하루 보지 않기
            </button>
            <button
              onClick={closeModal}
              className="bg-white text-red-700 px-2 py-1 rounded text-sm font-bold hover:bg-gray-100"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
