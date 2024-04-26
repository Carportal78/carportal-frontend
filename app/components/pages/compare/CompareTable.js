"use client";

import { React ,useState,useEffect, use } from "react";
import "./styles.scss"
import { Table } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

const mock = [
  {
      "_id": "6617f73f789dbcb6884b501c",
      "name": "Renault Kiger RXE",
      "carModel": {
          "_id": "6617f504789dbcb6884b4fe8",
          "modelName": "Renault Kiger",
          "carBrand": {
              "_id": "65daae8d9a3a80f62857cc51",
              "brandName": "Renault",
              "countryOfOrigin": "India",
              "status": true,
              "author": "653374d3f45cbd1a7f47c32d",
              "media": {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1708830370/categories/qcoibir9boo1ggbdqvmi.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "bmw (3).jpg"
              },
              "createdBy": "653374d3f45cbd1a7f47c32d",
              "updatedBy": "653374d3f45cbd1a7f47c32d",
              "__v": 0
          },
          "bodyType": "SUV",
          "description": "Renault Kiger is a 5 seater SUV car with FWD option. Renault Kiger Price starts from ₹ 6 Lakh & top model price goes upto ₹ 11.23 Lakh. This model is available with 999 cc engine option. This car is available in Petrol option with both Manual & Automatic transmission. It's Petrol mileage ranges between 18.24 to 20.5 kmpl. This model has safety airbags. & 405 Litres boot space. This model is available in 9 colours. Based on Renault Kiger user reviews, it has earned an overall user rating of 4.2 out of 5.",
          "year": "2024",
          "priceRange": {
              "minPrice": 6,
              "minPriceType": "Lakhs",
              "maxPrice": 11.23,
              "maxPriceType": "Lakhs"
          },
          "status": true,
          "budget": "under_15",
          "fuelType": [
              "Petrol"
          ],
          "mileage": "above_15",
          "seatingCapacity": "5_seater",
          "transmissionType": [
              "Manual",
              "Automatic"
          ],
          "displacement": "below_1000",
          "author": "653374d3f45cbd1a7f47c32d",
          "media": [
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1712846082/categories/xclhmytmo2xvr4butn9i.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "1.jpg",
                  "_id": "6617f504789dbcb6884b4fe9"
              },
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1712846082/categories/dkasfjtudd9rzkyr5s3t.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "2.jpg",
                  "_id": "6617f504789dbcb6884b4fea"
              },
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1712846083/categories/efg6calmfemkquwklfqu.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "3.jpg",
                  "_id": "6617f504789dbcb6884b4feb"
              },
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1712846083/categories/tjxihdhuvaot29cby63g.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "4.jpg",
                  "_id": "6617f504789dbcb6884b4fec"
              }
          ],
          "categories": [],
          "createdBy": "653374d3f45cbd1a7f47c32d",
          "updatedBy": "653374d3f45cbd1a7f47c32d",
          "__v": 0
      },
      "basicInformation": {
          "onRoadPrice": "664202",
          "userRating": 4.2,
          "startEmiAmount": "13446",
          "startInsuranceAmount": "33382",
          "serviceCost": "NA"
      },
      "engineAndTransmission": {
          "engineType": "1.0L energy",
          "displacement": "999",
          "noOfCylinders": "3",
          "maxPower": "71.01bhp@6250rpm",
          "maxTorque": "96Nm@3500rpm",
          "valuePerCylinder": "4",
          "fuelSupplySystem": "MPFi",
          "compressionRatio": "NA",
          "turboCharge": "No",
          "transmissionType": "Manual",
          "gearBox": "5-Speed",
          "mildHybrid": "NO",
          "driverType": "FWD",
          "cluchType": "NA"
      },
      "fuelAndPerformance": {
          "fuelType": "Petrol",
          "mileageCity": "NA",
          "mileageArai": "19.17",
          "fuelTankCapacity": "40",
          "emissionNormCompliance": "BS VI 2.0"
      },
      "suspensionAndSteeringAndBrakes": {
          "fontSuspension": "Mac Pherson strut with lower transverse link",
          "rearSuspension": "Twist beam suspension with coil spring",
          "steeringType": "Electric",
          "steeringColumn": "NA",
          "turningRadius": "NA",
          "frontBrakeType": "Disc",
          "rearBrakeType": "Drum",
          "emissionNormCompliance": "BS VI 2.0",
          "tyreSize": "195/60 R16",
          "tyreType": "Radial, Tubeless",
          "wheelSize": "16 Inch",
          "alloyWheelSize": "NA",
          "alloyWheelSizeFront": "NA",
          "alloyWheelSizeRear": "NA",
          "bootSpace": "84"
      },
      "dimensionAndCapacity": {
          "length": "3991",
          "width": "1750",
          "height": "1605",
          "groundClearanceUnladen": "205",
          "wheelBase": "2500",
          "frontTread": "NA",
          "rearTread": "1535",
          "kerbWeight": "1012",
          "grossWeight": "NA",
          "seatingCapacity": "5",
          "bootSpace": "405",
          "noOfDoors": "5"
      },
      "interior": {
          "tachometer": true,
          "electronicutiTripmeter": false,
          "fabricUpholestry": false,
          "leatherSteeringWheel": false,
          "gloveCompartment": true,
          "digitalClock": false,
          "outsideTemperatureisplay": false,
          "digitalOdometer": true,
          "dualToneDashboard": false,
          "additionFeatures": "Muted melange seat upholstery,8.9 cm LED instrument cluster",
          "digitalCluster": "",
          "digitalClusterSize": 0,
          "upholstery": null
      },
      "exterior": {
          "bodyType": "SUV",
          "adjustableHeadlights": "YES",
          "fogLightsFront": false,
          "powerAdjustableExteriorRearViewMirror": false,
          "manuallyAdjustableExtRearViewMirror": true,
          "electricFoldingRearViewMirror": false,
          "rearWindowWiper": false,
          "rearWindowWasher": false,
          "rearWindowDefogger": false,
          "wheelCovers": false,
          "alloyWheels": false,
          "powerAntenna": false,
          "rearSpoiler": true,
          "outsideRearViewMirrorTurnIndicators": true,
          "integratedAntenna": false,
          "chromeGrille": false,
          "chromeGarnish": false,
          "projectorHeadlamps": false,
          "roofRail": false,
          "ledDrls": true,
          "ledHeadlights": false,
          "ledTaillights": true,
          "ledFogLamps": false,
          "fogLights": false,
          "additionalFeatures": "C-shaped signature LED tail lamps,Mystery black ORVMs,Sporty rear spoiler,Satin silver roof rails,Mystery black front fender accentuator",
          "antenna": "",
          "bootOpening": "",
          "puddleLamps": "",
          "tyreSize": "195/60 R16",
          "tyreType": "Radial, Tubeless",
          "wheelSize": "16 Inch",
          "allowWheelSize": "NA",
          "availableColors": []
      },
      "status": true,
      "author": {
          "_id": "653374d3f45cbd1a7f47c32d"
      },
      "media": [
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1712846653/categories/o5rhxxl2onpdfhdw2eyk.jpg",
              "mediaType": "image/jpeg",
              "altText": "1.jpg",
              "_id": "6617f73f789dbcb6884b501d"
          },
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1712846653/categories/tgyxfovjqvjx6p6fxiiz.jpg",
              "mediaType": "image/jpeg",
              "altText": "2.jpg",
              "_id": "6617f73f789dbcb6884b501e"
          },
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1712846653/categories/yr7nug8prsla2sl39bos.jpg",
              "mediaType": "image/jpeg",
              "altText": "3.jpg",
              "_id": "6617f73f789dbcb6884b501f"
          },
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1712846654/categories/wwxngy3221xsrbajkcni.jpg",
              "mediaType": "image/jpeg",
              "altText": "4.jpg",
              "_id": "6617f73f789dbcb6884b5020"
          }
      ],
      "createdBy": {
          "_id": "653374d3f45cbd1a7f47c32d"
      },
      "updatedBy": {
          "_id": "653374d3f45cbd1a7f47c32d"
      },
      "__v": 0
  },
  {
      "_id": "6608243918897bca4e53916c",
      "name": "Hyundai Venue N Line N6 Turbo",
      "carModel": {
          "_id": "6608201818897bca4e5390e8",
          "modelName": "Hyundai Venue N Line",
          "carBrand": {
              "_id": "65ba688d2aadf572616a4b08",
              "brandName": "Hyundai",
              "countryOfOrigin": "South Korea",
              "status": true,
              "author": "653374d3f45cbd1a7f47c32d",
              "media": {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1708830095/categories/fftxnjhfqwbfbkj6oi0u.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "hyundai (1).jpg"
              },
              "createdBy": "653374d3f45cbd1a7f47c32d",
              "updatedBy": "653374d3f45cbd1a7f47c32d",
              "__v": 0
          },
          "bodyType": "SUV",
          "description": "Hyundai Venue N Line is a 5 seater SUV car with FWD option. Hyundai Venue N Line Price starts from ₹ 12.08 Lakh & top model price goes upto ₹ 13.90 Lakh. This model is available with 998 cc engine option. This car is available in Petrol option with both Manual & Automatic transmission. It's Petrol mileage is 18 kmpl. This model has 6 safety airbags. This model is available in 5 colours. Based on Hyundai Venue N Line user reviews, it has earned an overall user rating of 4.6 out of 5.",
          "year": "2024",
          "priceRange": {
              "minPrice": 12.08,
              "minPriceType": "Lakhs",
              "maxPrice": 13.9,
              "maxPriceType": "Lakhs"
          },
          "status": true,
          "budget": "under_15",
          "fuelType": [
              "Petrol"
          ],
          "mileage": "above_15",
          "seatingCapacity": "5_seater",
          "transmissionType": [
              "Manual",
              "Automatic"
          ],
          "displacement": "below_1000",
          "author": "653374d3f45cbd1a7f47c32d",
          "media": [
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711808534/categories/safzb14drd6b0trkfwn1.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "1.jpg",
                  "_id": "6608201818897bca4e5390e9"
              },
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711808534/categories/wc7gberwk0jeg9eevmmv.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "2.jpg",
                  "_id": "6608201818897bca4e5390ea"
              },
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711808535/categories/xqitlsupgfsipzkwafuc.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "3.jpg",
                  "_id": "6608201818897bca4e5390eb"
              },
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711808535/categories/zukm6kkqctfq9u6u4ilf.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "4.jpg",
                  "_id": "6608201818897bca4e5390ec"
              }
          ],
          "categories": [],
          "createdBy": "653374d3f45cbd1a7f47c32d",
          "updatedBy": "653374d3f45cbd1a7f47c32d",
          "__v": 0
      },
      "basicInformation": {
          "onRoadPrice": "1392861",
          "userRating": 4.6,
          "startEmiAmount": "26726",
          "startInsuranceAmount": "44841",
          "serviceCost": "3619"
      },
      "engineAndTransmission": {
          "engineType": "Kappa 1.0 l turbo GDi",
          "displacement": "998",
          "noOfCylinders": "3",
          "maxPower": "118.41bhp@6000rpm",
          "maxTorque": "172Nm@1500-4000rpm",
          "valuePerCylinder": "4",
          "fuelSupplySystem": "N/A",
          "compressionRatio": "N/A",
          "turboCharge": "YES",
          "transmissionType": "Manual",
          "gearBox": "6-Speed iMT",
          "mildHybrid": "NO",
          "driverType": "FWD",
          "cluchType": "N/A"
      },
      "fuelAndPerformance": {
          "fuelType": "Petrol",
          "mileageCity": "N/A",
          "mileageArai": "18",
          "fuelTankCapacity": "45",
          "emissionNormCompliance": "BS VI 2.0"
      },
      "suspensionAndSteeringAndBrakes": {
          "fontSuspension": "Macpherson Strut with Coil Spring",
          "rearSuspension": "Coupled torsion beam axle with coil spring",
          "steeringType": "Electric",
          "steeringColumn": "Tilt",
          "turningRadius": "5.1",
          "frontBrakeType": "Disc",
          "rearBrakeType": "Disc",
          "emissionNormCompliance": "BS VI 2.0",
          "tyreSize": "215/60 R16",
          "tyreType": "Tubeless, Radial",
          "wheelSize": "16 Inch",
          "alloyWheelSize": "16 Inch",
          "alloyWheelSizeFront": "16 Inch",
          "alloyWheelSizeRear": "16 Inch",
          "bootSpace": "350"
      },
      "dimensionAndCapacity": {
          "length": "3995",
          "width": "1770",
          "height": "1617",
          "groundClearanceUnladen": "190",
          "wheelBase": "2500",
          "frontTread": "N/A",
          "rearTread": "N/A",
          "kerbWeight": "N/A",
          "grossWeight": "N/A",
          "seatingCapacity": "5",
          "bootSpace": "350",
          "noOfDoors": "5"
      },
      "interior": {
          "tachometer": true,
          "electronicutiTripmeter": false,
          "fabricUpholestry": false,
          "leatherSteeringWheel": true,
          "gloveCompartment": true,
          "digitalClock": false,
          "outsideTemperatureisplay": false,
          "digitalOdometer": false,
          "dualToneDashboard": false,
          "additionFeatures": "Dashcam with dual camera,Sporty black interiors with athletic red inserts,Leatherette seats,Exciting red ambient lighting,Sporty metal pedals,Dark metal finish inside door handles, Upholstery Leatherette",
          "digitalCluster": "Semi",
          "digitalClusterSize": 0,
          "upholstery": null
      },
      "exterior": {
          "bodyType": "SUV",
          "adjustableHeadlights": "YES",
          "fogLightsFront": false,
          "powerAdjustableExteriorRearViewMirror": true,
          "manuallyAdjustableExtRearViewMirror": false,
          "electricFoldingRearViewMirror": true,
          "rearWindowWiper": true,
          "rearWindowWasher": true,
          "rearWindowDefogger": true,
          "wheelCovers": false,
          "alloyWheels": true,
          "powerAntenna": false,
          "rearSpoiler": true,
          "outsideRearViewMirrorTurnIndicators": true,
          "integratedAntenna": true,
          "chromeGrille": false,
          "chromeGarnish": false,
          "projectorHeadlamps": true,
          "roofRail": true,
          "ledDrls": true,
          "ledHeadlights": true,
          "ledTaillights": true,
          "ledFogLamps": false,
          "fogLights": false,
          "additionalFeatures": "Dark chrome front grille,Body coloured Bumpers,Body coloured Outside door handles,Painted black finish - Outside door mirrors,Front & rear skid plates,Side sill garnish,Side fenders (Left & right),N Line emblem (Front radiator grille Side fenders (Left & right),Twin tip muffler with exhaust note, Cornering Headlamps, Single Pane Sun Roof",
          "antenna": "Shark Fin",
          "bootOpening": "Manual",
          "puddleLamps": "YES",
          "tyreSize": "215/60 R16",
          "tyreType": "Tubeless, Radial",
          "wheelSize": "16 Inch",
          "allowWheelSize": "16 Inch",
          "availableColors": []
      },
      "status": true,
      "author": {
          "_id": "653374d3f45cbd1a7f47c32d"
      },
      "media": [
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711809592/categories/glkget3afqwxxfbvsqiv.jpg",
              "mediaType": "image/jpeg",
              "altText": "1.jpg",
              "_id": "6608243918897bca4e53916d"
          },
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711809592/categories/vxed5im43xmgfz6ffxyp.jpg",
              "mediaType": "image/jpeg",
              "altText": "2.jpg",
              "_id": "6608243918897bca4e53916e"
          },
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711809593/categories/mwvul8fcop8nh3k6njxg.jpg",
              "mediaType": "image/jpeg",
              "altText": "3.jpg",
              "_id": "6608243918897bca4e53916f"
          },
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711809592/categories/zav6wn4rtaqrkrbflltk.jpg",
              "mediaType": "image/jpeg",
              "altText": "4.jpg",
              "_id": "6608243918897bca4e539170"
          }
      ],
      "createdBy": {
          "_id": "653374d3f45cbd1a7f47c32d"
      },
      "updatedBy": {
          "_id": "653374d3f45cbd1a7f47c32d"
      },
      "__v": 0
  },
    {
      "_id": "6608243918897bca4e53916c",
      "name": "Hyundai Venue N Line N6 Turbo",
      "carModel": {
          "_id": "6608201818897bca4e5390e8",
          "modelName": "Hyundai Venue N Line",
          "carBrand": {
              "_id": "65ba688d2aadf572616a4b08",
              "brandName": "Hyundai",
              "countryOfOrigin": "South Korea",
              "status": true,
              "author": "653374d3f45cbd1a7f47c32d",
              "media": {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1708830095/categories/fftxnjhfqwbfbkj6oi0u.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "hyundai (1).jpg"
              },
              "createdBy": "653374d3f45cbd1a7f47c32d",
              "updatedBy": "653374d3f45cbd1a7f47c32d",
              "__v": 0
          },
          "bodyType": "SUV",
          "description": "Hyundai Venue N Line is a 5 seater SUV car with FWD option. Hyundai Venue N Line Price starts from ₹ 12.08 Lakh & top model price goes upto ₹ 13.90 Lakh. This model is available with 998 cc engine option. This car is available in Petrol option with both Manual & Automatic transmission. It's Petrol mileage is 18 kmpl. This model has 6 safety airbags. This model is available in 5 colours. Based on Hyundai Venue N Line user reviews, it has earned an overall user rating of 4.6 out of 5.",
          "year": "2024",
          "priceRange": {
              "minPrice": 12.08,
              "minPriceType": "Lakhs",
              "maxPrice": 13.9,
              "maxPriceType": "Lakhs"
          },
          "status": true,
          "budget": "under_15",
          "fuelType": [
              "Petrol"
          ],
          "mileage": "above_15",
          "seatingCapacity": "5_seater",
          "transmissionType": [
              "Manual",
              "Automatic"
          ],
          "displacement": "below_1000",
          "author": "653374d3f45cbd1a7f47c32d",
          "media": [
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711808534/categories/safzb14drd6b0trkfwn1.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "1.jpg",
                  "_id": "6608201818897bca4e5390e9"
              },
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711808534/categories/wc7gberwk0jeg9eevmmv.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "2.jpg",
                  "_id": "6608201818897bca4e5390ea"
              },
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711808535/categories/xqitlsupgfsipzkwafuc.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "3.jpg",
                  "_id": "6608201818897bca4e5390eb"
              },
              {
                  "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711808535/categories/zukm6kkqctfq9u6u4ilf.jpg",
                  "mediaType": "image/jpeg",
                  "altText": "4.jpg",
                  "_id": "6608201818897bca4e5390ec"
              }
          ],
          "categories": [],
          "createdBy": "653374d3f45cbd1a7f47c32d",
          "updatedBy": "653374d3f45cbd1a7f47c32d",
          "__v": 0
      },
      "basicInformation": {
          "onRoadPrice": "1392861",
          "userRating": 4.6,
          "startEmiAmount": "26726",
          "startInsuranceAmount": "44841",
          "serviceCost": "3619"
      },
      "engineAndTransmission": {
          "engineType": "Kappa 1.0 l turbo GDi",
          "displacement": "998",
          "noOfCylinders": "3",
          "maxPower": "118.41bhp@6000rpm",
          "maxTorque": "172Nm@1500-4000rpm",
          "valuePerCylinder": "4",
          "fuelSupplySystem": "N/A",
          "compressionRatio": "N/A",
          "turboCharge": "YES",
          "transmissionType": "Manual",
          "gearBox": "6-Speed iMT",
          "mildHybrid": "NO",
          "driverType": "FWD",
          "cluchType": "N/A"
      },
      "fuelAndPerformance": {
          "fuelType": "Petrol",
          "mileageCity": "N/A",
          "mileageArai": "18",
          "fuelTankCapacity": "45",
          "emissionNormCompliance": "BS VI 2.0"
      },
      "suspensionAndSteeringAndBrakes": {
          "fontSuspension": "Macpherson Strut with Coil Spring",
          "rearSuspension": "Coupled torsion beam axle with coil spring",
          "steeringType": "Electric",
          "steeringColumn": "Tilt",
          "turningRadius": "5.1",
          "frontBrakeType": "Disc",
          "rearBrakeType": "Disc",
          "emissionNormCompliance": "BS VI 2.0",
          "tyreSize": "215/60 R16",
          "tyreType": "Tubeless, Radial",
          "wheelSize": "16 Inch",
          "alloyWheelSize": "16 Inch",
          "alloyWheelSizeFront": "16 Inch",
          "alloyWheelSizeRear": "16 Inch",
          "bootSpace": "350"
      },
      "dimensionAndCapacity": {
          "length": "3995",
          "width": "1770",
          "height": "1617",
          "groundClearanceUnladen": "190",
          "wheelBase": "2500",
          "frontTread": "N/A",
          "rearTread": "N/A",
          "kerbWeight": "N/A",
          "grossWeight": "N/A",
          "seatingCapacity": "5",
          "bootSpace": "350",
          "noOfDoors": "5"
      },
      "interior": {
          "tachometer": true,
          "electronicutiTripmeter": false,
          "fabricUpholestry": false,
          "leatherSteeringWheel": true,
          "gloveCompartment": true,
          "digitalClock": false,
          "outsideTemperatureisplay": false,
          "digitalOdometer": false,
          "dualToneDashboard": false,
          "additionFeatures": "Dashcam with dual camera,Sporty black interiors with athletic red inserts,Leatherette seats,Exciting red ambient lighting,Sporty metal pedals,Dark metal finish inside door handles, Upholstery Leatherette",
          "digitalCluster": "Semi",
          "digitalClusterSize": 0,
          "upholstery": null
      },
      "exterior": {
          "bodyType": "SUV",
          "adjustableHeadlights": "YES",
          "fogLightsFront": false,
          "powerAdjustableExteriorRearViewMirror": true,
          "manuallyAdjustableExtRearViewMirror": false,
          "electricFoldingRearViewMirror": true,
          "rearWindowWiper": true,
          "rearWindowWasher": true,
          "rearWindowDefogger": true,
          "wheelCovers": false,
          "alloyWheels": true,
          "powerAntenna": false,
          "rearSpoiler": true,
          "outsideRearViewMirrorTurnIndicators": true,
          "integratedAntenna": true,
          "chromeGrille": false,
          "chromeGarnish": false,
          "projectorHeadlamps": true,
          "roofRail": true,
          "ledDrls": true,
          "ledHeadlights": true,
          "ledTaillights": true,
          "ledFogLamps": false,
          "fogLights": false,
          "additionalFeatures": "Dark chrome front grille,Body coloured Bumpers,Body coloured Outside door handles,Painted black finish - Outside door mirrors,Front & rear skid plates,Side sill garnish,Side fenders (Left & right),N Line emblem (Front radiator grille Side fenders (Left & right),Twin tip muffler with exhaust note, Cornering Headlamps, Single Pane Sun Roof",
          "antenna": "Shark Fin",
          "bootOpening": "Manual",
          "puddleLamps": "YES",
          "tyreSize": "215/60 R16",
          "tyreType": "Tubeless, Radial",
          "wheelSize": "16 Inch",
          "allowWheelSize": "16 Inch",
          "availableColors": []
      },
      "status": true,
      "author": {
          "_id": "653374d3f45cbd1a7f47c32d"
      },
      "media": [
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711809592/categories/glkget3afqwxxfbvsqiv.jpg",
              "mediaType": "image/jpeg",
              "altText": "1.jpg",
              "_id": "6608243918897bca4e53916d"
          },
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711809592/categories/vxed5im43xmgfz6ffxyp.jpg",
              "mediaType": "image/jpeg",
              "altText": "2.jpg",
              "_id": "6608243918897bca4e53916e"
          },
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711809593/categories/mwvul8fcop8nh3k6njxg.jpg",
              "mediaType": "image/jpeg",
              "altText": "3.jpg",
              "_id": "6608243918897bca4e53916f"
          },
          {
              "url": "https://res.cloudinary.com/dojcxwt5h/image/upload/v1711809592/categories/zav6wn4rtaqrkrbflltk.jpg",
              "mediaType": "image/jpeg",
              "altText": "4.jpg",
              "_id": "6608243918897bca4e539170"
          }
      ],
      "createdBy": {
          "_id": "653374d3f45cbd1a7f47c32d"
      },
      "updatedBy": {
          "_id": "653374d3f45cbd1a7f47c32d"
      },
      "__v": 0
  }
]

const CompareTable = () => {
  const [carDetails, setCarDetails] = useState([]);
  const defaultState = { id:'', make: '', model: '', variant: '', price: '', image: '', isEnabled: true, allFieldsSelected: false }
  const [compareData, setCompareData] = useState([])
  const [isEditCard, setIsEditCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [prevCards, setPrevCards] = useState([
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false },
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false },
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false }
  ])
  const [cards, setCards] = useState([
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: true, allFieldsSelected: false },
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false },
    { id: '', make: '', model: '', variant: '', price: '', image: '', isEnabled: false, allFieldsSelected: false }
  ]);

  const comparisonCards = [
    "Basic Information",
    "Engine and Transmission",
    "Fuel & Performance",
    "Suspension, Steering & Brakes",
    "Dimension & Capacity",
    "Comfort & Convinience",
    "Interior",
    "Exterior",
    "Safety",
    "Entertainment and Communication"]

  useEffect(() => {
      const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
      if (true) {
        setIsLoading(false)
        fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carinfo/for/65538448b78add9eaa02d417`,
        {
          method: 'GET',
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          setIsLoading(false)
          if (data  && data?.data) {
            setCarDetails(data?.data);
          }
        })
        .catch(error => {
          setIsLoading(false)
          console.error('Error fetching car details: ', error);
        })
      }
  },[]);

  const handleOnCompareClick = () => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    const idsArray = cards
    .filter(car => car.id !== "") // Filter out objects with empty id
    .map(car => car.id); 
    const selectedCarIds = {
      "carIds": idsArray
    }
    if (true) {
      setIsLoading(true)
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/compare/carsvariants/for/65538448b78add9eaa02d417`,
       {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedCarIds) 
      })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false)
        if (data  && data.data && data.data.cars) {
          setCompareData(data.data.cars);
        }
      })
      .catch(error => {
        setIsLoading(false)
        console.error('Error fetching car models: ', error);
      })
    }
  };

  const handleAddCard = (index) => {
    if (index === 2) {
      const updatedCards = [...cards];
      updatedCards[index] = defaultState
      setCards(updatedCards);
    }
  };

  const getCarImage = (index) => {
    const cardData = cards[index]
    if(cardData.make && cardData.model) {
      const modelImg = carDetails.find((make) => make.brandName === cardData.make)?.models.find((model) => model.modelName === cardData.model)?.modelImage?.[0]?.url
      const updatedCards = [...cards];
      updatedCards[index].image = modelImg;
      setCards(updatedCards);
    }
  }

  const getCarPrice = (index) => {
    const cardData = cards[index]
    if(cardData.make && cardData.model) {
      const modelPrice = carDetails.find((make) => make.brandName === cardData.make)?.models.find((model) => model.modelName === cardData.model).variants.find((variant) => variant.modelName === cardData.name)?.pricingDetails?.exShowroomPrice
      const updatedCards = [...cards];
      updatedCards[index].price = modelPrice;
      setCards(updatedCards);
    }
  }

  const handleMakeChange = (index, value) => {
    const updatedCards = [...cards];
    updatedCards[index].make = value;
    setCards(updatedCards);
  };

  const handleModelChange = (index, value) => {
    const updatedCards = [...cards];
    updatedCards[index].model = value;
    setCards(updatedCards);
    getCarImage(index)
  };

  const handleVariantChange = (index, value, id) => {
    const updatedCards = [...cards];
    updatedCards[index].variant = value;
    updatedCards[index].allFieldsSelected = true;
    updatedCards[index].id = id
    setCards(updatedCards);
    setPrevCards(updatedCards)
    getCarPrice(index)
    setIsEditCard(false)
    if (value !== '') {
      enableNextCard(index);
    }
  };

  const enableNextCard = (index) => {
    const updatedCards = [...cards];
    if (index < updatedCards.length - 1) {
      updatedCards[index + 1].isEnabled = true;
    }
    setCards(updatedCards);
  };

  const handleCardEdit = (isEdit = false, index) => {
    if(isEdit) {
      setIsEditCard(true)
      const prevCards = [...cards];
      setPrevCards(prevCards)
      const updatedCards = [...cards];
      updatedCards[index] = defaultState;
      setCards(updatedCards)
      return renderCard(updatedCards, 0)
    }
  }

  const handleEditCloseClick = (index) => {
    if(index === cards.length-1) {
      const updatedCards = [...cards]
      updatedCards[index].isEnabled = false
      setCards(updatedCards)
    } else {
      setCards(prevCards);
      setPrevCards(defaultState)
      setIsEditCard(false)
    }
  }

  const renderCarDetails = (index) => {
    return (
      <div>
        <img src={cards[index]?.image} style={{ position: 'relative' }} />
        <div style={{ display:'flex' , flexDirection:'column', alignItems: 'flex-start', padding: '15px', fontWeight: '500'}}>
          <div> {`${cards[index]?.variant}`}
            <i class="fa fa-pen-to-square" style={{ fontSize:'10px', paddingLeft: '10px', cursor: 'pointer'}} onClick={() => handleCardEdit(true, index)}></i>
          </div>
          <div style={{ fontSize: '18px', fontWeight: '600', marginTop: '5px'}}>₹ {Number(cards[index]?.price).toLocaleString('en-IN')}*</div>
          <p style={{ fontSize: '10px', color: 'gray'}}>*Ex-showroom price</p>
        </div>
      </div>
    )
  }

  const renderDefaultCard = (index) => {
    return (
      <>
        <div className="circle" onClick={() => handleAddCard(index)}>
          <i className="fas fa-plus"></i>
        </div>
        <p>Add Car</p>
      </>
    )
  }

  function convertKeysToLowercase(obj) {
    const newObject = {};
    Object.keys(obj).forEach(key => {
        newObject[key.toLowerCase()] = obj[key];
    });
    return Object.keys(newObject);
  }

  function formatComparisonLabel (key) {
    return key.replace(/\s/g, '').replace(/,/g, 'and').replace(/&/g, 'and')
  }

  function checkItemsInObject(carObject) {
    const presentItems = [];
    const carObjectkeys = convertKeysToLowercase(carObject)
    for (const key of comparisonCards) {
      const modifiedKey = formatComparisonLabel(key);
      if (carObjectkeys.includes(modifiedKey.toLowerCase())) {
        presentItems.push(key);
      }
    }
    return presentItems;
  }

  const renderTableHeaderIcon = (label) => {
    console.log(label)
    switch(label) {
      case 'Basic Information': return <i class="fa-solid fa-grip-vertical" style={{marginRight:'10px'}}></i>
      case 'Engine and Transmission': return <i class="fa-solid fa-feather-pointed" style={{marginRight:'10px'}}></i>
      case 'Fuel & Performance': return <i class="fa-solid fa-gas-pump" style={{marginRight:'10px'}}></i>
      case 'Suspension, Steering & Brakes': return <i class="fa-solid fa-dharmachakra" style={{marginRight:'10px'}}></i>
      case 'Dimension & Capacity': return <i class="fa-solid fa-ruler-combined" style={{marginRight:'10px'}}></i>
      case 'Interior': return <i class="fa-solid fa-feather-pointed" style={{marginRight:'10px'}}></i>
      case 'Exterior': return <i class="fa-solid fa-car-side" style={{marginRight:'10px'}}></i>
      case 'Comfort & Convinience': return <i class="fa-solid fa-user-shield" style={{marginRight:'10px'}}></i>
      case 'Entertainment and Communication': return <i class="fa-solid fa-radio" style={{marginRight:'10px'}}></i>
      case 'Safety': return <i class="fa-solid fa-user-shield" style={{marginRight:'10px'}}></i>
      default:  return <></>
    }
  }
  function comparisonCardDataMapper(label){
    if(label) {
      const key = formatComparisonLabel(label).toLowerCase();
      const compareCarBasicInfo = mock[0]?.basicInformation;
      const compareCarEngineAndTransmission = mock[0]?.engineAndTransmission;
      const compareCarFuelAndPerformance = mock[0]?.fuelAndPerformance;
      const compareCarSuspensionAndSteeringAndBrakes = mock[0]?.suspensionAndSteeringAndBrakes;
      const compareCarDimensionAndCapacity = mock[0]?.dimensionAndCapacity;
      const compareCarInterior = mock[0]?.interior;
      const compareCarExterior = mock[0]?.exterior;
      const compareCarSafety = mock[0]?.safety;
      const compareCarComfortAndConvinience = mock[0]?.comfortAndConvinience
      const compareCarEntertainmentAndCommunication = mock[0]?.entertainmentAndCommunication

      return (
        <Table striped hover className="compare-table">
          <thead>
              <tr>
                <th className="compare-th th-font th-style">
                  {renderTableHeaderIcon(label)}
                  {label}
                </th>
                {mock.map((data) => {
                  return (
                    <th className="compare-th th-font">{data.name}</th>
                  )
                })}
              </tr>
          </thead>
          <tbody>
              {key === 'basicinformation' && Object.keys(compareCarBasicInfo).map((infoKey) => (
                <tr key={infoKey}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {mock.map((car) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}`}>{car.basicInformation[infoKey] ? car.basicInformation[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'engineandtransmission' && Object.keys(compareCarEngineAndTransmission).map((infoKey) => (
                <tr key={infoKey}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {mock.map((car) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}`}>{car.engineAndTransmission[infoKey] ? car.engineAndTransmission[infoKey]: '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'fuelandperformance' && Object.keys(compareCarFuelAndPerformance).map((infoKey) => (
                <tr key={infoKey}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {mock.map((car) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}`}>{car.fuelAndPerformance[infoKey] ? car.fuelAndPerformance[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'suspensionandsteeringandbrakes' && Object.keys(compareCarSuspensionAndSteeringAndBrakes).map((infoKey) => (
                <tr key={infoKey}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {mock.map((car) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}`}>{car.suspensionAndSteeringAndBrakes[infoKey] ? car.suspensionAndSteeringAndBrakes[infoKey]: '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'dimensionandcapacity' && Object.keys(compareCarDimensionAndCapacity).map((infoKey) => (
                <tr key={infoKey}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {mock.map((car) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}`}>{car.dimensionAndCapacity[infoKey] ? car.dimensionAndCapacity[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'interior' && Object.keys(compareCarInterior).map((infoKey) => (
                <tr key={infoKey}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {mock.map((car) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}`}>{car.interior[infoKey] ? car.interior[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}
  
              {key === 'exterior' && Object.keys(compareCarExterior).map((infoKey) => (
                <tr key={infoKey}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {mock.map((car) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}`}>{car.exterior[infoKey] ? car.exterior[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}

              {key === 'comfortandconvinience' && Object.keys(compareCarComfortAndConvinience).map((infoKey) => (
                <tr key={infoKey}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {mock.map((car) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}`}>{car.comfortAndConvinience[infoKey] ? car.comfortAndConvinience[infoKey] : '-'}</td>
                  ))}
                </tr>
              ))}

              {key === 'safety' && Object.keys(compareCarSafety).map((infoKey) => (
                  <tr key={infoKey}>
                    <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                    {mock.map((car) => (
                      <td className="compare-td td-font" key={`${car._id}-${infoKey}`}>{car.safety[infoKey]}</td>
                    ))}
                  </tr>
              ))}

              {key === 'entertainmentandcommunication' && Object.keys(compareCarEntertainmentAndCommunication).map((infoKey) => (
                <tr key={infoKey}>
                  <td className="compare-td td-font td-border">{infoKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  {mock.map((car) => (
                    <td className="compare-td td-font" key={`${car._id}-${infoKey}`}>{car.entertainmentAndCommunication[infoKey]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </Table>
      )
    }

  }

  const renderComparison = () => {
    let comparisonItemsPresent = []
    for (const car of mock) {
      comparisonItemsPresent = checkItemsInObject(car);
    }
    let count = 0;
    return (
      comparisonItemsPresent.map((val) => (
         <div className="compare-card" style={{ width: '100%', height: 'auto', margin: '50px 0px'}}>
          {comparisonCardDataMapper(val)}
        </div>
      ))
    )
  }

  const renderCard = (card, index) => {
    return (
      <>
        <div className="card-body" style={{ width: '100%', padding: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {!card.allFieldsSelected && renderDefaultCard()}
          {(isEditCard || index === cards.length-1) && <div style={{ display:"flex", justifyContent: 'flex-end', padding: '5px 8px', fontSize: '16px', cursor: 'pointer', color: '#0d638f', background: 'white', borderRadius: '50%', position: 'absolute', right: '0', zIndex: '1', margin: '3px'}} onClick={() => handleEditCloseClick(index)}><i class="fa fa-xmark"></i></div>}
          {!card.allFieldsSelected && <div className="mb-3" style={{ padding: '10px 20px 0 20px', width: '100%'}}>
            <select id={`make-${index}`} className="form-select" value={card.make} onChange={(e) => handleMakeChange(index, e.target.value)} disabled={!card.isEnabled}>
              <option value="">Select Make</option>
              {carDetails.map((make) => (
                <option key={make.id} value={make.brandName}>{make.brandName}</option>
              ))}
            </select>
          </div>}
          {card.make && !card.allFieldsSelected && (
            <div className="mb-3" style={{ padding: '0 20px', width: '100%'}}>
              <select id={`model-${index}`} className="form-select" value={card.model} onChange={(e) => handleModelChange(index, e.target.value)} disabled={!card.isEnabled}>
                <option value="">Select Model</option>
                {carDetails.find((make) => make.brandName === card.make)?.models.map((model) => (
                  <option key={model.modelId} value={model.modelName}>{model.modelName}</option>
                ))}
              </select>
            </div>
          )}
          {card.model && !card.allFieldsSelected && (
            <div className="mb-3" style={{ padding: '10px 20px 0', width: '100%'}}>
              <select id={`variant-${index}`} className="form-select" value={card.variant} onChange={(e) => handleVariantChange(index, e.target.value, e.target.options[e.target.selectedIndex].id)} disabled={!card.isEnabled}>
                <option value="">Select Variant</option>
                {carDetails.find((make) => make.brandName === card.make)?.models.find((model) => model.modelName === card.model)?.variants.map((variant) => (
                  <option key={variant.id} value={variant.name} id={variant.id}>{variant.name}</option>
                ))}
              </select>
            </div>
          )}
          {card.allFieldsSelected && renderCarDetails(index)}
        </div>
      </>
    )
  }

  const renderCardPage = (card, index) => {
    return (
      <div key={index} className="card" style={{ width: '30%', minHeight: '300px', display:'flex', alignItems: 'center', justifyContent: 'center' }}>
        { cards[index]?.isEnabled ?  renderCard(card, index) : renderDefaultCard(index)}
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <Spinner className="d-flex" style={{marginLeft: 'auto', marginRight: 'auto'}} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    isLoading ?  renderLoading()
    :
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          {cards.map((card, index) => renderCardPage(card, index))}
      </div>
      <div style={{ width: "100%", display: "flex", alignItems: 'center', justifyContent: 'center'}}>
        <button className="btn btn-thm ofr_btn1 btn-block mt40 mb20" style={{width: "200px"}} data-bs-toggle="modal" data-bs-target="#compareForm" onClick={handleOnCompareClick}>
          <span className="flaticon-profit-report mr10 fz18 vam" />
          Compare Cars
        </button>
      </div>
      {isLoading ? renderLoading() : renderComparison()}
    </>
  );

};

export default CompareTable;