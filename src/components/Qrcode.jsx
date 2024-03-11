import { useState } from "react"

export const Qrcode = () => {
    const [img,setImg] = useState("")
    const [loading,setLoading] = useState(false)
    const [qrdata,setQrdata] = useState("");
    const [qrsize,setQrsize] = useState("");

    async function GenerateQr(){
        setLoading(true)
        try{
            const url =`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
            setImg(url);
        }
        catch(error){
            console.log("Error While Generating The Qr code ",error);
        }
        finally{
            setLoading(false);
        }
    }
    function downloadQr(name){
        fetch(img).then((Response)=>Response.blob()).then((blob)=>
        {
            const link = document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="QrCode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>
        console.log("Error while downloading Image "+error));
    }
  return (
    <div className="app-container">
        <h2>Qr Code Generator </h2>
        {loading && <p>Please wait...</p>}
        {img && <img src={img} className="qr-img"/>}
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data for Qr :
            </label>
            <input type="text" value={qrdata} id="dataInput" placeholder="Enter the Data" onChange={(e)=>setQrdata(e.target.value)} />
            <label htmlFor="dataInput" className="input-label">
                Image size (eg:200):
            </label>
            <input type="text" value={qrsize} id="sizeInput" placeholder="Enter the Size" onChange={(e)=>setQrsize(e.target.value)}/>
            <button className="gbtn" onClick={GenerateQr} disabled = {loading} >Generate Qr Code</button>
            <button className="dbtn" onClick={downloadQr}>Download Qr Code</button>
        </div>
    </div>
  )
}
