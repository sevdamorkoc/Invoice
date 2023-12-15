import React, { useState } from "react";
import axios from "axios";
import InvoiceComponent from "./components/InvoiceComponent";

const App = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [showInvoice, setShowInvoice] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json");
      setInvoiceData(response.data);
      setShowInvoice(true);
    } catch (error) {
      console.error("Veri alınamadı", error);
    }
  };

  return (
    <div className=" bg-slate-200 ">
      <div className="flex justify-between items-center p-4 bg-gray-500">
        <div className="mr-auto">
          {" "}
          <span className="link-text logo-text flex ml-4 mt-2 ">
            <img
              style={{ width: "150px" }}
              src="https://www.ozgurguler.net/blog/wp-content/uploads/2017/06/nf-efatura.png"
              alt="arc-invoice"
            />
          </span>
        </div>
        <div className="ml-auto">
          {" "}
          <h1 className="font-bold text-4xl text-white ml-4 h-32 ">Fatura</h1>
          <h2 className="ml-12 h-auto text-white">No:37838</h2>
          
        </div>
      </div>
<div className="w-screen bg-gray-200 h-screen">
      <button className="btn btn-primary m-4 " onClick={fetchData}>
        FATURA BİLGİSİ
      </button>

      {showInvoice && invoiceData && (
        <div className="mt-4">
          <InvoiceComponent invoiceData={invoiceData} />
        </div>
      )}</div>
    </div>
  );
};

export default App;
