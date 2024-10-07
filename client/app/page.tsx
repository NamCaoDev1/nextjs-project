import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen gap-3">
      <div className="bg-primary text-primary-foreground p-3 rounded-md">
        <Link
          href="/products"
          style={{
            display: "block",
            cursor: "pointer",
            width: "100%",
            height: "100%",
          }}
        >
          Product Page
        </Link>
      </div>
      <div className="bg-primary text-primary-foreground p-3 rounded-md">
        <Link
          href="/login"
          style={{
            display: "block",
            cursor: "pointer",
            width: "100%",
            height: "100%",
          }}
        >
          Login Page
        </Link>
      </div>
      <div className="bg-primary text-primary-foreground p-3 rounded-md">
        <Link
          href="/signup"
          style={{
            display: "block",
            cursor: "pointer",
            width: "100%",
            height: "100%",
          }}
        >
          Signup Page
        </Link>
      </div>
    </div>
  );
}
