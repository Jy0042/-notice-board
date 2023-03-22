import { Link } from "react-router-dom";



export default function RegisterPage() {

    return (
        <>
            <h2>
                <br></br>
                작업 중...
                <br></br>
                <br></br>
            </h2>
            <Link to="/login_page">
                <button className="loginBtn">
                    로그인
                </button>
            </Link>
            
            <Link to="/">
                <button className="back_bt">
                    돌아가기
                </button>
            </Link>
            
        </>
    );
}