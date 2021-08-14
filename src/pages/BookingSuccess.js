import styled from 'styled-components'
import page_booking_suc from '../assets/img/bookingsuc-page.jpg'


const MockPage = styled.img`
    width:  100%;
    height: 100%;
`

const Bookingsuc = () => {
    return (
        <a href="https://web.facebook.com/ideavelth/">
            <MockPage src={page_booking_suc} />
        </a>
    )
}

export default Bookingsuc
