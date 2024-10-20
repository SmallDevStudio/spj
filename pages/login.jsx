import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { CiLock, CiMail } from "react-icons/ci";
const LoginPage = () => {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {/* Logo */}
            <div></div>

            {/* Body */}
            <div className="flex flex-col w-full">
                <div className="p-4">
                    <div className="">
                        <h2 className="text-3xl font-bold">เข้าสู่ระบบ</h2>
                        <div className="flex flex-row items-start gap-2 mt-2">
                            <span className="text-sm text-gray-500">บัญชีใหม่?</span>
                            <span className="text-sm font-bold text-red-500 cursor-pointer">ลงทะเบียน</span>
                        </div>
                    </div>
                    {/* Login Form */}
                    <div className="bg-white px-4 py-6 shadow-md rounded-xl mt-4">
                        <div>
                            <div class="relative mb-4">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <CiMail className="w-4 h-4 text-gray-500" />
                                </div>
                                <input 
                                    type="text" 
                                    id="username" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"   
                                    placeholder="name@superjeew.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div class="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <CiLock className="w-4 h-4 text-gray-500" />
                                </div>
                                <input 
                                    type="password" 
                                    id="password" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"   
                                    placeholder="พาสเวิร์ด"
                                />
                            </div>
                        </div>

                        <span className="text-sm font-bold text-red-500 cursor-pointer">ลืมรหัสผ่าน?</span>

                        <div className="flex justify-center items-center w-full mt-2">
                            <button
                                className="bg-red-500 font-bold text-white p-2.5 rounded-lg w-full"
                            >
                                เข้าสู่ระบบ
                            </button>
                        </div>

                        <div className="flex flex-col justify-center items-center w-full mt-6 mb-6">
                            <Divider 
                                className='w-full items-center justify-center'
                                textAlign='center'
                            > 
                            <span className="text-sm text-gray-500">หรือเข้าระบบด้วยอีเมล</span>
                            </Divider>
                        </div>

                        <div>
                            <button
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                                <div className="flex justify-center items-center gap-8">
                                    <Image
                                        src="/img/google-icon.svg"
                                        alt="google"
                                        width={40}
                                        height={40}
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            objectFit: 'contain',
                                        }}
                                    />
                                    <span className="text-sm font-bold">
                                        เข้าสู่ระบบด้วย Superjeew
                                    </span>
                                </div>
                            </button>
                        </div>
                        
                        <div className="flex justify-center items-center w-full mt-10">
                            <span className="text-xs text-gray-400 inline">
                                การลงชื่อเข้าใช้ด้วยบัญชีแสดงว่าคุณยอมรับข้อกำหนดในการให้บริการและนโยบายความเป็นส่วนตัวของ superjeew
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;