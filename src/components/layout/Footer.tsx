import { Heart, Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Organization Info */}
                    <div className="space-y-4 flex flex-col justify-center items-center">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                                <Heart className="w-5 h-5 text-white" fill="currentColor" />
                            </div>
                            <span className="text-lg font-bold text-white">আমানাহ ফাউন্ডেশন</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            আমানাহ ফাউন্ডেশন একটি অলাভজনক দাতব্য সংস্থা যা দরিদ্র ও অসহায় মানুষের সেবায় নিয়োজিত।
                            আমাদের লক্ষ্য একটি উন্নত ও কল্যাণকর সমাজ গড়ে তোলা।
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">দ্রুত লিংক</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm hover:text-blue-400 transition-colors">
                                    আমাদের সম্পর্কে
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-sm hover:text-blue-400 transition-colors">
                                    প্রকল্পসমূহ
                                </Link>
                            </li>
                            <li>
                                <Link href="/get-involved" className="text-sm hover:text-blue-400 transition-colors">
                                    যুক্ত হন
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-blue-400 transition-colors">
                                    যোগাযোগ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
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
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">যোগাযোগ</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                                <p className="text-sm">
                                    ১২৩ মেইন রোড<br />
                                    ঢাকা ১২০০, বাংলাদেশ
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-blue-400" />
                                <p className="text-sm">+৮৮ ০১৭১২-৩৪৫৬৭২</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-blue-400" />
                                <p className="text-sm">info@amanahfoundation.org</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>&copy; ২০২৫ আমানাহ ফাউন্ডেশন। সকল অধিকার সংরক্ষিত।</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                                গোপনীয়তা নীতি
                            </Link>
                            <Link href="/terms" className="hover:text-blue-400 transition-colors">
                                শর্তাবলী
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
