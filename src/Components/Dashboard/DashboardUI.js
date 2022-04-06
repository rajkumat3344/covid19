import React from "react";

function DashboardUI() {
    return(
        <div>
            <div className="box box-shadow" >
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Booked</p>
                            <p className="title">3,456M</p>
                        </div>
                    </div>

                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Canceled</p>
                            <p className="title">456K</p>
                        </div>
                    </div>
                </nav>

                <progress className="progress is-small is-primary" max="100">10%</progress>

                <section className="hero is-primary">
                    <div className="hero-body">
                        <p className="title">
                            MOVIE
                        </p>
                        <p className="subtitle">
                            Ticket Booking & Cancellation Center
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default DashboardUI;