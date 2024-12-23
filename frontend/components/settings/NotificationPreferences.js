"use client";
import { useState } from "react";


export default function NotificationPreferences({ notifications }) {
  const [email, setEmail] = useState(notifications.email);
  const [sms, setSms] = useState(notifications.sms);
  const [app, setApp] = useState(notifications.app);

  return (
    <div className="bg-[#f4f4f4] shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#072000ff] kumbhSans">Notification Preferences</h2>
      <form>
        <div className="space-y-4 afacad text-xl">
          <div className="flex items-center">
            <input type="checkbox" checked={email} onChange={() => setEmail(!email)} />
            <label className="ml-2">Email Notifications</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" checked={sms} onChange={() => setSms(!sms)} />
            <label className="ml-2">SMS Notifications</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" checked={app} onChange={() => setApp(!app)} />
            <label className="ml-2">In-App Notifications</label>
          </div>
        </div>
        <button type="submit" className="mt-6 px-6 py-2 bg-[#3f8649ff] gabarito text-white rounded-md">Save Preferences</button>
      </form>
    </div>
  );
}
