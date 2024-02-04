"use client";
import React, { useRef, useState } from "react";

// import required modules
import Select from "react-select";

export default function DealersPageDescription({ carModelDetails, carVariantsList }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");
    const [selectedGroup, setselectedGroup] = useState(null);

    const openModal = (id) => {
        setVideoId(id);
        setOpen(true);
    };

    // Assuming each variant object in carVariantsList has an 'id' and 'name' property
    const optionGroup = carVariantsList?.map(variant => ({
        value: variant._id, // Use the unique identifier of the variant here
        label: variant.name, // The name of the variant to be displayed
    }));

    function handleSelectGroup(selectedGroup) {
        const modelId = carModelDetails?._id;
        const variantId = selectedGroup.value;
        setselectedGroup(selectedGroup);
    }

    return (
        <>

            <div className=" p20 bdr_none pl0 pr0">
                <div className="wrapper">
                    <h4>Hyundai Cars Dealers and Showrooms in Bangalore</h4>
                    <p>
                        Carportal connects you with authorized Hyundai Showrooms and dealers in Bangalore with their address and complete contact info.
                        For more information on Hyundai Cars Price, Offers, EMI options and test drive contact the below mentioned dealers in Bangalore.
                    </p>
                </div>

                <div className="d-flex gap-2">
                    <div className=" mb-3 w-75 mt-4">
                        <Select
                            placeholder="Change Variant..."
                            value={selectedGroup}
                            onChange={handleSelectGroup}
                            options={optionGroup}
                            className="select2-selection"
                        // styles={customStyles} 
                        />
                    </div>
                    <div className=" mb-3 w-75 mt-4">
                        <Select
                            placeholder="Change Variant..."
                            value={selectedGroup}
                            onChange={handleSelectGroup}
                            options={optionGroup}
                            className="select2-selection"
                        // styles={customStyles} 
                        />
                    </div>
                    <div className=" mb-3 w-75 mt-4">
                    <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20" data-bs-toggle="modal" data-bs-target="#contactDealerForm">
                  <span className="flaticon-profit-report mr10 fz18 vam" />
                  Contact Dealer
                </button>
                    </div>
                </div>
                {/* End opening_hour_widgets */}
            </div>
        </>
    );
}
