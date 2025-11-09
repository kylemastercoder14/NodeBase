"use client";

import { authClient } from '@/lib/auth-client';

const Page = () => {
  const {data} = authClient.useSession();
  return (
    <div>
      {JSON.stringify(data)}
      {data && (
        <button className='bg-destructive' onClick={() => authClient.signOut()}>Logout</button>
      )}
    </div>
  )
}

export default Page
