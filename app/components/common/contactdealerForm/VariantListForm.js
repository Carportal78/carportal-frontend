import React from "react";
import ContactDealer from "./ContactDealer";
import SignupForm from "./SignupForm";
import Link from "next/link";
import { Button, Col, Container, FormControl, Row, Table } from "react-bootstrap";

const onRoadPriceData = {
    make: "Mercedez",
    carname: "Mercedez-benz",
    state: "Rajasthan",
    city: "Jaipur",
    model: "GLA",
    onRoadPrice: "48.50",
    priceType: "Lakh",
    transmission: "Automatic",
    mileage: "280,000",
    fuelType: "Diesel",
    engineSize: "5.2L",
    doors: "5",
    cylinders: "10",
    driverType: "4x4",
    imageSrc: "/images/listing/lsp1-v1.jpg",
    description: `Mercedes-Benz GLA price in New Delhi start at Rs. 48.50 Lakh. The
      lowest price model is Mercedes-Benz GLA 200 and the most priced
      model of Mercedes-Benz GLA AMG 35 4M priced at Rs. 52.70 Lakh.
      Used Mercedes-Benz GLA in New Delhi available for sale at Rs.
      18.50 Lakh onwards. Visit your nearest Mercedes-Benz GLA showroom
      in New Delhi for best offers. Compared primarily with Audi Q3
      price in New Delhi starting Rs. 46.27 Lakh and BMW X1 price in New
      Delhi starting Rs. 45.90 Lakh. View all Mercedes-Benz cars price
      in your city.`,
    variants: [
      {
        make: "Mercedez",
        carname: "Mercedez benz",
        state: "Rajasthan",
        city: "Jaipur",
        model: "GLA 200",
        onRoadPrice: "55.75",
        priceType: "Lakh",
        transmission: "Automatic",
        mileage: "280,000",
        fuelType: "Diesel",
        engineSize: "5.2L",
        doors: "5",
        cylinders: "10",
        driverType: "4x4",
        imageSrc: "/images/listing/lsp1-v1.jpg",
        description: `Mercedes-Benz GLA price in New Delhi start at Rs. 48.50 Lakh. The
                  lowest price model is Mercedes-Benz GLA 200 and the most priced
                  model of Mercedes-Benz GLA AMG 35 4M priced at Rs. 52.70 Lakh.
                  Used Mercedes-Benz GLA in New Delhi available for sale at Rs.
                  18.50 Lakh onwards. Visit your nearest Mercedes-Benz GLA showroom
                  in New Delhi for best offers. Compared primarily with Audi Q3
                  price in New Delhi starting Rs. 46.27 Lakh and BMW X1 price in New
                  Delhi starting Rs. 45.90 Lakh. View all Mercedes-Benz cars price
                  in your city.`,
      },
      {
        make: "Mercedez",
        carname: "Mercedez benz",
        state: "Rajasthan",
        city: "Jaipur",
        model: "GLA 220 4M BSVI",
        onRoadPrice: "62.40",
        priceType: "Lakh",
        transmission: "Automatic",
        mileage: "280,000",
        fuelType: "Diesel",
        engineSize: "5.2L",
        doors: "5",
        cylinders: "10",
        driverType: "4x4",
        imageSrc: "/images/listing/lsp1-v1.jpg",
        description: `Mercedes-Benz GLA price in New Delhi start at Rs. 48.50 Lakh. The
                    lowest price model is Mercedes-Benz GLA 200 and the most priced
                    model of Mercedes-Benz GLA AMG 35 4M priced at Rs. 52.70 Lakh.
                    Used Mercedes-Benz GLA in New Delhi available for sale at Rs.
                    18.50 Lakh onwards. Visit your nearest Mercedes-Benz GLA showroom
                    in New Delhi for best offers. Compared primarily with Audi Q3
                    price in New Delhi starting Rs. 46.27 Lakh and BMW X1 price in New
                    Delhi starting Rs. 45.90 Lakh. View all Mercedes-Benz cars price
                    in your city.`,
      },
      {
        make: "Mercedez",
        carname: "Mercedez benz",
        state: "Rajasthan",
        city: "Jaipur",
        model: "GLA 200 BSVI",
        onRoadPrice: "55.75",
        priceType: "Lakh",
        transmission: "Automatic",
        mileage: "280,000",
        fuelType: "Diesel",
        engineSize: "5.2L",
        doors: "5",
        cylinders: "10",
        driverType: "4x4",
        imageSrc: "/images/listing/lsp1-v1.jpg",
        description: `Mercedes-Benz GLA price in New Delhi start at Rs. 48.50 Lakh. The
                    lowest price model is Mercedes-Benz GLA 200 and the most priced
                    model of Mercedes-Benz GLA AMG 35 4M priced at Rs. 52.70 Lakh.
                    Used Mercedes-Benz GLA in New Delhi available for sale at Rs.
                    18.50 Lakh onwards. Visit your nearest Mercedes-Benz GLA showroom
                    in New Delhi for best offers. Compared primarily with Audi Q3
                    price in New Delhi starting Rs. 46.27 Lakh and BMW X1 price in New
                    Delhi starting Rs. 45.90 Lakh. View all Mercedes-Benz cars price
                    in your city.`,
      },
    ],
  };

const VariantListForm = ({ modelName, carVariantsList }) => {
    return (
        <div className="modal-dialog modal-dialog-centered" style={{maxWidth: '800px'}}>
            <div className="modal-content">
                <div className="modal-header">
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div className="modal-body container p20" style={{overflow: 'auto', maxHeight:'600px'}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul
                                className="sign_up_tab nav nav-tabs"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a
                                        className={`nav-link active`}
                                        id={`1-tab`}
                                        data-bs-toggle="tab"
                                        href={`#1`}
                                        role="tab"
                                        aria-controls={1}
                                        aria-selected={true}
                                    >
                                        {modelName} Variants List
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="tab-content container p0" id="myTabContent">
                        <div
                            className={`row mt30 tab-pane fade show active`}
                            id={1}
                            role="tabpanel"
                            aria-labelledby={`1-tab`}
                            key={1}
                        >
                            <div className="col-lg-12">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Variants</th>
                                            <th>On-Road Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carVariantsList?.map((variant, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <Link className="tdu color-blue ml10" href={`/variantDetails/${variant?.carModel?.modelName?.split(' ')?.join('-')?.toLowerCase()}/${variant?.carModel?._id}/variant/${variant?._id}`}>
                                                        {`${variant?.name} ${variant?.carModel?.modelName}`}
                                                    </Link>
                                                </td>
                                                <td>{`${variant?.basicInformation?.onRoadPrice.toLocaleString('en-IN')}`}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VariantListForm;
