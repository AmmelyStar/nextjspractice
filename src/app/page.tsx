 import Link from "next/link";

export default function Home() {
  return (
    <div>
       <div className="h-screen text-4xl">home page</div>
       <Link href={"/blog"}>BlogPage</Link>
    </div>
   
  );
}
