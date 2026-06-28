import React, { useState } from "react";

function SupplierForm() {

    const [supplierName, setSupplierName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");
    const [isEmail, setIsEmail] = useState(false);
    const [isSMS, setIsSMS] = useState(false);
    const [isWhatsApp, setIsWhatsApp] = useState(false);
    const [address, setAddress] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [salary, setSalary] = useState("");
    const [photo, setPhoto] = useState(null);

    return (
        <div>

            <h2>Supplier Form</h2>

            <div>
                <input
                    type="text"
                    placeholder="Enter Supplier Name"
                    value={supplierName}
                    onChange={(e) => setSupplierName(e.target.value)}
                />
            </div>

            <br />

            <div>
                <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <br />

            <div>
                <input
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <br />

            <div>
                <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="">-- Select City --</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Nagpur">Nagpur</option>
                </select>
            </div>

            <br />

            <div>

                <input
                    type="radio"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Male

                <br />

                <input
                    type="radio"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Female

            </div>

            <br />

            <div>

                <input
                    type="checkbox"
                    checked={isEmail}
                    onChange={(e) => setIsEmail(e.target.checked)}
                />
                Email

                <input
                    type="checkbox"
                    checked={isSMS}
                    onChange={(e) => setIsSMS(e.target.checked)}
                />
                SMS

                <input
                    type="checkbox"
                    checked={isWhatsApp}
                    onChange={(e) => setIsWhatsApp(e.target.checked)}
                />
                WhatsApp

            </div>

            <br />

            <div>

                <textarea
                    rows="4"
                    cols="40"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

            </div>

            <br />

            <div>

                <input
                    type="date"
                    value={joiningDate}
                    onChange={(e) => setJoiningDate(e.target.value)}
                />

            </div>

            <br />

            <div>

                <input
                    type="number"
                    placeholder="Enter Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />

            </div>

            <br />

            <div>

                <input
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                />

            </div>

            <br />

            <button type="submit">
                Save Supplier
            </button>

            <hr />

            <h4>Supplier Name : {supplierName}</h4>
            <h4>Phone : {phone}</h4>
            <h4>Email : {email}</h4>
            <h4>City : {city}</h4>
            <h4>Gender : {gender}</h4>
            <h4>Email Notification : {isEmail.toString()}</h4>
            <h4>SMS Notification : {isSMS.toString()}</h4>
            <h4>WhatsApp Notification : {isWhatsApp.toString()}</h4>
            <h4>Address : {address}</h4>
            <h4>Joining Date : {joiningDate}</h4>
            <h4>Salary : {salary}</h4>
            <h4>Photo : {photo ? photo.name : "No File Selected"}</h4>

        </div>
    );
}

export default SupplierForm;