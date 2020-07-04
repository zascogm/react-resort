import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from 'react-router-dom'
import Services from "../components/Services"
import FeturedRooms from "../components/FeaturedRooms"

export default function Home() {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to='/rooms' className="btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeturedRooms />
        </React.Fragment>
    );
}
