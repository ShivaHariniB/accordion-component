import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}
function Accordion({ faqs }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          currOpen={currOpen}
          num={index}
          title={faq.title}
          text={faq.text}
          setCurrOpen={setCurrOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ currOpen, num, title, text, setCurrOpen }) {
  const isOpen = num === currOpen;
  // const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setCurrOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
