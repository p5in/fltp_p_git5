import React, { Component } from 'react'

export class Card extends Component {


  render() {

    console.log(this.props.member);

    return (
      <div className="uppercarddiv">
      <div className="card bg-dark text-white align-middle">
          <img src="/img/user_bg.jpg" className="card-img" alt="..." />
      <div className="card-img-overlay row">

      <div className="col-3 img_container">
     
          <img src="/img/uicon.png" className="iconimg_card" alt="iconimg"/>
          <a href="/" data-bs-toggle="modal" data-bs-target={`#${this.props.member.id}`}>
              <img src="/img/arrow.png" className="arrow_card_img" alt="arrowimg"/>
          </a>
      </div>
      <div className="col-1 img_container"><div className="vl"></div></div>
          <div className="col-8 text_container">
              <h5 className="card-title mt-3"><b>Name:&nbsp;</b>{this.props.member.real_name}</h5>
              <h6 className="card-text"><b>from:&nbsp;</b>{this.props.member.tz}</h6>
              <div className="activity_icon_container">

                  <img src="/img/activity.png" alt="activity_icon" className="activity_img" />
              </div>
          </div>
      </div>
      </div>

    {/* modal starts here */}

          <div className="modal fade" id={`${this.props.member.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <img src="/img/activitymodalicon.png" alt="activity_icon_on_modal" className="activitymodalicon" />
                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                
              </div>
              <div className="modal-body">

              <ul className="list-group">
              <li className="list-group-item list-group-item-success text-center">Activity Timing of <b>{this.props.member.real_name}</b></li>


                 {
                     this.props.member.activity_periods.map((act,index) => (
                      <li className="list-group-item list-group-item-light text-center" key={index}><i>{act.start_time}&nbsp;to&nbsp;{act.end_time}</i></li>
                     ))
                   }


              
              
            </ul>
            <button type="button" className="btn btn-secondary modal_close_btn" data-bs-dismiss="modal" >Close</button>

              </div>
             
            </div>
          </div>
          </div>

      {/* end of modal */}
      
      </div>
      
  )
  }
}

export default Card





