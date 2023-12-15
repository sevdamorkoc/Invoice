import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const InvoiceComponent = ({ invoiceData }) => {
  const handlePrint = () => {
    if (!invoiceData) {
      console.error('PDF oluşturulamadı, veri bulunamadı');
      return;
    }

    const pdf = new jsPDF();

    // PDF'e ekleme işlemini sadece bir defa yap
    pdf.autoTable({
      head: [['Ürün', 'Fiyat']],
      body: [[invoiceData.urun, invoiceData.fiyat]],
      theme: 'grid',
      styles: { halign: 'center' },
      margin: { top: 20 },
    });

    // Ardından iki defa daha ekle
    pdf.addPage();
    pdf.autoTable({
      head: [['Ürün', 'Fiyat']],
      body: [[invoiceData.urun, invoiceData.fiyat]],
      theme: 'grid',
      styles: { halign: 'center' },
      margin: { top: 20 },
    });

    pdf.addPage();
    pdf.autoTable({
      head: [['Ürün', 'Fiyat']],
      body: [[invoiceData.urun, invoiceData.fiyat]],
      theme: 'grid',
      styles: { halign: 'center' },
      margin: { top: 20 },
    });

    pdf.save('fatura.pdf');
  };

  return (
    <div className="container mt-5 bg-slate-200">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4 text-4xl text-gray-500">Fatura Detayları</h1>
        </div>
      </div>
      {[...Array(1)].map((_, index) => (
        <div className="row mb-4" key={index}>
          <div className="col-6">
            <p className="font-weight-bold text-xl  text-gray-700">Ürün: {invoiceData?.urun}</p>
            <p className="font-weight-bold text-xl  text-gray-700">Fiyat: {invoiceData?.fiyat}</p>
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary ml-2" onClick={handlePrint}>
            PDF Al
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
