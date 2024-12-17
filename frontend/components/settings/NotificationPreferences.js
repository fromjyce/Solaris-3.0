import { useState } from 'react';

export default function NotificationPreferences() {
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [app, setApp] = useState(true);

  return (
    <div className="bg-[#f4f4f4] shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#072000ff] kumbhSans">Notification Preferences</h2>
      
      <form>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={email}
              onChange={() => setEmail(!email)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-[#326b3a]"
            />
            <label className="ml-2 text-md font-medium text-[#072000ff] gabarito">Email Notifications</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={sms}
              onChange={() => setSms(!sms)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-[#326b3a]"
            />
            <label className="ml-2 text-md font-medium text-[#072000ff] gabarito">SMS Notifications</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={app}
              onChange={() => setApp(!app)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-[#326b3a]"
            />
            <label className="ml-2 text-md font-medium text-[#072000ff] gabarito">In-App Notifications</label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-[#3f8649ff] text-white rounded-md gabarito  text-base hover:bg-[#326b3a] transition duration-200"
        >
          Save Preferences
        </button>
      </form>
    </div>
  );
}
