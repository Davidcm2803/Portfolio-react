import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
  "service_m5n6eef",   
  "template_ggcv59b",    
  formRef.current,        
  "4536tFSebj3pPWoVA" 
)
.then(
  (result) => {
    console.log("Email sent:", result.text);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    formRef.current.reset();
    setIsSubmitting(false);
  },
  (error) => {
    console.error("Email error:", error.text);
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
    });
    setIsSubmitting(false);
  }
);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Information
            </h3>

            <div className="space-y-6 flex flex-col items-center -ml-12">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:davidcm2803@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    davidcm2803@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+50664402488"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    6440 2488
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">
                Connect With Me
              </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/davidcastillom2803/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/dxxcast28/"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="David Castillo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
