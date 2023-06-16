import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Link href="/">Select Meeting</Link>
        </div>
        <div>
          <Link href="/stopwatch">Simple Stopwatch</Link>
        </div>
      </div>
    </>

  );
}