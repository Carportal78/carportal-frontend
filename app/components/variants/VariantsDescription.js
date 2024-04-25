"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const VariantsDescription = ({ carModelDetails, carVariantsList, name }) => {
    const [isExpanded, setIsExpanded] = useState(false); // State to manage the expanded/collapsed status

    // CSS styles for clipping the text to show only two lines
    const clipText = {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: isExpanded ? "none" : "2", // No limit when expanded
        overflow: "hidden",
        textOverflow: "ellipsis"
    };


    return (
        <>
            <h4>{name} Description</h4>
            <div className={`row mt-3 ${isExpanded ? '' : 'text-clamp'}`}>
                {carModelDetails?.description}
            </div>
            <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} className="text-left p-0">
                {isExpanded ? "Collapse" : "Read More"} {/* Toggle text based on state */}
            </Button>
            <style jsx>{`
        .text-clamp {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    `}</style>
        </>
    );
};

export default VariantsDescription;
