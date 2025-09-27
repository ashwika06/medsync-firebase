
import { useEffect } from 'react';
import { useRouter } from 'next/router';


import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to MedSync</h1>
      <Link href="/signup"><button>Sign Up</button></Link>
      <Link href="/login"><button>Login</button></Link>
    </div>
  );
}
