import logo from '../assets/Logo.png';
import iconChat from '../assets/iconChat.png';
const Footer = () => {
  return (
    <div>
      <div className='mx-6 sm:mx-0 sm:flex sm:justify-between'>

        {/* info */}
        <div>
          <div className='flex items-center mb-5'>
            <img src={logo} className='w-[49px] h-[35px]' alt='logo' />
            <b className='font-[900] text-[20px] text-textTitleColor ms-5'>DataWarehouse</b>
          </div>
          <div className='my-5 block'>
            <b className='font-[500] text-[16px] text-textTitleColor leading-[28.8px]'>Warehouse Society, 234 <br /> Bahagia Ave Street PRBW 29281
            </b>
          </div>
          <div className='my-5 block'>
            <b className='font-[400] text-[16px] text-textTitleColor leading-[28.8px]'>info@warehouse. project <br />1-232-3434 (Main)</b>
          </div>
        </div>


        {/* about */}

        <div className='inline-block w-[150px] sm:w-auto my-10 sm:my-0'>
          <h1 className='text-[16px] font-[900]  text-textTitleColor mb-6'>About</h1>
          <h2 className='text-[16px] font-[400]  text-textTitleColor my-2'><a href='#'>Profile</a></h2>
          <h2 className='text-[16px] font-[400]  text-textTitleColor my-2'><a href='#'>Features</a></h2>
          <h2 className='text-[16px] font-[400]  text-textTitleColor my-2'><a href='#'>Careers</a></h2>
          <h2 className='text-[16px] font-[400]  text-textTitleColor my-2'><a href='#'>DW News</a></h2>
        </div>

        <div className='inline-block w-[150px] sm:w-auto my-10 sm:my-0'>
          <h1 className='text-[16px] font-[900]  text-textTitleColor mb-6'>Help</h1>
          <h2 className='text-[16px] font-[400]  text-textTitleColor my-2'><a href='#'>Profile</a></h2>
          <h2 className='text-[16px] font-[400]  text-textTitleColor my-2'><a href='#'>Features</a></h2>
          <h2 className='text-[16px] font-[400]  text-textTitleColor my-2'><a href='#'>Careers</a></h2>
          <h2 className='text-[16px] font-[400]  text-textTitleColor my-2'><a href='#'>DW News</a></h2>
        </div>

        <div>
          <h1 className='text-[16px] font-[900]  text-textTitleColor mb-6'>Social Media</h1>
          <div>
            <span className='inline-block w-[50.13px] h-[50.13px] rounded-[100px] bg-[#e9e9ee] mx-2 ms-0'></span>
            <span className='inline-block w-[50.13px] h-[50.13px] rounded-[100px] bg-[#e9e9ee] mx-2'></span>
            <span className='inline-block w-[50.13px] h-[50.13px] rounded-[100px] bg-[#e9e9ee] mx-2'></span>

          </div>
        </div>

      </div>


      <div className='flex justify-between my-[60px] sm:my-[100px] mx-6 sm:m-0'>
        <p className='font-[400] text-[12px] leading-[21.6px] text-textTitleColor'>© Datawarehouse™, 2020. All rights reserved.<br />
          Company Registration Number: 21479524.</p>
        <img src={iconChat} alt='icon chat' />
      </div>
    </div>
  )
}

export default Footer
