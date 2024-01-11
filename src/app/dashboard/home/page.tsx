import LayoutDashboard from "../page";
import './home.css';

export default function home() {
    return (
        <LayoutDashboard>
            <div className={'w-full h-full rounded-lg bg-white p-[17px]'}>
                <div className={'title'}>
                    <h3>Dashboard</h3>
                </div>
                <div className={'box-welcome'}>
                    <h3>Selamat Datang</h3>
                    <p>Tony Stark</p>
                </div>
            </div>
        </LayoutDashboard>
    )
}
