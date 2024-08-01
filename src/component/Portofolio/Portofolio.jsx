export default function Portofolio() {
    return (
        <div className="portofolio pb-3">
            <h1 className="text-center ">PORTOFOLIO COMPONENT</h1>
            <div className="d-flex justify-content-center align-content-center mb-3">
                <div className="line bg-black me-3 mt-2"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line bg-black ms-3 mt-2"></div>
            </div>
            <div className="container">
                <div className="row g-5 mt">
                    <div className="col-md-4">
                        <div className="position-relative overflow-hidden">
                            <img src="./src/assets/poert1.png" alt="#" className="w-100 rounded-3" />
                            <div className="layer w-100 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 rounded-3">
                                <i class="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="position-relative overflow-hidden">
                            <img src="./src/assets/port2.png" alt="#" className="w-100 rounded-3" />
                            <div className="layer w-100 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 rounded-3">
                                <i class="fa-solid fa-plus text-white" ></i>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="position-relative overflow-hidden">
                            <img src="./src/assets/port3.png" alt="#" className="w-100 rounded-3" />
                            <div className="layer w-100 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 rounded-3">
                                <i class="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="position-relative overflow-hidden">
                            <img src="./src/assets/poert1.png" alt="#" className="w-100 rounded-3" />
                            <div className="layer w-100 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 rounded-3">
                                <i class="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="position-relative overflow-hidden">
                            <img src="./src/assets/port2.png" alt="#" className="w-100 rounded-3" />
                            <div className="layer w-100 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 rounded-3">
                                <i class="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="position-relative overflow-hidden">
                            <img src="./src/assets/port3.png" alt="#" className="w-100 rounded-3" />
                            <div className="layer w-100 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0 rounded-3">
                                <i class="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal position-absolute top-0 bottom-0 start-0 end-0 vh-100 d-none d-flex justify-content-center align-items-center">
                <img src="./src/assets/port2.png" alt=""/>
            </div>



        </div>
    )
}