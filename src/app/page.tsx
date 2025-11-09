import { requireAuth } from '@/lib/auth-utils';
import { caller } from '@/trpc/server';

const Page = async() => {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div>
      Protected page
      {JSON.stringify(data)}
    </div>
  );
};

export default Page;
