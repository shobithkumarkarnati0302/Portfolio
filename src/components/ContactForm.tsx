
import { useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';
import { ContactFormMessage } from '@/types/contact';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: keyof ContactFormMessage, value: string) => {
    try {
      contactSchema.shape[name].parse(value);
      setErrors(prev => ({ ...prev, [name]: '' }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: error.errors[0].message }));
        return false;
      }
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactFormMessage, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    Object.entries(formData).forEach(([key, value]) => {
      if (!validateField(key as keyof ContactFormMessage, value)) {
        isValid = false;
      }
    });

    if (!isValid) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // First save to Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      // Then send email notification
      const notificationResponse = await supabase.functions.invoke('send-contact-notification', {
        body: formData,
      });

      if (notificationResponse.error) {
        console.error('Error sending notification:', notificationResponse.error);
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "border-red-500" : ""}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "border-red-500" : ""}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? "border-red-500" : ""}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
        )}
      </div>

      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "border-red-500" : ""}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full bg-portfolio-primary hover:bg-portfolio-secondary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
