import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Home } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1kkft2o",
        "template_ft6wvqr",
        e.target as HTMLFormElement,
        "8OP27AOiAMAd2_Ovg"
      )
      .then(
        (result) => {
          console.log("Message sent successfully", result.text);
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.error("Error sending message", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-black flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-castoro bg-clip-text text-transparent bg-gradient-to-b from-white to-black mb-4">
            Get In Touch
          </h2>
          <p className="font-castoro bg-clip-text text-transparent bg-gradient-to-b from-white to-black">
            Let's work together
          </p>
        </motion.div>

        {/* Contact Content - Two Columns */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          
          {/* Left Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 max-w-md space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Mail className="text-red-500" />
              </div>
              <div>
                <h3 className="text-white font-playfair font-medium">Email</h3>
                <p className="text-gray-400 font-montaga">hodad@sjcetpalai.ac.in</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Phone className="text-red-500" />
              </div>
              <div>
                <h3 className="text-white font-medium font-playfair">Phone</h3>
                <p className="text-gray-400 font-montaga">9446115817</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <MapPin className="text-red-500" />
              </div>
              <div>
                <h3 className="text-white font-medium font-playfair">
                  St. Joseph's College of Engineering and Technology
                </h3>
                <p className="text-gray-400 font-montaga">Head of the Department</p>
                <p className="text-gray-400 font-montaga">Department of Artificial Intelligence and Data Science</p>
                <p className="text-gray-400 font-montaga">Palai, Kottayam</p>
                <p className="text-gray-400 font-montaga">Kerala, India</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Home className="text-red-500" />
              </div>
              <div>
                <h3 className="text-white font-medium font-playfair">Address</h3>
                <p className="text-gray-400 font-montaga">Ampattkunnel (H)</p>
                <p className="text-gray-400 font-montaga">Puthusserry (PO)</p>
                <p className="text-gray-400 font-montaga">Mallappally, Pathanamthitta</p>
                <p className="text-gray-400 font-montaga">689602</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 max-w-md space-y-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-3 font-montaga bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-4 py-3 font-montaga bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 font-montaga bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-600 font-montaga text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
