import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "fkdhj",
      label: "Can I use React in my project?",
      content: "You can use React in your project",
    },
    {
      id: "lhjlasdkh",
      label: "Can I use JavaScript in my project?",
      content: "You can use JavaScript in your project",
    },
    {
      id: "klhhsdk",
      label: "Can I use CSS in my project?",
      content: "You can use CSS in your project",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
