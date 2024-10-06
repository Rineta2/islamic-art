"use client";

import React, { Fragment, useRef, useState, useEffect } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const scriptUrl = process.env.NEXT_PUBLIC_API_APP_SCRIPT;

export default function FormContent() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        nama: '',
        nomor: '',
        jadwal: '',
        alamat: ''
    });

    useEffect(() => {
        if (error) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const form = formRef.current;
        const formDataObject = new FormData(form as HTMLFormElement);

        if (!formDataObject.get('nama') || !formDataObject.get('nomor') || !formDataObject.get('jadwal') || !formDataObject.get('alamat')) {
            setError("Semua kolom harus diisi.");
            return;
        }

        if (!/^\d+$/.test(formDataObject.get('nomor')!.toString())) {
            setError("Nomor WhatsApp harus berupa angka.");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(scriptUrl!, {
                method: "POST",
                body: formDataObject,
            });

            const result = await response.json();

            if (result.result === 'success') {
                toast.success("Formulir Berhasil Terkirim 🥳");
                form?.reset();
                setFormData({ nama: '', nomor: '', jadwal: '', alamat: '' }); // Reset state after success
            } else if (result.result === 'error') {
                setError(result.error);
            } else {
                setError("Gagal mengirim pesan 😔");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Gagal mengirim pesan 😔");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <form ref={formRef} onSubmit={handleSubmit}>
                <h1>Jadwalkan Agenda Anda Sekarang</h1>

                <div className="center__form">
                    <div className="box__num">
                        <div className="num">1</div>
                        <span>Isi formulirnya</span>
                    </div>

                    <div className="box__num">
                        <div className="num">2</div>
                        <span>Pesan Agenda Waktu</span>
                    </div>

                    <div className="box__num">
                        <div className="num">3</div>
                        <span>Hadiri Agenda</span>
                    </div>
                </div>

                <div className="double">
                    <div className="box">
                        <input
                            type="text"
                            name='nama'
                            value={formData.nama}
                            onChange={handleChange}
                            placeholder='Nama Lengkap'
                        />
                    </div>

                    <div className="box">
                        <input
                            type="text"
                            name='nomor'
                            value={formData.nomor}
                            onChange={handleChange}
                            placeholder='Nomor WhatsApp'
                        />
                    </div>
                </div>

                <div className="singgle">
                    <div className="box">
                        <input
                            type="datetime-local"
                            name="jadwal"
                            value={formData.jadwal}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="singgle">
                    <div className="box">
                        <textarea
                            placeholder='Alamat'
                            name='alamat'
                            value={formData.alamat}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>

                <div className="btn">
                    <button type="submit" disabled={loading}>
                        {loading ? "Sedang Mengirim..." : "Kirim Pesan"}
                    </button>
                </div>
            </form>
        </Fragment>
    );
}
