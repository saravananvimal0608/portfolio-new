import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/saravanan',
    href: 'https://github.com/saravananvimal0608'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/saravanan',
    href: 'https://www.linkedin.com/in/saravanan-vimal-399364352'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'saravananvimal0608@gmail.com',
    href: 'mailto:saravananvimal0608@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8838144554',
    href: 'tel:+91 8838144554'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai',
  }
];

export default function Contact() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <Mail className="w-8 h-8 text-pink-400" />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Contact
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactLinks.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={index}
              href={contact.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#2D1E2F] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/40 transition-all duration-300 border border-purple-800/30 flex items-center gap-4 group"
            >
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                <Icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                <p className="text-pink-300 font-medium break-all text-sm md:text-base">{contact.value}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
