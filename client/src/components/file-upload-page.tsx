import React from "react";
import { getGreeting, getTodayDate } from "@/lib/utils";
import { DropZone } from "@/components/drop-zone";

export default function FileUploadPage() {
    const greeting = getGreeting();
    const todayDate = getTodayDate();
    
    return (
        <div className="px-6 h-screen">
            <div className="flex justify-between items-center py-4">
                <h2 className="text-2xl font-semibold">{`${greeting}, Soham!`}</h2>
                <p className="text-lg font-semibold">{todayDate}</p>
            </div>
            <h1 className="text-xl text-center mt-6 mb-6">Upload a picture of your meal...</h1>
            <div className="w-4/5 h-3/5 mx-auto">
                <DropZone />
            </div>
        </div>
    );
}
