import FileUploadPage from "@/components/file-upload-page";
import MealPage from "@/components/meal-page";
import { Topbar } from "@/components/topbar";

export default function Home() {
  return (
    <div className="hidden md:block bg-primary">
      <Topbar />
      <div className="border-t">
        {/* <FileUploadPage /> */}
        <MealPage />
      </div>
    </div>
  );
}
