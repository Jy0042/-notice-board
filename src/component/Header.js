import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">토익 영단어(고급)</Link>
            </h1>
            <div className="menu">
                <Link to="/login_page" className="link">
                    로그인
                </Link>
                <Link to="/register_page" className="link">
                    회원가입
                </Link>
                <Link to="/create_word" className="link">
                    단어 추가
                </Link>
                <Link to="/create_day" className="link">
                    Day 추가
                </Link>
            </div>
        </div>
    );
}