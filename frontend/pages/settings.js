import { useEffect, useState } from "react";
import ProfileSettings from "@/components/settings/ProfileSettings";
import WalletSettings from "@/components/settings/WalletSettings";
import NotificationPreferences from "@/components/settings/NotificationPreferences";
import LanguageAndThemeSettings from "@/components/settings/LanguageAndThemeSettings";
import Layout from "@/components/layout";
import Head from "next/head";
import { withAuth } from "@/hocs/withAuth";

function Settings() {
  const placeholderSettings = {
    profile: {
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "/placeholder-avatar.png",
    },
    wallet: {
      address: "0x000000000000000000000000000000000000dead",
      balance: "0.00 ETH",
    },
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
    theme: "Light",
  };

  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch("/api/settings");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        setSettings(data || placeholderSettings); 
      } catch (error) {
        console.error("Error fetching settings, using placeholder data:", error);
        setSettings(placeholderSettings);
      }
    };

    fetchSettings();
  }, []);

  if (!settings) {
    return <p className="gabarito text-2xl">Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Solaris 3.0 | Settings</title>
      </Head>
      <div className="flex min-h-screen bg-[#cfcbbdff]">
        <Layout />
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-6 kumbhSans text-[#072000ff]">Settings</h1>
          <main className="mx-auto space-y-8">
            <ProfileSettings profile={settings.profile} />
            <WalletSettings wallet={settings.wallet} />
            <NotificationPreferences notifications={settings.notifications} />
            <LanguageAndThemeSettings language={settings.language} theme={settings.theme} />
          </main>
        </div>
      </div>
    </>
  );
}

export default withAuth(Settings);
