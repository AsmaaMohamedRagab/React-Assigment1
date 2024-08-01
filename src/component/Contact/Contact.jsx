export default function Contact() {
    return (
        <>
            <div className="contact ">
                <h2>CONTACT SECTION</h2>
                <div className="d-flex justify-content-center align-content-center mb-5">
                    <div className="line bg-black me-3 mt-2"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="line bg-black ms-3 mt-2"></div>
                </div>
                <form className="py-5 m-auto w-50">
                    <label htmlFor="name" className="name d-none ">userName:</label>
                    <input type="text" className="form-control" placeholder="userName" id="name" onInput={function () {
                        (document.querySelector("#name").value=="" ? document.querySelector(".name").classList.add("d-none") : document.querySelector(".name").classList.remove("d-none"))}}></input>
                    <label htmlFor="mail" className="mail d-none ">userEmail:</label>
                    <input type="email" className="form-control" id="mail" placeholder="userEmail" onInput={function () {
                        (document.querySelector("#mail").value=="" ? document.querySelector(".mail").classList.add("d-none") : document.querySelector(".mail").classList.remove("d-none"))}}></input>
                    <label htmlFor="age" className="age d-none ">userAge:</label>
                    <input type="age" className="form-control" placeholder="userAge" id="age" onInput={function () {
                        (document.querySelector("#age").value=="" ? document.querySelector(".age").classList.add("d-none") : document.querySelector(".age").classList.remove("d-none"))}}></input>
                    <label htmlFor="password" className="password d-none ">userPassword:</label>
                    <input type="password" className="form-control" id="password" placeholder="userPassword" onInput={function () {
                        (document.querySelector("#password").value=="" ? document.querySelector(".password").classList.add("d-none") : document.querySelector(".password").classList.remove("d-none"))}}></input>
                    <button className="btn">send Message</button>
                </form>
            </div>

        </>
    )
}