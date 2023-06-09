import { Link } from "react-router-dom";

export default function EmptyPage() {
    return (
        <>
            <h2>
                <br></br>
                잘못된 접근입니다.
                <br></br>
                <br></br>
            </h2>
            <Link to="/">
                <button className="back_bt">
                    돌아가기
                </button>
            </Link>
        </>
    );
}