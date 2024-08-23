
import "../css/homePage.scss";
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import LogoImage from '../public/Logo.png'
const HomePage = () => {
    const handldeClick = () => {
    }


    return (
        <>
            <section className='wrapper'>
                <header>
                    <img src={LogoImage} />
                </header>
                <Button label='Sign In' onClick={handldeClick} />
                <Link to="/signin">ssss</Link>
            </section>

        </>
    )
}

export default HomePage
