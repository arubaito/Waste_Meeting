import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Link href="/">Select Meeting</Link>
        </div>
        <div>
          <Link href="/">Simple StopWatch</Link>
        </div>
      </div>
    </>

  );
}