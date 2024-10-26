// components/ProfileEditor.js - Client Component
'use client';

import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//const PASS_SEC = process.env.PASSWORD_SECRET;

export default function ProfileEdit({user}) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [institution, setInstitution] = useState("");
    const [profession, setProfession] = useState("");
    const [location, setLocation] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState();
    const [bloodGroup, setBloodGroup] = useState("");
    const [profilePic, setProfilePic] = useState(null);
    const [bio, setBio] = useState("");
    const [facebook, setFacebook] = useState("");
    const [new_password, setNew_password] = useState("");
    const [hash_password, setHash_password] = useState("");
    
    
    useEffect(() => {
      if (user) {
        setId(user._id);//
        setName(user.name);//
        setEmail(user.email);//
        //setPassword(user.password);//
        setHash_password(user.password);//
        setPhone(user.phone);//
        setInstitution(user.institution);//
        setProfession(user.profession);//
        setLocation(user.location);//
        setDateOfBirth(user.dateOfBirth);
        setBloodGroup(user.bloodGroup);//
        setBio(user.bio);//
        setFacebook(user.facebook);//
      }
      }, [user]);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const PASS_SEC = process.env.PASSWORD_SECRET || 'greatrifatHash';
      //decrypted password
      const decryptedPassword = CryptoJS.AES.decrypt(hash_password,PASS_SEC).toString(CryptoJS.enc.Utf8);
      //cheching password is right
      if(decryptedPassword !== password) return alert("Wrong Password");
      //updating pass from new pass
      if(new_password !== ""){
        const hashedPassword = CryptoJS.AES.encrypt(new_password, PASS_SEC).toString();
        setHash_password(hashedPassword);
      } 


        //uploadind the image on cloudinary and responsed Url adding
        const data_img = new FormData();
        data_img.append("file", profilePic);
        data_img.append("upload_preset", "my-folder");
        data_img.append("cloud_name", "dxtmwgpcl");
        const res_img = await fetch(
          "https://api.cloudinary.com/v1_1/dxtmwgpcl/image/upload",
          {
            method: "POST",
            body: data_img,
          }
        );
        const file = await res_img.json();
        console.log(file.secure_url);
        const imageUrl = file.secure_url || user.imageUrl;
        console.log(imageUrl);

        // Make a client-side API call to update the profile
        const res = await fetch(`${baseUrl}/api/member/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              name: name,
              email: email,
              password: hash_password,
              phone: phone,
              institution: institution,
              profession: profession,
              location: location,
              bloodGroup: bloodGroup,
              bio: bio,
              facebook: facebook,
              imageUrl: imageUrl,

            }),
        });
        if (res.ok){
          alert('Profile updated successfully');
          window.location.replace(`${baseUrl}/profile/${id}`);
        }
        else {
          alert('Something Went Wrong');
        } 
    };

    return (
      <div className="container mx-auto px-4 m-6">
      <h2 className="text-xl font-bold mb-4">Edit Your Profile</h2>
      <form onSubmit={handleSubmit} method='PUT'> 
        <div className="mb-6">
          <label
            htmlFor="displayName"
            className="block text-gray-700 font-bold mb-2"
          >
            Full Name
          </label>
          <input
            required
            type="text"
            id="displayName"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="location"
            className="block text-gray-700 font-bold mb-2"
          >
            Location
          </label>
          <input
            required
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="profession" className="block text-gray-700 font-bold mb-2">
          Profession
          </label>
          <input
            required
            type="text"
            id="profession"
            value={profession}
            onChange={(event) => setProfession(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
            Bio
          </label>
          <textarea
            required
            id="bio"
            rows={3}
            value={bio}
            onChange={(event) => setBio(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex place-content-between">
          <div className="mb-6">
            <label htmlFor="phone" className=" text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="institution" className=" text-gray-700 font-bold mb-2">
              Institution
            </label>
            <input
              type="text"
              id="institution"
              value={institution}
              onChange={(event) => setInstitution(event.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="bloodGroup" className="text-gray-700 font-bold mb-2">
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroup"
              value={bloodGroup}
              onChange={(event) => setBloodGroup(event.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="profilePic"
            className="block text-gray-700 font-bold mb-2"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePic"
            onChange={(event) => setProfilePic(event.target.files[0])}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
            Date Of Birth
          </label>
          <input
            type="text"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="facebook" className="block text-gray-700 font-bold mb-2">
            Facebook
          </label>
          <input
            type="text"
            id="facebook"
            value={facebook}
            onChange={(event) => setFacebook(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Current Password
          </label>
          <input
            required
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="new_password"
            className="block text-gray-700 font-bold mb-2"
          >
            NEW PASSWORD, leave blank if you do not want to change it
          </label>
          <input
            
            type="password"
            id="new_password"
            value={new_password}
            onChange={(event) => setNew_password(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
      </form>
    </div>
    );
}
