import FeatureCards from "../components/ui/Card/Card";
import Banner from "../components/ui/Banner/Banner";
import AboutInstructor from "../components/common/AboutInstructor/AboutInstructor";
import StudentsReview from "../components/common/StudentsReview/StudentsReview";
import Faq from "../components/common/Faq/Faq";
import CourseCards from "@/components/common/CourseCards/CourseCards";

export default function Home() {
  return (
    <>
      <AboutInstructor />
      <FeatureCards />
      <Banner />
      <StudentsReview />
      <Faq />
      <CourseCards />
    </>
  );
}
