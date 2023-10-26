import Image from "next/image";

export default function Contact() {
    return (
        <div>
            {/* <!-- Contact Section --> */}
            <section id="contact">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <address className="mt-4">
                    <p>
                        Email:{" "}
                        <a href="mailto:your@email.com" className="text-blue-600">
                            your@email.com
                        </a>
                    </p>
                    <p>
                        Phone:{" "}
                        <a href="tel:+1234567890" className="text-blue-600">
                            123-456-7890
                        </a>
                    </p>
                </address>
                {/* <!-- You can add a contact form here if desired --> */}
            </section>
        </div>
    );
}
