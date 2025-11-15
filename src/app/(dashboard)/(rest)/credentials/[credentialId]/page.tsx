import { requireAuth } from '@/lib/auth-utils';

interface PageProps {
  params: Promise<{
    credentialId: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  await requireAuth();
  const { credentialId } = await params;
  return <div>Credential ID: {credentialId} page</div>;
};

export default Page;
