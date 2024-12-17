export default function ProfileSettings() {
    return (
      <div className="bg-[#f4f4f4] shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 kumbhSans text-[#072000ff]">Profile Settings</h2>   
        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium gabarito text-[#072000ff]">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-2 bg-[#dcdcdc] text-[#072000ff] gabarito  border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-[#326b3a]"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium gabarito text-[#072000ff]">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-2 bg-[#dcdcdc] text-[#072000ff] gabarito border border-gray-300 0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#326b3a]"
                placeholder="your-email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium gabarito text-[#072000ff]">Profile Photo</label>
              <input
                type="file"
                name="profile-photo"
                accept="image/*"
                className="mt-1 block w-full text-sm text-[#072000ff] gabarito file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#3f8649ff] file:text-white hover:file:bg-[#326b3a]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-[#3f8649ff] gabarito  text-white rounded-md hover:bg-[#326b3a] transition duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  }
  