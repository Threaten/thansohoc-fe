"use client";

import { useState } from "react";
import {
  countNumberOfOccurenceInDateOfBirth,
  countNumberOfOccurenceInName,
  timSoLap,
  tinhChiSoBanTheTiemThuc,
  tinhChiSoCanBang,
  tinhChiSoDamMeTiemAn,
  tinhChiSoDuongDoi,
  tinhChiSoNguyenAmDauTrongTen,
  tinhChiSoNoiTam,
  tinhChiSoPhuongTienNhanThucCamXuc,
  tinhChiSoPhuongTienNhanThucTheChat,
  tinhChiSoPhuongTienNhanThucTinhThan,
  tinhChiSoPhuongTienNhanThucTrucGiac,
  tinhChiSoSuMenh,
  tinhChiSoThaiDo,
  tinhChiSoThieu,
  tinhChiSoTinhCach,
  tinhChiSoYeu,
  tinhChuCuoiTrongTen,
  tinhChuDauTrongTen,
  tinhNgaySinh1So,
} from "./calc";

export default function Home() {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState(0);
  const [monthOfBirth, setMonthOfBirth] = useState(0);
  const [dateOfBirth, setDateOfBirth] = useState(0);
  const [chiSoDuongDoi, setChiSoDuongDoi] = useState(0);
  const [chiSoTinhCach, setChiSoTinhCach] = useState(0);
  const [chiSoNoiTam, setChiSoNoiTam] = useState(0);
  const [chiSoDamMeTiemAn, setChiSoDamMeTiemAn] = useState<number[]>([]);
  const [chiSoNguyenAmDauTrongTen, setChiSoNguyenAmDauTrongTen] = useState(0);
  const [chiSoChuDauTrongTen, setChiSoChuDauTrongTen] = useState(0);
  const [chiSoChuCuoiTrongTen, setChiSoChuCuoiTrongTen] = useState(0);
  const [chiSoThaiDo, setChiSoThaiDo] = useState(0);
  const [chiSoBanTheTiemThuc, setChiSoBanTheTiemThuc] = useState(0);
  const [chiSoNhanThucTinhThan, setChiSoNhanThucTinhThan] = useState(0);
  const [chiSoNhanThucTrucGiac, setChiSoNhanThucTrucGiac] = useState(0);
  const [chiSoNhanThucCamXuc, setChiSoNhanThucCamXuc] = useState(0);
  const [chiSoNhanThucTheChat, setChiSoNhanThucTheChat] = useState(0);
  const [chiSoCanBang, setChiSoCanBang] = useState(0);
  const [chiSoThieu, setChiSoThieu] = useState<number[]>([]);
  const [chiSoYeu, setChiSoYeu] = useState<number[]>([]);
  const [chiSoSuMenh, setChiSoSuMenh] = useState(0);
  const [ngaySinh1So, setNgaySinh1So] = useState(0);
  const [thangSinh1So, setThangSinh1So] = useState(0);
  const [namSinh1So, setNamSinh1So] = useState(0);
  const [soLap, setSoLap] = useState<number[]>([]);

  const convertInto1Digit = (number: number) => {
    let result = number;
    while (result > 9) {
      result = String(result)
        .split("")
        .reduce((a, b) => a + parseInt(b), 0);
    }
    return result;
  };

  const convertInto1DigitForPeak34 = (number: number) => {
    let result = number;
    while (result > 10) {
      if (
        result === 13 ||
        result === 14 ||
        result === 16 ||
        result === 19 ||
        result === 11 ||
        result === 22 ||
        result === 33 ||
        result === 10
      ) {
        console.log(result);

        return result;
      } else {
        result = String(result)
          .split("")
          .reduce((a, b) => a + parseInt(b), 0);
      }
    }

    return result;
  };

  const detectSpecialNumber = (number: number) => {
    if (
      number === 13 ||
      number === 14 ||
      number === 16 ||
      number === 19 ||
      number === 11 ||
      number === 22 ||
      number === 33
    ) {
      return true;
    }
  };

  const detectSpecialNumberForPeak34 = (number: number) => {
    if (
      number === 10 ||
      number === 13 ||
      number === 14 ||
      number === 16 ||
      number === 19 ||
      number === 11 ||
      number === 22 ||
      number === 33
    ) {
      return true;
    }
  };

  let year = "";
  let month = "";
  let date = "";

  const onSubmit = () => {
    setChiSoDuongDoi(0);
    setChiSoTinhCach(0);
    setChiSoNoiTam(0);
    setChiSoDamMeTiemAn([]);
    setChiSoNguyenAmDauTrongTen(0);
    setChiSoBanTheTiemThuc(0);

    // const fullName = document.getElementById("txtFullName") as HTMLInputElement;
    // const dob = document.getElementById("txtDoB") as HTMLInputElement;

    if (!fullName || !dob) {
    } else {
      year = dob.split("-")[0];
      month = dob.split("-")[1];
      date = dob.split("-")[2];
      setYearOfBirth(Number(year));
      setMonthOfBirth(Number(month));
      setDateOfBirth(Number(date));
      setChiSoDuongDoi(
        tinhChiSoDuongDoi({
          fullName: fullName,
          dateOfBirth: date,
          monthOfBirth: month,
          yearOfBirth: year,
        })
      );

      setChiSoTinhCach(
        tinhChiSoTinhCach({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoNoiTam(
        tinhChiSoNoiTam({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoDamMeTiemAn(
        tinhChiSoDamMeTiemAn({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoNguyenAmDauTrongTen(
        tinhChiSoNguyenAmDauTrongTen({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoChuDauTrongTen(
        tinhChuDauTrongTen({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoChuCuoiTrongTen(
        tinhChuCuoiTrongTen({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoThaiDo(
        tinhChiSoThaiDo({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoBanTheTiemThuc(
        tinhChiSoBanTheTiemThuc({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoNhanThucTinhThan(
        tinhChiSoPhuongTienNhanThucTinhThan({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoNhanThucCamXuc(
        tinhChiSoPhuongTienNhanThucCamXuc({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoNhanThucTrucGiac(
        tinhChiSoPhuongTienNhanThucTrucGiac({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoNhanThucTheChat(
        tinhChiSoPhuongTienNhanThucTheChat({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoCanBang(
        tinhChiSoCanBang({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoThieu(
        tinhChiSoThieu({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoYeu(
        tinhChiSoYeu({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setChiSoSuMenh(
        tinhChiSoSuMenh({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );

      setNgaySinh1So(
        tinhNgaySinh1So({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        }).date
      );
      setThangSinh1So(
        tinhNgaySinh1So({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        }).month
      );
      setNamSinh1So(
        tinhNgaySinh1So({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        }).year
      );
      setSoLap(
        timSoLap({
          fullName: fullName,
          dateOfBirth: dob.split("-")[2],
          monthOfBirth: dob.split("-")[1],
          yearOfBirth: dob.split("-")[0],
        })
      );
    }
  };

  return (
    <div className="">
      <div>
        <div className="grid grid-cols-2 w-[30%]">
          <label>Họ và Tên</label>
          <input
            type="text"
            id="txtFullName"
            className="text-black"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 w-[30%]">
          <label>Ngày tháng năm sinh:</label>
          <input
            className="text-black"
            type="date"
            id="txtDoB"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="ml-20">
          <button className="mt-4 bg-white text-black p-2" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="mt-10">
        <table className="border border-white">
          <tbody>
            <tr>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-2xl">
                Nội tâm
              </td>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-2xl">
                Tính cách
              </td>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-2xl">
                Sứ mệnh
              </td>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-2xl">
                Ngày sinh
              </td>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-2xl">
                Đường đời
              </td>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-2xl">
                Thái độ
              </td>
            </tr>
            <tr>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-yellow-500 text-3xl">
                {chiSoNoiTam <= 9
                  ? chiSoNoiTam
                  : chiSoNoiTam > 9 && detectSpecialNumber(chiSoNoiTam)
                  ? chiSoNoiTam + "/" + convertInto1Digit(chiSoNoiTam)
                  : convertInto1Digit(chiSoNoiTam)}
              </td>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-yellow-500 text-3xl">
                {chiSoTinhCach <= 9
                  ? chiSoTinhCach
                  : chiSoTinhCach > 9 && detectSpecialNumber(chiSoTinhCach)
                  ? chiSoTinhCach + "/" + convertInto1Digit(chiSoTinhCach)
                  : convertInto1Digit(chiSoTinhCach)}
              </td>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-yellow-500 text-3xl">
                {chiSoSuMenh <= 9
                  ? chiSoSuMenh
                  : chiSoSuMenh > 9 && detectSpecialNumber(chiSoSuMenh)
                  ? chiSoSuMenh + "/" + convertInto1Digit(chiSoSuMenh)
                  : convertInto1Digit(chiSoSuMenh)}
              </td>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-yellow-500 text-3xl">
                {ngaySinh1So <= 9
                  ? ngaySinh1So
                  : ngaySinh1So > 9 && detectSpecialNumber(ngaySinh1So)
                  ? ngaySinh1So + "/" + convertInto1Digit(ngaySinh1So)
                  : convertInto1Digit(ngaySinh1So)}
              </td>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-yellow-500 text-3xl">
                {chiSoDuongDoi <= 9
                  ? chiSoDuongDoi
                  : chiSoDuongDoi > 9 && detectSpecialNumber(chiSoDuongDoi)
                  ? chiSoDuongDoi + "/" + convertInto1Digit(chiSoDuongDoi)
                  : convertInto1Digit(chiSoDuongDoi)}
              </td>
              <td className="border-collapse w-20 h-10  justify-center items-center text-center border-solid border border-white text-yellow-500 text-3xl">
                {chiSoThaiDo <= 9
                  ? chiSoThaiDo
                  : chiSoThaiDo > 9 && detectSpecialNumber(chiSoThaiDo)
                  ? chiSoThaiDo + "/" + convertInto1Digit(chiSoThaiDo)
                  : convertInto1Digit(chiSoThaiDo)}
              </td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-3xl text-bold mt-10">I. Thấu hiểu bản thân:</h1>

        <div className="grid grid-cols-3 mt-3 h-auto">
          <div className="flex items-center">
            <div className="grid grid-cols-2 ">
              <div>
                <label className="text-2xl">1. Số lặp: </label>
              </div>
              <div className="text-center text-yellow-500 text-3xl">
                {soLap.toString().split("").join("")}
              </div>
              <div>
                <label className="text-2xl">2. Ngày sinh: </label>
              </div>
              <div className="text-center text-yellow-500 text-3xl">
                {ngaySinh1So <= 9
                  ? ngaySinh1So
                  : ngaySinh1So > 9 && detectSpecialNumber(ngaySinh1So)
                  ? ngaySinh1So + "/" + convertInto1Digit(ngaySinh1So)
                  : convertInto1Digit(ngaySinh1So)}
              </div>
              <div>
                <label className="text-2xl">3. Tính cách:</label>
              </div>
              <div className="text-center text-yellow-500 text-3xl">
                {chiSoTinhCach <= 9
                  ? chiSoTinhCach
                  : chiSoTinhCach > 9 && detectSpecialNumber(chiSoTinhCach)
                  ? chiSoTinhCach + "/" + convertInto1Digit(chiSoTinhCach)
                  : convertInto1Digit(chiSoTinhCach)}
              </div>
              <div>
                <label className="text-2xl">4. Nội tâm:</label>
              </div>
              <div className="text-center text-yellow-500 text-3xl">
                {chiSoNoiTam <= 9
                  ? chiSoNoiTam
                  : chiSoNoiTam > 9 && detectSpecialNumber(chiSoNoiTam)
                  ? chiSoNoiTam + "/" + convertInto1Digit(chiSoNoiTam)
                  : convertInto1Digit(chiSoNoiTam)}
              </div>{" "}
            </div>
          </div>
          <div>
            <label className="text-2xl">Danh đồ</label>
            {fullName.length > 0 ? (
              <table className="border border-white">
                <tbody>
                  <tr className=" ">
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      <span
                        className={`${
                          chiSoDamMeTiemAn.includes(3) ? "text-yellow-600" : ""
                        }`}
                      >
                        {Array(
                          Number(countNumberOfOccurenceInName(fullName)[3])
                        )
                          .fill("3")
                          .join("")}
                      </span>
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      <span
                        className={`${
                          chiSoDamMeTiemAn.includes(6) ? "text-yellow-600" : ""
                        }`}
                      >
                        {Array(
                          Number(countNumberOfOccurenceInName(fullName)[6])
                        )
                          .fill("6")
                          .join("")}
                      </span>
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      <span
                        className={`${
                          chiSoDamMeTiemAn.includes(9) ? "text-yellow-600" : ""
                        }`}
                      >
                        {Array(
                          Number(countNumberOfOccurenceInName(fullName)[9])
                        )
                          .fill("9")
                          .join("")}
                      </span>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      <span
                        className={`${
                          chiSoDamMeTiemAn.includes(2) ? "text-yellow-600" : ""
                        }`}
                      >
                        {Array(
                          Number(countNumberOfOccurenceInName(fullName)[2])
                        )
                          .fill("2")
                          .join("")}
                      </span>
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      <span
                        className={`${
                          chiSoDamMeTiemAn.includes(5) ? "text-yellow-600" : ""
                        }`}
                      >
                        {Array(
                          Number(countNumberOfOccurenceInName(fullName)[5])
                        )
                          .fill("5")
                          .join("")}
                      </span>
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      <span
                        className={`${
                          chiSoDamMeTiemAn.includes(8) ? "text-yellow-600" : ""
                        }`}
                      >
                        {Array(
                          Number(countNumberOfOccurenceInName(fullName)[8])
                        )
                          .fill("8")
                          .join("")}
                      </span>
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      <span
                        className={`${
                          chiSoDamMeTiemAn.includes(1) ? "text-yellow-600" : ""
                        }`}
                      >
                        {Array(
                          Number(countNumberOfOccurenceInName(fullName)[1])
                        )
                          .fill("1")
                          .join("")}
                      </span>
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      <span
                        className={`${
                          chiSoDamMeTiemAn.includes(4) ? "text-yellow-600" : ""
                        }`}
                      >
                        {Array(
                          Number(countNumberOfOccurenceInName(fullName)[4])
                        )
                          .fill("4")
                          .join("")}
                      </span>
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      <span
                        className={`${
                          chiSoDamMeTiemAn.includes(7) ? "text-yellow-600" : ""
                        }`}
                      >
                        {Array(
                          Number(countNumberOfOccurenceInName(fullName)[7])
                        )
                          .fill("7")
                          .join("")}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : null}
          </div>
          <div>
            <label className="text-2xl">Sinh đồ</label>
            {dob.length > 0 ? (
              <table className="border border-white">
                <tbody>
                  <tr className=" ">
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      {Array(
                        Number(countNumberOfOccurenceInDateOfBirth(dob)[3])
                      )
                        .fill("3")
                        .join("")}
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      {Array(
                        Number(countNumberOfOccurenceInDateOfBirth(dob)[6])
                      )
                        .fill("6")
                        .join("")}
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      {Array(
                        Number(countNumberOfOccurenceInDateOfBirth(dob)[9])
                      )
                        .fill("9")
                        .join("")}
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      {Array(
                        Number(countNumberOfOccurenceInDateOfBirth(dob)[2])
                      )
                        .fill("2")
                        .join("")}
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      {Array(
                        Number(countNumberOfOccurenceInDateOfBirth(dob)[5])
                      )
                        .fill("5")
                        .join("")}
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      {Array(
                        Number(countNumberOfOccurenceInDateOfBirth(dob)[8])
                      )
                        .fill("8")
                        .join("")}
                    </td>
                  </tr>
                  <tr className=" ">
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      {Array(
                        Number(countNumberOfOccurenceInDateOfBirth(dob)[1])
                      )
                        .fill("1")
                        .join("")}
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      {Array(
                        Number(countNumberOfOccurenceInDateOfBirth(dob)[4])
                      )
                        .fill("4")
                        .join("")}
                    </td>
                    <td className="border-collapse w-24 h-24  justify-center items-center text-center border-solid border border-white text-3xl">
                      {Array(
                        Number(countNumberOfOccurenceInDateOfBirth(dob)[7])
                      )
                        .fill("7")
                        .join("")}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
        <h1 className="text-3xl text-bold mt-10">II. Nguồn lực:</h1>
        <div className="mt-3 grid grid-cols-2">
          <div className="grid grid-cols-2">
            <div>
              <label className="text-2xl">1. Thái độ:</label>
            </div>
            <div className=" text-yellow-500 text-3xl">
              {chiSoThaiDo <= 9
                ? chiSoThaiDo
                : chiSoThaiDo > 9 && detectSpecialNumber(chiSoThaiDo)
                ? chiSoThaiDo + "/" + convertInto1Digit(chiSoThaiDo)
                : convertInto1Digit(chiSoThaiDo)}
            </div>
            <div>
              <label className="text-2xl">2. Bản thể tiềm thức:</label>
            </div>
            <div className=" text-yellow-500 text-3xl">
              {chiSoBanTheTiemThuc <= 9
                ? chiSoBanTheTiemThuc
                : chiSoBanTheTiemThuc > 9 &&
                  detectSpecialNumber(chiSoBanTheTiemThuc)
                ? chiSoBanTheTiemThuc +
                  "/" +
                  convertInto1Digit(chiSoBanTheTiemThuc)
                : convertInto1Digit(chiSoBanTheTiemThuc)}
            </div>
            <div>
              <label className="text-2xl">3. Cân bằng:</label>
            </div>
            <div className=" text-yellow-500 text-3xl">
              {chiSoCanBang <= 9
                ? chiSoCanBang
                : chiSoCanBang > 9 && detectSpecialNumber(chiSoCanBang)
                ? chiSoCanBang + "/" + convertInto1Digit(chiSoCanBang)
                : convertInto1Digit(chiSoCanBang)}
            </div>
            <br />
          </div>
          <div>
            <div>
              <label className="text-2xl">4. Cầu nối:</label>
            </div>
            <div>
              <ul className="list-disc list-inside space-y-2">
                <li className="list-disc grid grid-cols-2">
                  <div className="text-2xl">• Đường đời - Sứ mệnh:</div>
                  <div className=" text-yellow-500 text-3xl">
                    {Math.abs(
                      convertInto1Digit(chiSoDuongDoi) -
                        convertInto1Digit(chiSoSuMenh)
                    )}
                  </div>
                </li>
                <li className="grid grid-cols-2">
                  <div className="text-2xl">• Nội tâm - Tính cách:</div>
                  <div className=" text-yellow-500 text-3xl">
                    {Math.abs(
                      convertInto1Digit(chiSoNoiTam) -
                        convertInto1Digit(chiSoTinhCach)
                    )}
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 mt-1">
              <div>
                <label className="text-2xl">5. Số trưởng thành:</label>
              </div>
              <div className=" text-yellow-500 text-3xl">
                {convertInto1Digit(
                  convertInto1Digit(chiSoSuMenh) +
                    convertInto1Digit(chiSoDuongDoi)
                )}
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-bold mt-10">III. Dự báo tương lai:</h1>
        <div className="grid grid-cols-2 ">
          <div className="grid grid-cols-2 h-20 mt-2">
            <div>
              <label className="text-2xl">
                1. Năm cá nhân ({new Date().getFullYear()}):
              </label>
            </div>
            <div className=" text-yellow-500 text-3xl">
              {convertInto1Digit(
                convertInto1Digit(ngaySinh1So) +
                  convertInto1Digit(monthOfBirth) +
                  convertInto1Digit(new Date().getFullYear())
              )}
            </div>
            <div>
              <label className="text-2xl">2. Sứ mệnh:</label>
            </div>
            <div className=" text-yellow-500 text-3xl">
              {chiSoSuMenh}
              {chiSoSuMenh > 9 ? "/" + convertInto1Digit(chiSoSuMenh) : null}
            </div>
            <div>
              <label className="text-2xl">3. Đường đời:</label>
            </div>
            <div className=" text-yellow-500 text-3xl">
              {chiSoDuongDoi}
              {chiSoDuongDoi > 9
                ? "/" + convertInto1Digit(chiSoDuongDoi)
                : null}
            </div>
          </div>
          <div>
            {dob ? (
              <div className="w-[80%] grid grid-cols-6 mt-2 flex-1 justify-center items-center">
                <div className="col-span-6 w-full  h-8 text-center"></div>
                <div className="col-span-6 w-full h-auto text-center mb-8">
                  <label className="text-yellow-500 text-3xl">
                    {thangSinh1So + namSinh1So <= 9
                      ? thangSinh1So + namSinh1So
                      : thangSinh1So + namSinh1So > 9 &&
                        detectSpecialNumberForPeak34(
                          convertInto1DigitForPeak34(thangSinh1So + namSinh1So)
                        )
                      ? convertInto1DigitForPeak34(thangSinh1So + namSinh1So) +
                        "/" +
                        convertInto1Digit(thangSinh1So + namSinh1So)
                      : convertInto1Digit(thangSinh1So + namSinh1So)}
                  </label>
                  <div className="w-full text-2xl">Đỉnh 4</div>

                  <div className="w-full text-2xl">
                    {36 - convertInto1Digit(chiSoDuongDoi) + 27} tuổi (
                    {yearOfBirth + 36 - convertInto1Digit(chiSoDuongDoi) + 27})
                  </div>
                </div>
                <div className="col-span-6 w-full h-20 justify-center flex-1 items-center text-center mb-12">
                  <div className="w-full text-yellow-500 text-3xl">
                    {convertInto1Digit(
                      convertInto1Digit(thangSinh1So + ngaySinh1So) +
                        convertInto1Digit(namSinh1So + ngaySinh1So)
                    ) <= 9
                      ? convertInto1Digit(
                          convertInto1Digit(thangSinh1So + ngaySinh1So) +
                            convertInto1Digit(namSinh1So + ngaySinh1So)
                        )
                      : convertInto1Digit(thangSinh1So + ngaySinh1So) +
                          convertInto1Digit(namSinh1So + ngaySinh1So) >
                          9 &&
                        detectSpecialNumberForPeak34(
                          convertInto1Digit(thangSinh1So + ngaySinh1So) +
                            convertInto1Digit(namSinh1So + ngaySinh1So)
                        )
                      ? convertInto1Digit(thangSinh1So + ngaySinh1So) +
                        convertInto1Digit(namSinh1So + ngaySinh1So) +
                        "/" +
                        convertInto1Digit(thangSinh1So + ngaySinh1So) +
                        convertInto1Digit(namSinh1So + ngaySinh1So)
                      : convertInto1Digit(thangSinh1So + ngaySinh1So) +
                        convertInto1Digit(namSinh1So + ngaySinh1So)}
                  </div>
                  <div className="w-full text-2xl">Đỉnh 3</div>
                  <div className="w-full text-2xl">
                    {36 - convertInto1Digit(chiSoDuongDoi) + 18} tuổi (
                    {yearOfBirth + 36 - convertInto1Digit(chiSoDuongDoi) + 18})
                  </div>
                </div>
                <div className="col-span-3 w-full h-20 justify-center flex-1 items-center text-center">
                  <div className="w-full text-yellow-500 text-3xl">
                    {convertInto1Digit(thangSinh1So + ngaySinh1So)}
                  </div>
                  <div className="w-full text-2xl">Đỉnh 1</div>
                  <div className="w-full text-2xl">
                    {36 - convertInto1Digit(chiSoDuongDoi)} tuổi (
                    {yearOfBirth + 36 - convertInto1Digit(chiSoDuongDoi)})
                  </div>
                </div>
                <div className="col-span-3 w-full h-20 mt-4 justify-center flex-1 items-center text-center">
                  <div className="w-full text-yellow-500 text-3xl">
                    {convertInto1Digit(namSinh1So + ngaySinh1So)}
                  </div>
                  <div className="w-full text-2xl">Đỉnh 2 </div>
                  <div className="w-full text-2xl">
                    {36 - convertInto1Digit(chiSoDuongDoi) + 9} tuổi (
                    {yearOfBirth + 36 - convertInto1Digit(chiSoDuongDoi) + 9})
                  </div>
                </div>
                <div className="col-span-2 w-full h-28  flex items-center justify-start font-bold text-3xl">
                  {convertInto1Digit(thangSinh1So)}
                </div>
                <div className="col-span-2 w-full h-28 justify-center flex items-center text-center font-bold text-3xl">
                  {convertInto1Digit(ngaySinh1So)}
                </div>
                <div className="col-span-2 w-full h-28  flex items-center justify-end   font-bold text-3xl">
                  {convertInto1Digit(namSinh1So)}
                </div>
                <div className="col-span-3 w-full h-20 justify-center flex-1 items-center text-center">
                  <div className="w-full text-red-500 text-3xl">
                    {convertInto1Digit(Math.abs(ngaySinh1So - thangSinh1So))}
                  </div>
                  <div className="w-full text-2xl">Thử thách 1 </div>
                </div>
                <div className="col-span-3 w-full h-20 justify-center flex-1 items-center text-center">
                  <div className="w-full text-red-500 text-3xl">
                    {convertInto1Digit(Math.abs(ngaySinh1So - namSinh1So))}
                  </div>
                  <div className="w-full text-2xl">Thử thách 2 </div>
                </div>
                <div className="col-span-6 w-full h-auto text-center mb-12">
                  <div className="w-full text-red-500 text-3xl">
                    {convertInto1Digit(
                      Math.abs(
                        Math.abs(ngaySinh1So - namSinh1So) -
                          Math.abs(ngaySinh1So - thangSinh1So)
                      )
                    )}
                  </div>
                  <div className="w-full text-2xl">Thử thách 3 </div>
                </div>
                <div className="col-span-6 w-full h-auto text-center mb-12">
                  <div className="w-full text-red-500 text-3xl">
                    {convertInto1Digit(Math.abs(thangSinh1So - namSinh1So))}
                  </div>
                  <div className="w-full text-2xl">Thử thách 4 </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
