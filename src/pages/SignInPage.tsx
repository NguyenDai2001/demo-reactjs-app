import { Link } from 'react-router-dom';
import LogoImage from '../assets/Logo.png';


const SignInPage = () => {


    return (
        <>
            <section className="wrapper">
                <Link to="/"><img src={LogoImage} className="w-[48.7px] h-[34.78px] mt-[22px] sm:mt-[62px] ms-5 sm:ms-0 " alt="Logo" /></Link>
            </section>

            <section className="wrapper h-full mt-[70px] sm:mt-[120px] flex justify-center items-center">
                <form method='POST' action='/handleSignIn' className='w-[300px] sm:w-[407px]'>
                    <h1 className='text-center text-[44px] sm:text-[64px] font-[400] text-[#000000] mb-10'>Sign In</h1>

                    <div className="sm:col-span-4">
                        <label htmlFor="Username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div className="mt-2">
                            <input id="Username" name="Username" type="text" className="block w-full h-[57px] px-5  rounded-md border-black py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <button type='submit' className='w-full h-[53px] mt-10 bg-buttonColor font-[400] text-[16px] text-[#ffffff] rounded-[50px]'>Sign In</button>
                </form>

            </section>


        </>
    )
}

export default SignInPage
