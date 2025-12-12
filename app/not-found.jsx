import { PageHeaderSetter } from "./lib/PageHeaderContext";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <PageHeaderSetter title="Page Not Found" />
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold text-lime-900 mb-4">404</h1>
        <p className="text-neutral-600 mb-6">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="inline-block bg-lime-800 text-white px-6 py-3 rounded-lg">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
