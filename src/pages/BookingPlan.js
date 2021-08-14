import styled from 'styled-components'
import page_booking_plan from  '../assets/img/bookingplan-page.jpg'
import { Link } from "react-router-dom";

const MockPage = styled.img`
    width:  100%;
    height: 100%;
`

const BookingPlan = () => {
    return (
        <Link to="/booking/info">
            <MockPage src={page_booking_plan} />
        </Link>
    )
}

export default BookingPlan
