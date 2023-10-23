import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/common/Header/Header";
import FeatureCards from "../components/ui/Card/Card";
import Banner from "../components/ui/Banner/Banner";
import AboutInstructor from "../components/common/AboutInstructor/AboutInstructor";
import StudentsReview from "../components/common/StudentsReview/StudentsReview";
import Footer from "../components/common/Footer/Footer";
import Accordion from "../components/ui/Accordion/Accordion";
import Faq from "../components/common/Faq/Faq";
export default function Home() {
  return (
    <>
      <AboutInstructor />
      <FeatureCards />
      <Banner />
      <StudentsReview />
      <Faq />
    </>
  );
}
