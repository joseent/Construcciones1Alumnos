// @ts-check
import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NavBarTeachers from "../components/general/navBar/NavBarTeachers";
import SeminarsEdit from "../components/publicHomeEdit/SeminarsEdit";
import PublicityEdit from "../components/publicHomeEdit/PublicityEdit";
import ClassRoomEdit from "../components/publicHomeEdit/ClassRoomEdit";

export default function PublicHomeTeachers() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bgColor p-6 divide-y divide-yellow-600">
        <NavBarTeachers />
        <div className="mb-20">
          {/* seminars */}
          <SeminarsEdit />
        </div>
        <div className="mb-20">
          {/* publicity */}
          <PublicityEdit />
        </div>
        <div className="mb-20">
          {/* pictures */}
          <ClassRoomEdit />
        </div>
      </div>
    </div>
  );
}
