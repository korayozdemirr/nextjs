import Link from "next/link";
function HomePage(){
    return(
        <div>
            <h1>Hakkımda sayfası</h1>
            <Link href="/">
            <a>Anasayfa</a>
            </Link>
        </div>
        );
}

export default HomePage