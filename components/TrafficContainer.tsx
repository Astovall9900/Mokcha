import React from 'react'
import {Traffic} from '../types/Traffic'

interface TrafficContainerProps {
    traffic: Traffic;
}

interface ApiRequests { //Fix This Typing
    request: Number
}

const TrafficContainer = (props: TrafficContainerProps) => {
    const {traffic: Traffic = {
        id: 0,
        registerTime: 0,
        requests: {},
      }} = props;
    const apiReqs = props.traffic.requests;

    const renderNetworkTrafficData = (requests: any) => {
        if (requests) {
            console.log(requests, "INSIDE COMPONENT SHOULD RENDER")
            return Object.keys(requests).map((key) => {
                const { url, requestDuration, status } = requests[key];
                return (<li>{`url ${url} took ${requestDuration}ms with status ${status}`}</li>);
            });
        }
        return '';
    }


    return (
        <ul>
            {renderNetworkTrafficData(apiReqs)}
        </ul>
    );
}

export default TrafficContainer