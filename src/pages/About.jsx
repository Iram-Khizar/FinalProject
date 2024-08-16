import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Welcome to Car Rental! We are a premier car rental service dedicated
            to providing reliable and affordable vehicles for your travel needs.
            Established with a passion for excellence, our goal is to make your
            journey as smooth and enjoyable as possible. Whether you need a
            compact car for city driving or a spacious SUV for family trips, we
            have a wide range of vehicles to suit every requirement.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              <strong>Wide Range of Vehicles:</strong> Choose from a diverse
              fleet of cars, including economy, luxury, and SUVs, all
              well-maintained and ready for your journey.
            </li>
            <li className="mb-2">
              <strong>Competitive Pricing:</strong> Enjoy transparent and
              affordable rates with no hidden fees. We offer special deals and
              discounts for long-term rentals.
            </li>
            <li className="mb-2">
              <strong>24/7 Customer Support:</strong> Our dedicated support team
              is available around the clock to assist you with any queries or
              concerns.
            </li>
            <li className="mb-2">
              <strong>Flexible Rental Options:</strong> Choose from daily,
              weekly, or monthly rental plans to fit your schedule and budget.
            </li>
            <li className="mb-2">
              <strong>Easy Online Booking:</strong> Reserve your vehicle quickly
              and easily through our user-friendly website or mobile app.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have any questions or need assistance? Feel free to reach out to us
            at{" "}
            <a
              href="mailto:support@carrental.com"
              className="text-blue-600 hover:underline"
            >
              support@carrental.com
            </a>{" "}
            or call us at <span className="text-blue-600">+123-456-7890</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
