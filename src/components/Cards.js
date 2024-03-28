import { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const getCourses = () => {
    if (!courses) {
      return [];
    }
    if (category === "All") {
      return Object.values(courses).flat();
    } else {
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card key={course.id} Course={course} />
      ))}
    </div>
  );
};

export default Cards;
