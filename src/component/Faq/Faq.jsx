import React from 'react';
import { Typography } from '../Typography/Typography';

const Faq = () => {
    return (
        <div className="p-8 max-w-[42rem]">
            {/* Title */}
            <h1 className="text-4xl leading-[45px] font-bold mb-6">FAQ</h1>
            <div className="space-y-4">
                <div className="border border-gray-300 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                        <strong>Can I get a refund?</strong>
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FFA500" }}></span>
                    </div>
                    <Typography variant='text'>
                        Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full
                        refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay
                        Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat.
                    </Typography>
                </div>
                <div className="border border-gray-300 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                        <strong>Can I change the travel date?</strong>
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FFA500" }}></span>
                    </div>
                </div>
                <div className="border border-gray-300 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                        <strong>When and where does the tour end?</strong>
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FFA500" }}></span>
                    </div>
                </div>
                <div className="border border-gray-300 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                        <strong>Do you arrange airport transfers?</strong>
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FFA500" }}></span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-[50px]"></div>
        </div>
    );
};

export default Faq;