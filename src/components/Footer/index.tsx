import { ReactComponent as Logo } from './logo.svg';
import './style.css';

export function Footer() {
    return <header className="footer">
        <Logo className="logo"/>
        <div className='footer-info'>
            <p className="remnant">Осталось 8 попыток. </p>
            <p>После чего вы насегда будете забанены на данном ресурсе. Разбана не будет, не просите, даже за деньги.</p>
        </div>
        <a href="#" className='what-is-it'>Что это нахуй?</a>
    </header>;
}