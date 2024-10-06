"use client";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function FormWhatsapp() {
  const [nama, setNama] = useState("");
  const [domisili, setDomisili] = useState("");
  const [kebutuhan, setKebutuhan] = useState("");
  const [info, setInfo] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      nama.trim() === "" ||
      domisili.trim() === "" ||
      kebutuhan === "" ||
      info === "" ||
      pesan.trim() === ""
    ) {
      toast.error("Harap lengkapi semua kolom!");
      return;
    }

    const confirmSubmission = window.confirm(
      "Klik OK untuk mengirim Dan Klik Cancel untuk membatalkan?"
    );
    if (!confirmSubmission) return;

    const message = `
Halo, saya ingin memesan:
- Nama: ${nama}
- Alamat Rumah: ${domisili}
- Kebutuhan Untuk: ${kebutuhan}
- Mengetahui Info: ${info}
- Pesan: ${pesan}
		`;

    const recipient = "6281398632939";
    const whatsappURL = `https://wa.me/${recipient}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    setNama("");
    setDomisili("");
    setKebutuhan("");
    setInfo("");
    setPesan("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <h1>Hubungi Kami</h1>

      <div className="content__form">
        <div className="box">
          <input
            type="text"
            value={nama}
            placeholder="Nama"
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div className="box">
          <input
            type="text"
            value={domisili}
            placeholder="Alamat"
            onChange={(e) => setDomisili(e.target.value)}
          />
        </div>

        <div className="box">
          <select
            onChange={(e) => setKebutuhan(e.target.value)}
            value={kebutuhan}>
            <option value="">Pilih Kebutuhan</option>
            <option value="Kaligrafi">Kaligrafi</option>
            <option value="Arsitek">Arsitek</option>
          </select>
        </div>

        <div className="box">
          <select onChange={(e) => setInfo(e.target.value)} value={info}>
            <option value="">Pilih Sumber Info</option>
            <option value="Instagram">Instagram</option>
            <option value="Tiktok">Tiktok</option>
            <option value="Website">Website</option>
          </select>
        </div>

        <div className="box">
          <textarea
            placeholder="Pesan"
            onChange={(e) => setPesan(e.target.value)}
            value={pesan}></textarea>
        </div>

        <button type="submit">
          Kirim
        </button>
      </div>
    </form >
  );
}
