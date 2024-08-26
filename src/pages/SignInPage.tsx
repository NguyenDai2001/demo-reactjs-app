import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoImage from '../assets/Logo.png';
import axios from 'axios';



const SignInPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();


    interface LoginResponse {
        accessToken: string;
        refreshToken: string;
        code?: number;
    }



    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Ngăn chặn hành vi gửi biểu mẫu mặc định
        const element = await document.getElementById('loadingLogin');
        if (element) {
            await element.classList.remove('hidden');
        }
        try {
            const response = await axios.post<LoginResponse>('https://api-test-web.agiletech.vn/auth/login', { username });
            if (response.data.accessToken && response.data.refreshToken) {
                // Lưu token vào localStorage
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                console.log('Đăng nhập thành công');
                navigate('/')
            } else if (response.data.code === 401) {
                setError("Đăng nhập thất bại")
                console.log('Đăng nhập thất bại: Sai username');
            } else {
                setError("Lỗi đăng nhập")
                console.log('Phản hồi không xác định từ API:', response.data);
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                setError("Đăng nhập thất bại")
                console.log('Đăng nhập thất bại: Sai username');
            } else {
                setError("Lỗi đăng nhập")
                console.log('Đã xảy ra lỗi:', error);
            }
        }
        if (element) {
            await element.classList.add('hidden');
        }
    };

    return (
        <>
            <section className="wrapper">
                <Link to="/"><img src={LogoImage} className="w-[48.7px] h-[34.78px] mt-[22px] sm:mt-[62px] ms-5 sm:ms-0 " alt="Logo" /></Link>
            </section>

            <section className="wrapper h-full mt-[70px] sm:mt-[120px] flex justify-center items-center">
                <form onSubmit={handleSubmit} className='w-[300px] sm:w-[407px]'>
                    <h1 className='text-center text-[44px] sm:text-[64px] font-[400] text-[#000000] mb-10'>Sign In</h1>

                    <div className="sm:col-span-4">
                        <label htmlFor="Username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div className="mt-2">
                            <input
                                id="Username"
                                name="Username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="block w-full h-[57px] px-5  rounded-md border-black py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <button type='submit' className='mr-3 w-full h-[53px] mt-10 bg-buttonColor font-[400] text-[16px] text-[#ffffff] rounded-[50px] flex justify-center items-center'>
                        <i id='loadingLogin' className="hidden fa-solid fa-spinner animate-spin m-2" style={{ color: '#d1d1d1' }}></i>
                        Sign In
                    </button>
                </form>

            </section>
        </>
    )
}

export default SignInPage;
