export default function SideBar() {
    return (<>
        <div className="class1 container-fluid bg-primary"  
        style={{position:"absolute",left:"0",width:"9%",height:"100%",top:"78px"}}   >
                        <a href="/" className="text-white text-decoration-none">
                            <span className="fs-3">Menu</span>
                        </a>
                        <ul className="align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <a href="/" className="align-middle">
                                    <i className=" fs-4 bi-house "></i> <span className="text-dark fs-5">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="text-dark fs-5">Dashboard</span> </a>

                            </li>
                            <li>
                                <a href="/" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="text-dark fs-5">Orders</span></a>
                            </li>
                            <li>
                                <a href="/" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                    <i className="fs-4 bi-bootstrap"></i> <span className="text-dark fs-5">Bootstrap</span></a>

                            </li>
                            

                                    <li className="w-100">
                                        <a href="/" className="nav-link px-0  my-3"> <span className="text-dark fs-5"> Product</span> 1</a>
                                    </li>
                        </ul>
        
                    </div>
        




    </>);

}