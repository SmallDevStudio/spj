import { useState } from "react";
import { Divider } from "@mui/material";
export default function AddLeave({ onClose }) {
    const [leave, setLeave] = useState(null);
    const [medicalCertificate, setMedicalCertificate] = useState(false);
    const [otherLeaveReason, setOtherLeaveReason] = useState('');
    const [startDate, setStartDate] = useState(Date.now());
    const [endDate, setEndDate] = useState(Date.now());
    const [reason, setReason] = useState(null);
    const [error, setError] = useState(null);

    
    const handleSubmit = () => {
        
        if (leave === null) {
            setError({
                type: "leave",
                message: "กรุณาเลือกประเภทการลา"
            });
        }

        if (leave === "otherLeave" && otherLeaveReason === '') {
            setError({
                type: "otherLeaveReason",
                message: "กรุณากรอกรายละเอียดการลา"
            });
        }

        if (reason === null) {
            setError({
                type: "reason",
                message: "กรุณากรอกรายละเอียดการลา"
            });
        }

        if (startDate === null) {
            setError({
                type: "startDate",
                message: "กรุณาเลือกวันที่เริ่มต้นการลา"
            });
        }

        if (endDate === null) {
            setError({
                type: "endDate",
                message: "กรุณาเลือกวันที่สิ้นสุดการลา"
            });
        }

        const data = {
            leave,
            medicalCertificate,
            otherLeaveReason,
            startDate,
            endDate,
            reason
        }

        console.log(data);
    }

    const handleCancel = () => {
        setLeave(null);
        setMedicalCertificate(false);
        setStartDate(null);
        setEndDate(null);
        setReason(null);
        onClose();
    }

    return (
        <div className="flex flex-col w-full">
            <h2 className="text-xl text-red-600 font-bold">เพิ่มการลา</h2>
            <Divider className="my-2 mb-4"/>
            <div className="flex flex-row items-center gap-2 w-full flex-wrap">
                <div className="flex flex-row items-center gap-2">
                    <input
                        type="checkbox"
                        checked={leave === "sickLeave"}
                        onChange={() => setLeave("sickLeave")}
                    />
                    <span className="text-md font-bold">ลาป่วย</span>
                </div>
        
                <div className="flex flex-row items-center gap-2">
                    <input
                        type="checkbox"
                        checked={leave === "maternityLeave"}
                        onChange={() => setLeave("maternityLeave")}
                    />
                    <span className="text-md font-bold">ลากิจ</span>
                </div>

                <div className="flex flex-row items-center gap-2">
                    <input
                        type="checkbox"
                        checked={leave === "annualLeave"}
                        onChange={() => setLeave("annualLeave")}
                    />
                    <span className="text-md font-bold">ลาพักร้อน</span>
                </div>

                <div className="flex flex-row items-center gap-2">
                    <input
                        type="checkbox"
                        checked={leave === "otherLeave"}
                        onChange={() => setLeave("otherLeave")}
                    />
                    <span className="text-md font-bold">ลาสวัสดิการ</span>
                </div>
                {error && error.type === "leave" && (
                    <span className="text-sm text-red-500">{error.message}</span>
                )}
            </div>
            <div className="flex flex-col w-full mt-2">
                {leave === "sickLeave" && (
                    <div className="flex flex-col">
                        <span className="text-md font-bold">
                            ใบรับรองแพทย์:
                        </span>
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="checkbox"
                                checked={medicalCertificate}
                                onChange={() => setMedicalCertificate(!medicalCertificate)}
                            />
                            <span className="text-md font-bold">มี</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <input
                                type="checkbox"
                                checked={!medicalCertificate}
                                onChange={() => setMedicalCertificate(!medicalCertificate)}
                            />
                            <span className="text-md font-bold">ไม่มี</span>
                        </div>
                    </div>
                    )}

                    {leave === "otherLeave" && (
                        <div className="flex flex-col gap-1">
                            {error && error.type === "otherLeaveReason" && (
                                <span className="text-sm text-red-500">{error.message}</span>
                            )}
                            <span className="text-md font-bold">ระบุ: </span>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                onChange={(e) => setOtherLeaveReason(e.target.value)}
                                placeholder="ระบุ"
                            />
                        </div>
                    )}
            </div>

            <div className="flex flex-row items-center justify-between w-full mt-2 gap-1">
                <div className="flex flex-col w-1/2">
                    <label htmlFor="start" className="font-bold">วันที่เริ่มต้น</label>
                    {error && error.type === "startDate" && (
                        <span className="text-sm text-red-500">{error.message}</span>
                    )}
                    <input
                        type="date"
                        id="start"
                        name="start"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="end" className="font-bold">ถึงวันที่</label>
                    {error && error.type === "endDate" && (
                        <span className="text-sm text-red-500">{error.message}</span>
                    )}
                    <input
                        type="date"
                        id="end"
                        name="end"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col w-full mt-2">
                <label htmlFor="reason" className="font-bold">เหตุผลการลา:</label>
                {error && error.type === "reason" && (
                    <span className="text-sm text-red-500">{error.message}</span>
                )}
                <textarea
                    id="reason"
                    name="reason"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={(e) => setReason(e.target.value)}
                    rows={3}
                    required
                />
            </div>

            <div className="flex flex-row items-center w-full mt-4 gap-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit}
                >
                    บันทึก
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleCancel}
                >
                    ยกเลิก
                </button>
            </div>
        </div>
    );
}