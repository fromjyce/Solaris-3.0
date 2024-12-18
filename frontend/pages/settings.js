import ProfileSettings from '@/components/settings/ProfileSettings';
import WalletSettings from '@/components/settings/WalletSettings';
import NotificationPreferences from '@/components/settings/NotificationPreferences';
import LanguageAndThemeSettings from '@/components/settings/LanguageAndThemeSettings';
import Layout from "@/components/layout";
import Head from "next/head";
import { withAuth } from '@/hocs/withAuth';

function Settings() {
  return (
    <>
    <Head>
        <title>Solaris 2.0 | Settings</title>
    </Head>
    <div className="flex min-h-screen bg-[#cfcbbdff]">
        <Layout />
      <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 kumbhSans text-[#072000ff]">Settings</h1>
      <main className="mx-auto space-y-8">
        <ProfileSettings />
        <WalletSettings />
        <NotificationPreferences />
        <LanguageAndThemeSettings />
        </main>
      </div>
    </div>
    </>
  );
}

export default withAuth(Settings);