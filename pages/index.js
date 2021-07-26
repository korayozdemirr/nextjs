import Link from "next/link";

function HomePage(){
    return (
    <div>
        <h1>Welcome To Next.js</h1>
        <Link href="/about">
        <a>Hakkımda</a>
        </Link>
    </div>
    );
}

export default HomePage