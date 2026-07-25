import FAQAccordion from "@/components/ui/enterprise/FAQAccordion";
import SectionHeading from "@/components/services/SectionHeading";

const faqs = [
  {
    question: "What is AutoCount?",
    answer:
      "AutoCount is a comprehensive business management software suite designed for Malaysian businesses. It includes Accounting, Cloud Accounting, POS, Payroll, Inventory Management, Manufacturing, e-Invoice and other business solutions.",
  },
  {
    question: "Which businesses are suitable for AutoCount?",
    answer:
      "AutoCount is suitable for startups, SMEs and growing enterprises across industries including retail, wholesale, manufacturing, trading, construction, logistics, healthcare, hospitality, education and professional services.",
  },
  {
    question: "Do you provide both Cloud and Desktop solutions?",
    answer:
      "Yes. We provide consultation and implementation for both AutoCount Cloud and AutoCount Desktop, helping businesses choose the most suitable deployment based on their operational requirements.",
  },
  {
    question: "Can you migrate data from my existing accounting software?",
    answer:
      "Yes. Our implementation team assists with data migration, validation and system configuration to minimise disruption during the transition.",
  },
  {
    question: "Do you provide user training?",
    answer:
      "Yes. We provide practical user training, administrator training and post-implementation guidance so your team can confidently operate the system.",
  },
  {
    question: "Do you provide technical support after implementation?",
    answer:
      "Yes. XINFINITY HUB SOLUTIONS provides ongoing technical support, troubleshooting, software updates, maintenance guidance and continuous assistance after deployment.",
  },
  {
    question: "Can AutoCount support Malaysia e-Invoice requirements?",
    answer:
      "AutoCount provides e-Invoice capabilities for supported versions and configurations. We can advise on the appropriate solution and implementation approach based on your business requirements.",
  },
  {
    question: "How do I choose the right AutoCount edition?",
    answer:
      "Our consultants will analyse your business workflow, number of users, operational requirements and future expansion plans before recommending the most suitable AutoCount edition.",
  },
];

export default function AutoCountFAQ() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before implementing AutoCount with XINFINITY HUB SOLUTIONS."
        />

        <div className="mx-auto max-w-5xl">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}