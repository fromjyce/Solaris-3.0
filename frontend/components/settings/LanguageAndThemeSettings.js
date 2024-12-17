import { useState } from 'react';

export default function LanguageAndThemeSettings() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    if (e.target.value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="bg-[#f4f4f4] shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 kumbhSans text-[#072000ff]">Language & Theme Settings</h2>
      
      <form>
        <div className="space-y-4">
          <div>
            <label className="block text-base font-medium text-[#072000ff] gabarito">Theme</label>
            <select
              value={theme}
              onChange={handleThemeChange}
              className="mt-1 block w-full p-2 bg-[#dcdcdc] border border-gray-300 text-[#072000ff] gabarito rounded-md focus:outline-none focus:ring-2 focus:ring-[#326b3a]"
            >
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
            </select>
          </div>
          <div>
            <label className="block text-base font-medium text-[#072000ff] gabarito">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block w-full p-2 bg-[#dcdcdc]  border border-gray-300 text-[#072000ff] gabarito rounded-md focus:outline-none focus:ring-2 focus:ring-[#326b3a]"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-[#3f8649ff] text-white rounded-md gabarito hover:bg-[#326b3a] transition duration-200"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
