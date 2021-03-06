import React from 'react';
import './OrderModal.css';
// import OrderDetailModal from './OrderDetailModal';

// Setting up Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
library.add(faSortDown)

class OrderModal extends React.Component {

    convertYMD(dateObj) {
        let mm = dateObj.getMonth() + 1;
        let dd = dateObj.getDate();
        return [dateObj.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-')
    }

    render () {
        let orderList = this.props.orderBookingContent.map((e) => {
            let detailStyle = {
                display: e.display
            }

            let service = Object.keys(e.service).map((eServiceKey) => {
                return (
                    <li>{eServiceKey}: {e.service[eServiceKey]}</li>
                )
            })

            let vaccineRequirement = null
            if (e.vaccineRequirement !== null) {
                vaccineRequirement = e.vaccineRequirement.vaccine.map((eVac) => {
                    return (
                        <li>{eVac}</li>
                    )
                });
            }

            let vaccineRequirementJSX = null
            if (vaccineRequirement !== null) {
                vaccineRequirementJSX = (
                    <div>
                        <br/>
                        <h3>Vaccine Requirement:</h3>
                        <ul>
                            {vaccineRequirement}
                        </ul>
                    </div>
                )
            }

            let totalPriceJSX = null
            if (e.totalPrice !== null) {
                totalPriceJSX = (
                    <div>
                        <h3>Total Price:</h3>
                        {e.totalPrice}<br/>
                        <br/>
                    </div>
                )
            }

            let petJSX = null
            if (e.petName !== null) {
                petJSX = (
                    <div>
                        <h3>Pet:</h3>
                        Pet Name:   {e.petName}<br/>
                        Pet Type:   {e.petType}<br/>
                        Pet Weight: {e.petWeight}<br/>
                        <br/>
                    </div>
                )
            }

            let serviceJSX = null
            if (e.service.reference === undefined) {
                serviceJSX = (
                    <div>
                        <h3>Service:</h3>
                        <ul>
                            {service}
                        </ul>
                    </div>
                )
            } else {
                serviceJSX = (
                    <div>
                        <h3>Reference:</h3>
                        <ul>
                            {e.service.reference}
                        </ul>
                    </div>
                )
            }

            return (
                <tbody key={e.id} id={`Order-${e.id}`}>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.ownerName}</td>
                        <td>{e.ownerPhone}</td>
                        <td>{e.status === 'outside' ? 'offline' : e.status}</td>
                        <td><FontAwesomeIcon icon="sort-down" onClick={this.props.openOrder} /></td>
                    </tr>
                    <tr style={detailStyle}>
                        <td colSpan={5}>
                            <h1>Detail:</h1>
                            <br/>
                            <p>
                                <h3>Booking Date:</h3>
                                Start Date: {this.convertYMD(new Date(e.startDate))}<br/>
                                End Date:   {this.convertYMD(new Date(e.endDate))}<br/>
                                Duration:   {e.duration} days<br/>
                                <br/>
                                {totalPriceJSX}
                                {petJSX}
                                {serviceJSX}
                                {vaccineRequirementJSX}
                            </p>
                        </td>
                    </tr>
                </tbody>
            )
        })

        return (   
            <div className="modal fade" id="OrderModal" tabIndex="-1" role="dialog" aria-labelledby="OrderModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="OrderModalLabel">List of Order</h5>
                    <h6>Room Type:   {this.props.orderRoomType}</h6>
                    <h6>Search Date: {this.props.orderRoomDate}</h6>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className='order-list'>
                    <table className='table'>
                        <thead>
                            <th>Order ID</th>
                            <th>Owner Name</th>
                            <th>Owner Tel</th>
                            <th>Booking Type</th>
                            <th>Detail</th>
                        </thead>
                        {orderList}
                    </table>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default OrderModal;