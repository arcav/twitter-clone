import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex justify-center">
        Signed in as {session.user.email} <br />
        <button className="w-9 bg-red-600" onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
