export default function Footer(){
    return(
        <>
        <footer className="w-100">
                <div className="part1 text-white h-75 row ">
                    <div className="text-center col-md-4">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="text-center col-md-4 ">
                        <h3>AROUND THE WEB</h3>
                        <div className="text-center">
                            <i className="fa-brands fa-facebook mx-2"></i>
                            <i className="fa-brands fa-twitter mx-2"></i>
                            <i className="fa-brands fa-linkedin-in mx-2"></i>
                            <i className="fa-solid fa-globe mx-2"></i>
                        </div>
                    </div>
                    <div className="text-center col-md-4">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
                    </div>
                </div>
                <div className="part2 text-white text-center h-25 py-3">
                    <p>Copyright © Your Website 2021</p>
                </div>
            </footer>
        </>
    )
}