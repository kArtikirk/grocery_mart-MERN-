import React from 'react'
import { Link} from 'react-router-dom'
import '../../inc/CategoryMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
                        <li>
                            
                            <Link  className='link' to='/chatbot'>
                                ChatBot
                            </Link>
                        </li>
                    </ul>
                    </div>
                </section>
        </div>

    </>
    )
}
