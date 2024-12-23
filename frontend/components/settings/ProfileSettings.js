export default function ProfileSettings({ profile }) {
  return (
    <div className="bg-[#f4f4f4] shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 kumbhSans text-[#072000ff]">Profile Settings</h2>   
      <form>
        <div className="space-y-4">
          <div>
            <label className="block text-base font-medium gabarito text-[#072000ff]">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={profile.name}
              className="mt-1 block w-full p-2 bg-[#dcdcdc] text-[#072000ff] gabarito  border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-base font-medium gabarito text-[#072000ff]">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={profile.email}
              className="mt-1 block w-full p-2 bg-[#dcdcdc] text-[#072000ff] gabarito border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-base font-medium gabarito text-[#072000ff]">Profile Photo</label>
            <input
              type="file"
              name="profile-photo"
              accept="image/*"
              className="mt-1 block w-full text-base text-[#072000ff] gabarito file:py-2 file:px-4 gabarito file:bg-[#3f8649ff] file:gabarito file:text-white file:rounded-md"
            />
          </div>
        </div>
        <button type="submit" className="mt-6 px-6 py-2 bg-[#3f8649ff] gabarito text-white rounded-md">
          Save Changes
        </button>
      </form>
    </div>
  );
}
