import { PageHeaderSetter } from "./lib/PageHeaderContext";
import Button from "./component/Button/Button";
export default function NotFound() {
  return (
    <div>
      <PageHeaderSetter title="Page Not Found" />
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold text-lime-900 mb-4">404</h1>
        <p className="text-neutral-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Button href="/" icon>
          Go to Home
        </Button>
      </div>
    </div>
  );
}
