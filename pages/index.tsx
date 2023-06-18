import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Link href="/WasteMeeting/RegisterUser">Waste Meeting</Link>
        </div>
        <div>
          <Link href="/SimpleStopwatch">Simple Stopwatch</Link>
        </div>
      </div>
    </>

  );
}