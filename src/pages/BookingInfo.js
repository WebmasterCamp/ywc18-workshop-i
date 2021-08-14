import styled from 'styled-components'
import page_booking_info from '../assets/img/bookinginfo-page.jpg'
import { Link } from "react-router-dom";

const MockPage = styled.img`
    width:  100%;
    height: 100%;
`

const BookingPlan = () => {
    return (
        <Link to="/booking/success">
            <MockPage src={page_booking_info} />
        </Link>
    )
}

export default BookingPlan
