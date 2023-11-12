import FileUploadPage from '@/components/file-upload-page';
import { Topbar } from '@/components/topbar';

export default function Home() {
  return (
    <div className="hidden md:block">
      <Topbar />
      <div className="border-t">
        <FileUploadPage />
      </div>
    </div>
  );
}
