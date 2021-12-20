import React from 'react'
import { Link } from 'react-router-dom'
import '../../inc/CategoryMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chatbot from '../../Chatbot/chatbot'
export default function Footer() {
    return (<>
        <div>
            <section className="footer">
                <div className="span1">&copy; 2021 Company, Inc</div>
                <div>
                    <ul>
                        {/* <li>
                            <Link className='link' to='/'>Home</Link>
                        </li> */}


                        <li style={{ width: "auto" }}>

                            <Link to='/chatbot' class="nav-link active" data-bs-toggle="modal" data-bs-target="#Chatbot">
                                <i class="fas fa-robot" style={{ fontSize: "40px" }}></i> </Link>
                        </li>
                        <div class="modal fade" id="Chatbot" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div >
                                        <div >

                                            <Chatbot />


                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </section>
        </div>

    </>
    )
}
