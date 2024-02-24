import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "../../ScrollToTop";
import { Categorys } from "../../shared/Items";
{
  /* <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455.8858587481611!2d45.43050338685459!3d35.572348689319504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002dc9f28e48ab%3A0x88ac888f017f81e2!2sBABL!5e0!3m2!1sen!2siq!4v1705426072447!5m2!1sen!2siq"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>; */
}
export default function Index() {
  return (
    <div dir="rtl" className="font-custom">
      <div className="mx-auto max-w-screen-3xl">
        <Header />
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
      </div>
      <Footer />
    </div>
  );
}
