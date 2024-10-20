import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@mui/material";
import Modal from "@/components/Model";
import AddLeave from "@/components/Leave/AddLeave";
import Carousel from "@/components/Carousel";
import { IoSettingsOutline, IoMenuOutline } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";
import { FaFacebook, FaLine, FaInstagram, FaYoutube } from "react-icons/fa";
import '@/styles/home.module.css';

const data = [{
  "id": 1,
  "first_name": "Jordanna",
  "last_name": "Carruth",
  "email": "jcarruth0@hp.com",
  "gender": "Female",
  "ip_address": "253.14.164.52",
  "avatar": "https://robohash.org/voluptatemdoloriusto.png",
  "company": "Bosco, Harber and Willms",
  "jobtitle": "Director of Sales",
  "deparment": "Sales"
}, {
  "id": 2,
  "first_name": "Jonis",
  "last_name": "Lghan",
  "email": "jlghan1@dot.gov",
  "gender": "Female",
  "ip_address": "186.63.165.254",
  "avatar": "https://robohash.org/exercitationemofficiaaliquid.png",
  "company": "Koepp Group",
  "jobtitle": "Product Engineer",
  "deparment": "Support"
}, {
  "id": 3,
  "first_name": "Raviv",
  "last_name": "Heistermann",
  "email": "rheistermann2@studiopress.com",
  "gender": "Male",
  "ip_address": "54.56.6.72",
  "avatar": "https://robohash.org/utquiin.png",
  "company": "Gorczany LLC",
  "jobtitle": "Quality Control Specialist",
  "deparment": "Services"
}, {
  "id": 4,
  "first_name": "Bronson",
  "last_name": "Trehearn",
  "email": "btrehearn3@si.edu",
  "gender": "Male",
  "ip_address": "72.130.195.14",
  "avatar": "https://robohash.org/modifugiatmollitia.png",
  "company": "Rutherford LLC",
  "jobtitle": "Quality Control Specialist",
  "deparment": "Engineering"
}, {
  "id": 5,
  "first_name": "Consuela",
  "last_name": "Brimley",
  "email": "cbrimley4@ftc.gov",
  "gender": "Female",
  "ip_address": "191.46.217.243",
  "avatar": "https://robohash.org/nequenemoquasi.png",
  "company": "O'Connell-Purdy",
  "jobtitle": "Administrative Officer",
  "deparment": "Human Resources"
}, {
  "id": 6,
  "first_name": "Rosie",
  "last_name": "MacKartan",
  "email": "rmackartan5@about.me",
  "gender": "Female",
  "ip_address": "98.79.18.85",
  "avatar": "https://robohash.org/enimquoquod.png",
  "company": "Cole, Graham and Schuppe",
  "jobtitle": "Safety Technician I",
  "deparment": "Research and Development"
}, {
  "id": 7,
  "first_name": "Charis",
  "last_name": "Gilcriest",
  "email": "cgilcriest6@wp.com",
  "gender": "Female",
  "ip_address": "176.110.22.96",
  "avatar": "https://robohash.org/laborequonihil.png",
  "company": "Purdy, Smitham and Mueller",
  "jobtitle": "Web Designer III",
  "deparment": "Support"
}, {
  "id": 8,
  "first_name": "Dacia",
  "last_name": "Powdrell",
  "email": "dpowdrell7@twitter.com",
  "gender": "Female",
  "ip_address": "135.16.203.219",
  "avatar": "https://robohash.org/suntsintvero.png",
  "company": "Skiles, Purdy and Nienow",
  "jobtitle": "Budget/Accounting Analyst II",
  "deparment": "Services"
}, {
  "id": 9,
  "first_name": "Winona",
  "last_name": "Dibdale",
  "email": "wdibdale8@cnn.com",
  "gender": "Female",
  "ip_address": "19.116.126.196",
  "avatar": "https://robohash.org/etlaboriosamquia.png",
  "company": "White-Stroman",
  "jobtitle": "Social Worker",
  "deparment": "Engineering"
}, {
  "id": 10,
  "first_name": "Abram",
  "last_name": "Varvara",
  "email": "avarvara9@reverbnation.com",
  "gender": "Male",
  "ip_address": "78.151.175.197",
  "avatar": "https://robohash.org/etautemrerum.png",
  "company": "Lynch, Jacobi and Bartell",
  "jobtitle": "Accountant II",
  "deparment": "Support"
}, {
  "id": 11,
  "first_name": "Hallie",
  "last_name": "Toffler",
  "email": "htofflera@msn.com",
  "gender": "Female",
  "ip_address": "98.249.211.132",
  "avatar": "https://robohash.org/etpariaturdolor.png",
  "company": "Feeney-Ledner",
  "jobtitle": "Human Resources Assistant II",
  "deparment": "Engineering"
}, {
  "id": 12,
  "first_name": "Nial",
  "last_name": "Despenser",
  "email": "ndespenserb@livejournal.com",
  "gender": "Male",
  "ip_address": "110.54.224.185",
  "avatar": "https://robohash.org/nesciuntutvelit.png",
  "company": "Reichel-Howell",
  "jobtitle": "Health Coach II",
  "deparment": "Legal"
}, {
  "id": 13,
  "first_name": "Rafaellle",
  "last_name": "Caldecourt",
  "email": "rcaldecourtc@ow.ly",
  "gender": "Male",
  "ip_address": "203.143.112.173",
  "avatar": "https://robohash.org/ettemporead.png",
  "company": "Deckow, Wunsch and Heller",
  "jobtitle": "Senior Editor",
  "deparment": "Sales"
}, {
  "id": 14,
  "first_name": "Beverlee",
  "last_name": "Dran",
  "email": "bdrand@adobe.com",
  "gender": "Female",
  "ip_address": "103.225.246.149",
  "avatar": "https://robohash.org/odiovelitminus.png",
  "company": "Kshlerin-Boyle",
  "jobtitle": "Dental Hygienist",
  "deparment": "Legal"
}, {
  "id": 15,
  "first_name": "Perle",
  "last_name": "Eteen",
  "email": "peteene@bloglovin.com",
  "gender": "Female",
  "ip_address": "210.255.74.87",
  "avatar": "https://robohash.org/deseruntnequereprehenderit.png",
  "company": "Bernhard LLC",
  "jobtitle": "Executive Secretary",
  "deparment": "Product Management"
}, {
  "id": 16,
  "first_name": "Mallory",
  "last_name": "Tomsen",
  "email": "mtomsenf@nature.com",
  "gender": "Female",
  "ip_address": "124.186.154.32",
  "avatar": "https://robohash.org/aperiamexcepturivoluptate.png",
  "company": "Marquardt, Hartmann and Monahan",
  "jobtitle": "Human Resources Assistant I",
  "deparment": "Research and Development"
}, {
  "id": 17,
  "first_name": "Rollins",
  "last_name": "Hilhouse",
  "email": "rhilhouseg@ox.ac.uk",
  "gender": "Male",
  "ip_address": "103.146.242.22",
  "avatar": "https://robohash.org/molestiasautsapiente.png",
  "company": "Bartell-Kiehn",
  "jobtitle": "Information Systems Manager",
  "deparment": "Product Management"
}, {
  "id": 18,
  "first_name": "Mareah",
  "last_name": "Munnis",
  "email": "mmunnish@amazon.de",
  "gender": "Agender",
  "ip_address": "217.84.142.234",
  "avatar": "https://robohash.org/fugiatomnisipsum.png",
  "company": "Block and Sons",
  "jobtitle": "Human Resources Assistant II",
  "deparment": "Services"
}, {
  "id": 19,
  "first_name": "Crosby",
  "last_name": "McGready",
  "email": "cmcgreadyi@pcworld.com",
  "gender": "Male",
  "ip_address": "47.161.93.32",
  "avatar": "https://robohash.org/illoquasiquidem.png",
  "company": "Schoen, Corwin and Bechtelar",
  "jobtitle": "VP Product Management",
  "deparment": "Human Resources"
}, {
  "id": 20,
  "first_name": "Marcia",
  "last_name": "Kennewell",
  "email": "mkennewellj@bluehost.com",
  "gender": "Female",
  "ip_address": "160.23.235.63",
  "avatar": "https://robohash.org/optiodolorvoluptate.png",
  "company": "Gerhold LLC",
  "jobtitle": "Analyst Programmer",
  "deparment": "Support"
}];

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <main className="flex flex-col justify-between min-h-screen">
      {/* user panal */}
      <div className="flex flex-col w-full bg-red-600 mb-4 overflow-hidden">
        {/* Navbar */}
        <div className="flex flex-row items-center justify-between px-4 py-2 gap-2 mt-2">
          <IoMenuOutline 
            className="text-white cursor-pointer"
            size={30}
          />
          <div className="flex flex-row items-center gap-2">
            <AiOutlineBell 
              className="text-white cursor-pointer bg-red-500/80 rounded-full p-1"
              size={30}
            />
            <IoSettingsOutline 
              className="text-white cursor-pointer bg-red-500/80 rounded-full p-1"
              size={30}
            />
          </div>
        </div>
        <div className="px-4">
          <h1 className="text-white text-xl font-bold">SUPERJEEW SERVICE</h1>
        </div>
        <div className="p-4 w-full">
          <div className="grid grid-cols-3 bg-white rounded-xl p-2.5 shadow-lg items-center gap-2">
            <div className="col-span-1">
              <div>
                <Image
                  src={data[0].avatar}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "auto",
                    borderRadius: "50%",
                    border: "1px solid black",
                  }}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col col-span-2 w-full">
              <div className="flex flex-col w-full">
                  <h5 className="text-lg font-bold">{data[0].first_name} {data[0].last_name}</h5>
                  <p className="text-xs text-gray-500">{data[0].jobtitle}</p>

                  <div className="flex flex-col w-full gap-1 items-center mt-4">
                    <div className="flex flex-row gap-2 items-center justify-between w-full">

                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[10px] font-bold">วันลาที่เหลือ</span>
                        <span className="text-[2.2em] text-red-600 font-black">35</span>
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[10px] font-bold">ลาป่วย</span>
                        <span className="text-[2.2em] font-black">2</span>
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[10px] font-bold">ลากิจ</span>
                        <span className="text-[2.2em] font-black">1</span>
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[10px] font-bold">อื่นๆ</span>
                        <span className="text-[2.2em] font-black">1</span>
                      </div>

                    </div>
                    <Divider className="flex my-1 w-full"/>

                    <div className="flex flex-row justify-end w-full">
                      <button
                        className="bg-red-600 text-white py-0.5 px-4 rounded-full"
                      >
                        <span className="text-xs font-bold" onClick={handleOpen}>ยื่นใบลา</span>
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SideShow */}
      <div className="flex flex-col w-full mb-4">
        <Carousel />
      </div>
      

      {/* Body */}
      <div className="flex flex-col w-full mt-4 bg-white py-2">
        <div>
          <Image
            src={"/img/ads.png"}
            alt="ads"
            width={300}
            height={300}
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </div>
      </div>

      <div></div>
      <div></div>
      <div></div>

      {/* Footer */}
      <div className="bg-red-600 text-white py-2 px-4">
        <Divider 
          className="flex my-1 px-2 text-white stroke-white"
          variant="middle"
          orientation="horizontal"
          textAlign="center"
          flexItem
          sx={{
            "&::before, &::after": {
              borderColor: "white",
            },
          }}
        >
          <div className="flex flex-row w-full gap-4">
              <FaFacebook />
              <FaLine />
              <FaYoutube />
              <FaInstagram />
          </div>
        </Divider>
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center gap-4 mt-2">
              <Image
                src="/img/superjeew_logo.png"
                alt="SuperJeew Logo"
                width={50}
                height={50}
                style={{
                  width: "50px",
                  height: "auto",
                }}
                priority
              />

              <Image
                src="/img/superjeew_event_logo.png"
                alt="SuperJeew Logo"
                width={50}
                height={50}
                style={{
                  width: "50px",
                  height: "auto",
                }}
                priority
              />    
            </div>
            <span className="text-xs mt-2">Copyright © 2024 
              <Link 
                href="https://superjeew.com" 
                target="_blank" 
                className="text-white font-bold cursor-pointer ml-1"
              >
                SuperJeew
              </Link>.
            </span>
        </div>
      </div>
      {open && 
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddLeave onClose={handleClose}/>
        </Modal>
      }
    </main>
  );
}
