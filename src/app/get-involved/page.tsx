import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, HandHeart, Building, GraduationCap, Briefcase, Clock, MapPin } from "lucide-react";

export default function GetInvolved() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#2d5d45] to-[#1e402e] text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            আমাদের সাথে যুক্ত হন
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-8">
                            মানবতার সেবায় এগিয়ে আসুন এবং সমাজে ইতিবাচক পরিবর্তন আনতে সহায়তা করুন
                        </p>
                        <Button size="lg" asChild className="bg-[#e2ae57] text-white hover:bg-[#d19940]">
                            <Link href="/contact">
                                যোগাযোগ করুন
                                <Heart className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Ways to Get Involved */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            যুক্ত হওয়ার উপায়
                        </h2>
                        <p className="text-lg text-gray-600">
                            বিভিন্ন উপায়ে আমাদের মিশনে অংশগ্রহণ করুন
                        </p>
                    </div>

                    <div className="sm:px-2 md:px-8 lg:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Volunteer */}
                        <Card className="text-center border-2 hover:border-[#e2ae57] transition-colors">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#2d5d45]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-[#2d5d45]" />
                                </div>
                                <CardTitle className="text-xl">স্বেচ্ছাসেবক হন</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    আমাদের বিভিন্ন প্রকল্পে স্বেচ্ছাসেবক হিসেবে কাজ করুন এবং সরাসরি সমাজ সেবায় অংশগ্রহণ করুন।
                                </p>
                                <Button asChild variant="outline" className="w-full border-[#2d5d45] text-[#2d5d45] hover:bg-[#2d5d45] hover:text-white">
                                    <Link href="/contact">আবেদন করুন</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Donate */}
                        <Card className="text-center border-2 hover:border-[#e2ae57] transition-colors">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#e2ae57]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-8 h-8 text-[#e2ae57]" />
                                </div>
                                <CardTitle className="text-xl">দান করুন</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    আর্থিক অনুদানের মাধ্যমে আমাদের প্রকল্পগুলোকে সহায়তা করুন এবং অসহায় মানুষের পাশে দাঁড়ান।
                                </p>
                                <Button asChild className="w-full bg-[#e2ae57] hover:bg-[#d19940]">
                                    <Link href="/donate">দান করুন</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Partnership */}
                        <Card className="text-center border-2 hover:border-[#e2ae57] transition-colors">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#be0027]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building className="w-8 h-8 text-[#be0027]" />
                                </div>
                                <CardTitle className="text-xl">অংশীদারিত্ব</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    প্রতিষ্ঠান বা ব্যবসায়িক অংশীদার হিসেবে আমাদের সাথে দীর্ঘমেয়াদী সহযোগিতা করুন।
                                </p>
                                <Button asChild variant="outline" className="w-full border-[#be0027] text-[#be0027] hover:bg-[#be0027] hover:text-white">
                                    <Link href="/contact">আলোচনা করুন</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Volunteer Opportunities */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            স্বেচ্ছাসেবকের সুযোগ
                        </h2>
                        <p className="text-lg text-gray-600">
                            আপনার দক্ষতা অনুযায়ী বিভিন্ন ক্ষেত্রে কাজ করার সুযোগ
                        </p>
                    </div>

                    <div className="sm:px-2 md:px-8 lg:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <CardHeader className="text-center">
                                <div className="w-12 h-12 bg-[#2d5d45]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <GraduationCap className="w-6 h-6 text-[#2d5d45]" />
                                </div>
                                <CardTitle className="text-lg">শিক্ষা কার্যক্রম</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• পাঠদান সহায়তা</li>
                                    <li>• শিক্ষা উপকরণ বিতরণ</li>
                                    <li>• কম্পিউটার প্রশিক্ষণ</li>
                                    <li>• ভাষা শিক্ষা</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="text-center">
                                <div className="w-12 h-12 bg-[#e2ae57]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <HandHeart className="w-6 h-6 text-[#e2ae57]" />
                                </div>
                                <CardTitle className="text-lg">স্বাস্থ্য সেবা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• চিকিৎসা ক্যাম্প</li>
                                    <li>• স্বাস্থ্য সচেতনতা</li>
                                    <li>• পুষ্টি পরামর্শ</li>
                                    <li>• প্রাথমিক চিকিৎসা</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="text-center">
                                <div className="w-12 h-12 bg-[#be0027]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Briefcase className="w-6 h-6 text-[#be0027]" />
                                </div>
                                <CardTitle className="text-lg">প্রশাসনিক কাজ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• ডাটা এন্ট্রি</li>
                                    <li>• প্রকল্প সমন্বয়</li>
                                    <li>• রিপোর্ট তৈরি</li>
                                    <li>• ইভেন্ট পরিকল্পনা</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="text-center">
                                <div className="w-12 h-12 bg-[#e2ae57]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Users className="w-6 h-6 text-[#e2ae57]" />
                                </div>
                                <CardTitle className="text-lg">সামাজিক কার্যক্রম</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• খাদ্য বিতরণ</li>
                                    <li>• পোশাক বিতরণ</li>
                                    <li>• সামাজিক জরিপ</li>
                                    <li>• সচেতনতা প্রচার</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                স্বেচ্ছাসেবকের জন্য প্রয়োজনীয়তা
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-[#2d5d45]" />
                                        সময়ের প্রতিশ্রুতি
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• <strong>স্বল্পমেয়াদী:</strong> সপ্তাহে ২-৩ ঘন্টা</li>
                                        <li>• <strong>মধ্যমেয়াদী:</strong> মাসে ১০-১৫ ঘন্টা</li>
                                        <li>• <strong>দীর্ঘমেয়াদী:</strong> ৬ মাস থেকে ১ বছর</li>
                                        <li>• <strong>বিশেষ ইভেন্ট:</strong> প্রয়োজন অনুযায়ী</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-[#e2ae57]" />
                                        কাজের এলাকা
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• ঢাকা ও আশেপাশের এলাকা</li>
                                        <li>• চট্টগ্রাম বিভাগ</li>
                                        <li>• সিলেট ও সুনামগঞ্জ</li>
                                        <li>• অনলাইন কার্যক্রম (যেকোনো জায়গা থেকে)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="mt-8">
                            <CardHeader>
                                <CardTitle>মৌলিক যোগ্যতা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• বয়স ১৮ বছরের বেশি হতে হবে</li>
                                        <li>• মানবিক মূল্যবোধে বিশ্বাসী</li>
                                        <li>• দলগত কাজে আগ্রহী</li>
                                        <li>• নিয়মিত যোগাযোগ রাখতে সক্ষম</li>
                                    </ul>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• বাংলা ভাষায় দক্ষতা</li>
                                        <li>• প্রাথমিক কম্পিউটার জ্ঞান (বিশেষ ক্ষেত্রে)</li>
                                        <li>• শারীরিক ও মানসিকভাবে সুস্থ</li>
                                        <li>• সৎ ও নির্ভরযোগ্য চরিত্র</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            স্বেচ্ছাসেবকদের সুবিধা
                        </h2>
                        <p className="text-lg text-gray-600">
                            স্বেচ্ছাসেবক হিসেবে আপনি যা পাবেন
                        </p>
                    </div>

                    <div className="sm:px-2 md:px-8 lg:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-3">দক্ষতা উন্নয়ন</h3>
                            <p className="text-gray-600 text-sm">
                                প্রশিক্ষণ ও কর্মশালার মাধ্যমে নতুন দক্ষতা অর্জন করুন
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-3">সনদপত্র</h3>
                            <p className="text-gray-600 text-sm">
                                স্বেচ্ছাসেবক কার্যক্রম সফলভাবে সম্পন্ন করলে সনদপত্র প্রদান
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-3">নেটওয়ার্কিং</h3>
                            <p className="text-gray-600 text-sm">
                                সমমনা মানুষদের সাথে পরিচয় ও সম্পর্ক গড়ার সুযোগ
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-3">অভিজ্ঞতা অর্জন</h3>
                            <p className="text-gray-600 text-sm">
                                সামাজিক কাজের মূল্যবান অভিজ্ঞতা যা ক্যারিয়ারে সহায়ক
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-3">পরিবহন সুবিধা</h3>
                            <p className="text-gray-600 text-sm">
                                প্রয়োজনীয় ক্ষেত্রে পরিবহন খরচ ও খাবার সুবিধা
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-3">মানসিক প্রশান্তি</h3>
                            <p className="text-gray-600 text-sm">
                                অসহায় মানুষের সেবা করে মানসিক তৃপ্তি ও আনন্দ
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-br from-[#2d5d45] to-[#1e402e] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        আজই যুক্ত হয়ে যান
                    </h2>
                    <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
                        মানবতার সেবায় আমাদের সাথে যুক্ত হন এবং সমাজে ইতিবাচক পরিবর্তন আনুন
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild className="bg-[#e2ae57] text-white hover:bg-[#d19940]">
                            <Link href="/contact">
                                স্বেচ্ছাসেবক হন
                                <Users className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="border-[#e2ae57] text-[#e2ae57] hover:bg-[#e2ae57] hover:text-white">
                            <Link href="/donate">
                                দান করুন
                                <Heart className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
