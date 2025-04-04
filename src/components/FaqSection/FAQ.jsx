import React, { useState } from "react";
import css from "./FAQ.module.css";
import CTAButton from "../ui/CTAButton";
import StarsUnderCTA from "../ui/StarsUnderCTA/StarsUnderCTA";
import Plus from "../../icons/Plus";
import Minus from "../../icons/Minus";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      title: "What is your return policy?",
      content:
        "You can return any item within 30 days of purchase, provided it’s unused and in its original packaging. Refunds are processed within 5-7 business days after we receive the return.",
    },
    {
      title: "How long does shipping take?",
      content:
        "Shipping typically takes 3-5 business days within the US. International shipping may take 7-14 days depending on your location.",
    },
    {
      title: "Are your products ethically sourced?",
      content:
        "Yes, all our products are ethically sourced. We work with suppliers who adhere to fair labor practices and sustainable production methods.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and Apple Pay. We do not accept cash on delivery.",
    },
    {
      title: "Can I change my order after placing it?",
      content:
        "You can modify your order within 24 hours of placing it by contacting our support team at support@example.com.",
    },
    {
      title: "Do you offer gift wrapping?",
      content:
        "Yes, we offer gift wrapping for an additional $5 per item. You can select this option at checkout.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={css.faqSection}>
      <div className={css.faqContainer}>
        <h2 className={css.title}>Frequently Asked Questions</h2>

        <ul className={css.faqContainer}>
          {faqData.map((item, index) => (
            <li
              key={index}
              className={`${css.faqItem} ${
                openIndex === index ? css.active : ""
              }`}>
              <h4 className={css.faqTitle} onClick={() => toggleItem(index)}>
                {item.title}
                <span className={css.arrow}>
                  {openIndex === index ? <Plus /> : <Minus />}
                </span>
              </h4>
              <p className={css.faqContent}>{item.content}</p>
            </li>
          ))}
        </ul>
        <div className={css.CTAContainer}>
          <CTAButton />
          <StarsUnderCTA />
        </div>
        <div className={css.FAQImageBlock}>
          <div className={css.leftImage}></div>
          <div className={css.rightImage}></div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
