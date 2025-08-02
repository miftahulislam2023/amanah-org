import { Heart, Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Organization Info - Takes more space */}
                    <div className="lg:col-span-5 space-y-4 text-center lg:text-left flex flex-col items-center">
                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#2d5d45] rounded-lg">
                                <Heart className="w-6 h-6 text-white" fill="currentColor" />
                            </div>
                            <span className="text-xl font-bold text-white">আমানাহ ফাউন্ডেশন</span>
                        </div>
                        <p className="text-base leading-relaxed text-gray-300 max-w-md mx-auto lg:mx-0">
                            আমানাহ ফাউন্ডেশন একটি অলাভজনক দাতব্য সংস্থা যা দরিদ্র ও অসহায় মানুষের সেবায় নিয়োজিত।
                            আমাদের লক্ষ্য একটি উন্নত ও কল্যাণকর সমাজ গড়ে তোলা।
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
                        <h3 className="text-lg font-semibold text-white">দ্রুত লিংক</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm hover:text-[#e2ae57] transition-colors">
                                    আমাদের সম্পর্কে
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-sm hover:text-[#e2ae57] transition-colors">
                                    প্রকল্পসমূহ
                                </Link>
                            </li>
                            <li>
                                <Link href="/get-involved" className="text-sm hover:text-[#e2ae57] transition-colors">
                                    যুক্ত হন
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-[#e2ae57] transition-colors">
                                    যোগাযোগ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
                        <h3 className="text-lg font-semibold text-white">আমাদের সেবা</h3>
                        <ul className="space-y-2">
                            <li className="text-sm">শিক্ষা সহায়তা</li>
                            <li className="text-sm">স্বাস্থ্য সেবা</li>
                            <li className="text-sm">খাদ্য বিতরণ</li>
                            <li className="text-sm">পানি ও স্যানিটেশন</li>
                            <li className="text-sm">দুর্যোগ ত্রাণ</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3 space-y-4 text-center lg:text-left">
                        <h3 className="text-lg font-semibold text-white">যোগাযোগ</h3>
                        <div className="space-y-3">
                            <div className="flex items-start justify-center lg:justify-start space-x-3">
                                <MapPin className="w-4 h-4 mt-1 text-[#e2ae57] flex-shrink-0" />
                                <p className="text-sm">
                                    ১২৩ মেইন রোড<br />
                                    ঢাকা ১২০০, বাংলাদেশ
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <Phone className="w-4 h-4 text-[#e2ae57] flex-shrink-0" />
                                <p className="text-sm">+৮৮ ০১৭১২-৩৪৫৬৭২</p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <Mail className="w-4 h-4 text-[#e2ae57] flex-shrink-0" />
                                <p className="text-sm">info@amanahfoundation.org</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-[#e2ae57] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#e2ae57] transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t sm:px-2 md:px-8 lg:px-30 border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>&copy; ২০২৫ আমানাহ ফাউন্ডেশন। সকল অধিকার সংরক্ষিত।</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-[#e2ae57] transition-colors">
                                গোপনীয়তা নীতি
                            </Link>
                            <Link href="/terms" className="hover:text-[#e2ae57] transition-colors">
                                শর্তাবলী
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
