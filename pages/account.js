import MyLayout from "../layouts/MyLayout"
import Link from "next/link";


export default function Account() {
  return (
    <div>
      <p>This is the Account page.</p>
      <p>
        <Link href="/profile">
          <a>Go: Profile</a>
        </Link>
      </p>
    </div>
  );
}

Account.Layout = MyLayout;