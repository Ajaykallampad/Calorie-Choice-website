import Link from "next/link";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-2xl mb-4 tracking-tight">
              CALORIE <span className="text-green-wellness">CHOICE</span>
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Fresh scientifically-balanced meals designed for fitness, weight management, and healthy lifestyles — delivered across Palakkad.
            </p>
            <p className="text-sm font-semibold text-mint-soft">
              Healthy • Tasty • Trusted
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-mint-soft transition-colors text-sm">Meal Plans</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-mint-soft transition-colors text-sm">Nutrition Hub</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-mint-soft transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-mint-soft transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-mint-soft transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-mint-soft transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-mint-soft transition-colors text-sm">Cancellation Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Ready to start?</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get your personalized meal plan today.
            </p>
            <Button variant="cta" className="w-full">
              Calculate Calories
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Calorie Choice. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Made with ❤️ in Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
