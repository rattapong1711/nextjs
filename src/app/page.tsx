import Image from "next/image";
import Link from "next/link";
import './page.css'; 


export default function Home() {
  return (
    <>
      <div className="welcome-container">
        <h1>Welcome</h1>
        <Link href="/signin">
          <h1>
            <button type="button">Go To Main Page</button>
          </h1>
        </Link>
      </div>
    </>
  );
}
