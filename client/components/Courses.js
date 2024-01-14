import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./Navbar";

// install Swiper modules

const Course = ({ course }) => (
  <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
    <Card className="course-card">
      <Card.Body className="course-card-body">
        <Card.Title className="course-card-title">{course.label}</Card.Title>
        <Card.Text as="div">
          Go to{" "}
          <a href={course.path} className="course-link">
            {course.label}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);
const CourseCategory = ({ category, isOpen, onClick }) => (
  <Card className="category-card mb-4">
    <Card.Body>
      <Card.Title className="course-category-title" onClick={onClick}>
        {category.label}
      </Card.Title>
      {isOpen && (
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          freeMode={true}
          className="course-category-swiper">
          <Row noGutters>
            {category.items.map((course, index) => (
              <SwiperSlide key={index}>
                <Course course={course} />
              </SwiperSlide>
            ))}
          </Row>
        </Swiper>
      )}
    </Card.Body>
  </Card>
);
const CoursesList = ({ courses }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (label) => {
    setOpenCategory(openCategory === label ? null : label);
  };

  return (
    <div>
      {courses.map((category, index) => (
        <CourseCategory
          key={index}
          category={category}
          isOpen={openCategory === category.label}
          onClick={() => handleCategoryClick(category.label)}
        />
      ))}
    </div>
  );
};

const CourseComponent = () => {
  // Here we define the course data
  const scienceItems = [
    {
      label: "Basic",
      items: [
        {
          label: "Human Body Basics",
          path: "/science/age-5-6/human-body-basics",
        },
        { label: "Plants & Animals", path: "/science/age-5-6/plants-animals" },
        { label: "Weather", path: "/science/age-5-6/weather" },
      ],
    },
    {
      label: "Intermediate",
      items: [
        { label: "Earth Science", path: "/science/age-7-8/earth-science" },
        { label: "Life Cycles", path: "/science/age-7-8/life-cycles" },
        { label: "Simple Geology", path: "/science/age-7-8/simple-geology" },
      ],
    },
    {
      label: "Advanced",
      items: [
        {
          label: "Earth Sciences Advanced",
          path: "/science/age-9/earth-sciences-advanced",
        },
        { label: "Physics Basics", path: "/science/age-9/physics-basics" },
        {
          label: "Scientific Method",
          path: "/science/age-9/scientific-method",
        },
      ],
    },
  ];
  const mathItems = [
    {
      label: "Basic",
      items: [
        { label: "Counting", path: "/math/age-5-6/counting" },
        { label: "Basic Addition", path: "/math/age-5-6/basic-addition" },
        { label: "Basic Subtraction", path: "/math/age-5-6/basic-subtraction" },
        { label: "Shapes", path: "/math/age-5-6/shapes" },
      ],
    },
    {
      label: "Intermediate",
      items: [
        { label: "Advanced Addition", path: "/math/age-7-8/advanced-addition" },
        {
          label: "Advanced Subtraction",
          path: "/math/age-7-8/advanced-subtraction",
        },
        { label: "Multiplication", path: "/math/age-7-8/multiplication" },
        { label: "Division", path: "/math/age-7-8/division" },
      ],
    },
    {
      label: "Advanced",
      items: [
        {
          label: "Advanced Multiplication",
          path: "/math/age-9/advanced-multiplication",
        },
        { label: "Advanced Division", path: "/math/age-9/advanced-division" },
        { label: "Fractions", path: "/math/age-9/fractions" },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl text-red-500 font-bold">Courses</h1>
        </div>
        <h2>Science Courses</h2>
        <CoursesList courses={scienceItems} />
        <h2>Math Courses</h2>
        <CoursesList courses={mathItems} />
      </div>
    </div>
  );
};

export default CourseComponent;
