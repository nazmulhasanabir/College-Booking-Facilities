import Card_Section from "@/Components/Card_Section";
import CollegeGallery from "@/Components/CollegeGallery";
import CollegeReviews from "@/Components/CollegeReviews ";
import ResearchPapers from "@/Components/ResearchPapers ";

export default function Home() {
  return (
  <main>
    <div>
  <Card_Section></Card_Section>
  <CollegeGallery></CollegeGallery>
  <ResearchPapers></ResearchPapers>
  <CollegeReviews></CollegeReviews>
    </div>
  </main>
  );
}
