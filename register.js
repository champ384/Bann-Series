
export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form className="bg-gray-800 p-6 rounded-xl space-y-4 w-80">
        <h2 className="text-2xl font-bold text-yellow-400 text-center">สมัครสมาชิก</h2>
        <input className="w-full p-2 rounded text-black" type="text" placeholder="เบอร์โทรศัพท์" />
        <input className="w-full p-2 rounded text-black" type="password" placeholder="รหัสผ่าน" />
        <button className="bg-yellow-500 w-full py-2 rounded text-black font-semibold">สมัคร</button>
      </form>
    </div>
  )
}
