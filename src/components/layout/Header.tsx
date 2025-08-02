import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                            <Heart className="w-6 h-6 text-white" fill="currentColor" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">আমানাহ ফাউন্ডেশন</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            হোম
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            আমাদের সম্পর্কে
                        </Link>
                        <Link href="/projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            প্রকল্পসমূহ
                        </Link>
                        <Link href="/get-involved" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            যুক্ত হন
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                            যোগাযোগ
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button asChild className="bg-blue-600 hover:bg-blue-700">
                            <Link href="/donate">দান করুন</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2">
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Mobile Navigation (you can add mobile menu state later) */}
            </div>
        </header>
    );
}
