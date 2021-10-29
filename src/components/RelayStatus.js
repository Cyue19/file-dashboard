import React, { useEffect, useState } from 'react';
import "./RelayStatus.css"

const RELAY_DATA_API = "https://remote.besic.org/status"
const REFRESH_INTERVAL = 1000
let interval = null

export default function RelayStatus(props){
    const [loaded, setloaded] = useState(false)
    const [data, setData] = useState(null)

    const updateData = async ()=>{
        let serverData = await fetchData()
        console.log(serverData.data)
        setData(serverData.data)
        if (!loaded){
            setloaded(true)
        }
    }

    useEffect(() => {
        interval = setInterval(updateData,REFRESH_INTERVAL)
        return () => {
            if(interval != null){
                clearInterval(interval)
            }
        }
    }, [])

    return(
        <div>
            {loaded ? <DeploymentInfo deployments={data?.deployments}></DeploymentInfo>:<Spinner/>}
        </div>
    )
}

function DeploymentInfo(props){
    return(
        <div>
            {Object.values(props.deployments ?? {}).map((deployment, _) =>{
                return (
                <div>    
                    <h3>{deployment.DeploymentID}</h3>
                    <p><b>BaseStation ID:</b> {deployment.DeviceID} | Last updated: {getAgoString(deployment.lastupdated)}</p>
                    {deployment.relays && <RelayTable relays={Object.values(deployment?.relays ?? {})}></RelayTable>}
                <br/>
                </div>
                )
            }) ?? {}}
        </div>
    )
}

function RelayTable(props){

    return(
        <div className="tableContainer">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>LUX</th>
                    <th>Humidity</th>
                    <th>Temp</th>
                    <th>Pressure</th>
                    <th>Last Updated</th>
                </tr>
            </thead>
            <tbody>
                {props.relays.map((element, index)=> {
                    console.log({...element})
                    return (<Relay {...element}></Relay>)
                })}
            </tbody>
        </table>
        </div>
    )
}

function Relay(props){
    return(
        <tr>{console.log(`Relay:${props}`)}
            <td>{`${props.DeviceID}`}</td>
            <td>{`${parseFloat(props.LUX).toFixed(2)}`}</td>
            <td>{`${parseFloat(props.HUM).toFixed(2)}%`}</td>
            <td>{`${parseFloat(props.TMP).toFixed(2)}°C`}</td>
            <td>{`${parseFloat(props.PRS).toFixed(2)}hPa`}</td>
            <td>{`${getAgoString(props.lastupdated)}`}</td>
        </tr>
    )
}

function Spinner(){
    return(
    <div className="LoaderContainer">    
        <div className="loader">Loading...</div>
    </div>

    )
}

const durations = [
    [1000,60,"seconds",],
    [60*1000,60,"minutes"],
    [60*60*1000,24,"hours"],
    [24*60*60*1000,7,"days"],
    [7*24*60*60*1000,4,"weeks"],
    [4*7*24*60*60*1000,12,"months"],
    [12*4*7*24*60*60*1000,1000,"years"]
]

function getAgoString(v){
    v = Date.now() - v
    let str = ''
    for(var i=0; i<7; i++){
        let val = durations[i]
        if(Math.ceil(v/val[0])<val[1]){
            str = `${Math.floor(v/val[0])} ${val[2]} ago`
            break
        }
    }
    return str
}

async function fetchData(){
    try {
        let ret = await fetch(RELAY_DATA_API)
        let r = await ret.json()
        return {data:r,error:null};
    } catch (error) {
        return {data:null,error};
    }
}