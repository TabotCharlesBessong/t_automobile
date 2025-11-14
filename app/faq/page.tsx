export default function FAQPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">What areas do you serve?</h2>
          <p>We serve [list areas/cities].</p>
        </div>
        <div>
          <h2 className="font-semibold">What types of vehicles do you repair?</h2>
          <p>We repair [list vehicle types].</p>
        </div>
        <div>
          <h2 className="font-semibold">How do I book a service?</h2>
          <p>Call/Text/WhatsApp us at +1 234 567 890 or fill out our contact form.</p>
        </div>
        <div>
          <h2 className="font-semibold">What payment methods do you accept?</h2>
          <p>We accept [list payment methods].</p>
        </div>
      </div>
    </main>
  );
}