import React from "react";
import Icon from "@mdi/react";
import images from "../assets/images.jpg";
import safari from "../assets/safari.png";
import telebirr from "../assets/Telebirr.png";
import {
  mdiWeb,
  mdiCellphone,
  mdiServer,
  mdiChartAreaspline,
  mdiAccountQuestion,
  mdiSchool,
} from "@mdi/js";

export const servicesData = [
  {
    title: "Web Development",
    description:
      "Tailored software solutions designed to meet the specific needs of a business or industry, including web applications, mobile apps, and enterprise software",
    icon: mdiWeb,
  },
  {
    title: "Mobile App Development",
    description:
      "Development of mobile applications for iOS and Android platforms, ensuring high performance, seamless functionality, and engaging user interfaces.",
    icon: mdiCellphone,
  },
  {
    title: "Software Integration",
    description:
      "Services that enable different software systems and applications to communicate and work together effectively, enhancing overall productivity.",
    icon: mdiServer,
  },
  {
    title: "ERP Consulting",
    description:
      "We provide expert ERP consulting services to help businesses streamline their operations.",
    icon: mdiChartAreaspline,
  },
  {
    title: "Consultation",
    description:
      "We offer expert consultation services to help businesses navigate challenges and seize opportunities.",
    icon: mdiAccountQuestion,
  },
  {
    title: "Training ",
    description:
      "we provide comprehensive training services designed to empower your team.",
    icon: mdiSchool,
  },
];
export const ProjectsData = [
  {
    id: 1,
    title: "TaskMaster - Task Management App",
    description:
      "TaskMaster is a powerful task management app designed to help teams collaborate effectively. With features like task prioritization, deadline reminders, and progress tracking, users can stay organized and boost productivity.",
    buttonText: "View",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 2,
    title: "ConnectHub - Social Networking Platform",
    description:
      "ConnectHub is a social networking platform that allows users to connect, share, and collaborate with others. It features user profile, messaging, and community groups, fostering meaningful interaction and engagement among users.",
    buttonText: "View",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 3,
    title: "ShopEasy - E-commerce Web Application",
    description:
      "ShopEasy is an intuitive e-commerce web application that shows businesses to create stunning online scenes. It includes customizable product plages, secure payment processing, and inventory management tools, making online selling a breeze.",
    buttonText: "View",
    imageUrl:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 4,
    title: "FitTrack - Personal Fitness App",
    description:
      "FitTrack is a personal fitness app that enables users to set and track their health goals. With features such as workout planning, program monitoring, and nutrition tracking, users can achieve their fitness aspirations while staying motivated.",
    buttonText: "View",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
  },
];
export const featuresData = [
  {
    id: 1,
    title: "Tailored Solutions",
    icon: "♢", // You can replace with actual icons or SVG components
  },
  {
    id: 2,
    title: "Experienced Team",
    icon: "♢",
  },
  {
    id: 3,
    title: "Cutting-Edge Technology",
    icon: "♢",
  },
  {
    id: 4,
    title: "User-Centric Design",
    icon: "♢",
  },
  {
    id: 5,
    title: "Robust Quality Assurance",
    icon: "♢",
  },
  {
    id: 6,
    title: "Ongoing Support",
    icon: "♢",
  },
];
export const PartnersData = [
  { id: 1, name: "Safaricom", logo: safari },
  { id: 2, name: "Telecom", logo: telebirr },
  { id: 3, name: "AAu", logo: images },
  { id: 4, name: "Safaricom", logo: safari },
  { id: 5, name: "Telecom", logo: telebirr },
  { id: 6, name: "AAu", logo: images },
];
