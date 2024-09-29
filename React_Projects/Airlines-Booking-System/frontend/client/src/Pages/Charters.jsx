import React from "react";
import charter1 from "../assets/charter1.jpg";
import charter2 from "../assets/charter2.jpg";

const Charters = () => {
  return (
    <>
      <div className="container justify">
        <div className="row mt-5">
          <div className="col-lg-12">
            <h1 className="text-uppercase heading fw-bold">
              air charter service
            </h1>
            <p className="details fw-normal">
              Private jet charter is the only way to fully travel on your terms.
              Whether it’s accessing a remote destination or taking back control
              of productivity and flight scheduling, the popularity of private
              jet hire is exploding in both the business and leisure spaces.
              This is what you need to know about chartering a private jet.
            </p>
          </div>
        </div>

        {/* 1 */}
        <div className="row mt-5">
          <div className="col-lg-6">
            <img src={charter1} className="w-100" alt="charter1" />
          </div>
          <div className="col-lg-6">
            <h1 className="text-uppercase heading fw-bold">
              private jet charter for business
            </h1>
            <p className="details fw-normal">
              Successful companies and individuals choose to travel by private
              airplane for a whole host of reasons. While most are familiar with
              the time-saving convenience, flexibility and premium experience of
              flying in luxury private jets, private jet hire also enables
              executives, senior management and key personnel to fulfil strict
              schedules and attend a number of meetings in different cities, or
              carry out several site visits in a single day.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="row mt-5 flex-lg-row-reverse">
          <div className="col-lg-6">
            <img src={charter2} className="w-100" alt="charter2" />
          </div>
          <div className="col-lg-6">
            <h1 className="text-uppercase heading fw-bold">
              private jet charter for leisure
            </h1>
            <p className="details fw-normal">
              Private jet hire for leisure purposes allows yourself, your family
              and friends to travel in luxury, comfort and privacy. It’s fast
              gaining in popularity as leisure time becomes increasingly
              precious and we value the experience of the journey almost as much
              as the destination.Whether it’s a short trip for a weekend skiing
              or a two-week holiday in the Caribbean, we’ll help you choose from
              a variety of popular private planes to get you and your loved ones
              to your destination in comfort and with minimal fuss. Access to
              private terminals also helps you avoid the hustle and bustle of
              busy airports and queues through security, so you’ll arrive
              relaxed, well-rested and ready to make the most of your next
              adventure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charters;
