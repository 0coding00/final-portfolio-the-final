import { Github, Linkedin, Mail, Twitter,Phone  } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/0coding00',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://sy.linkedin.com/in/yousef-knifati-06075828b',
    icon: Linkedin,
  },
  {
    name: 'Whatsapp',
    href: '#',
    icon: Phone,
  },
  {
    name: 'Email',
    href: '0coding0101@gmail.com',
    icon: Mail,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="font-display font-bold text-xl mb-2">
              <span className="text-gradient">Yousef</span> Knifati
            </h3>
            <p className="text-muted-foreground">
              Frontend Developer crafting exceptional digital experiences
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                asChild
                className="hover-glow"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yousef Knifati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};