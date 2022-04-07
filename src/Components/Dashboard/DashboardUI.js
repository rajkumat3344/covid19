import React from "react";
import Btn from "../Button/Btn";


function DashboardUI() {
    return(
        <div>
            <div className="box " >
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Booked</p>
                            <p className="title">0</p>
                        </div>
                    </div>

                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Canceled</p>
                            <p className="title">0</p>
                        </div>
                    </div>
                </nav>


                <section className="hero is-primary is-medium">
                    <div className="hero-body">
                        <p className="title">
                            MOVIE
                        </p>
                        <p className="subtitle">
                            Ticket Booking & Cancellation Center
                        </p>
                    </div>
                </section>
                <br/>
                <Btn />
            </div>
        </div>
    );
}

export default DashboardUI;