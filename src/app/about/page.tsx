import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Users, Award, BookOpen, Stethoscope, Droplets, Home } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#2d5d45] to-[#1e402e] text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            আমাদের সম্পর্কে
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                            আমানাহ ফাউন্ডেশন - মানবতার সেবায় নিবেদিত একটি অলাভজনক দাতব্য সংস্থা
                        </p>
                    </div>
                </div>
            </section>

            {/* Organization Story */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                আমাদের গল্প
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                ২০১৫ সালে প্রতিষ্ঠিত আমানাহ ফাউন্ডেশন একটি স্বপ্ন নিয়ে যাত্রা শুরু করেছিল -
                                একটি এমন সমাজ গড়ার যেখানে কেউ অসহায় থাকবে না, সবার মৌলিক অধিকার নিশ্চিত হবে।
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">আমাদের শুরু</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    আমানাহ ফাউন্ডেশনের যাত্রা শুরু হয়েছিল একটি ছোট উদ্যোগ দিয়ে। কয়েকজন স্বেচ্ছাসেবক মিলে
                                    স্থানীয় দরিদ্র পরিবারগুলোর পাশে দাঁড়ানোর সিদ্ধান্ত নেন। আজ আমরা ২৫টি জেলায়
                                    কাজ করছি এবং হাজারো পরিবারের জীবনে ইতিবাচক পরিবর্তন এনেছি।
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    আমাদের প্রতিটি প্রকল্প স্থানীয় সম্প্রদায়ের সাথে পরামর্শ করে পরিচালিত হয় এবং
                                    টেকসই উন্নয়নের নীতি অনুসরণ করে।
                                </p>
                            </div>
                            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                                <Heart className="w-24 h-24 text-[#2d5d45]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-16 sm:px-2 md:px-8 lg:px-30 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center border-2 hover:border-[#e2ae57] transition-colors">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#2d5d45]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-8 h-8 text-[#2d5d45]" />
                                </div>
                                <CardTitle className="text-2xl">আমাদের মিশন</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed">
                                    দরিদ্র ও অসহায় মানুষের জীবনযাত্রার মান উন্নয়ন করা এবং তাদের মৌলিক অধিকার
                                    নিশ্চিত করার মাধ্যমে একটি ন্যায়বিচারভিত্তিক সমাজ গড়ে তোলা।
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-2 hover:border-[#e2ae57] transition-colors">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#e2ae57]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-[#e2ae57]" />
                                </div>
                                <CardTitle className="text-2xl">আমাদের ভিশন</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed">
                                    একটি এমন বাংলাদেশ গড়া যেখানে প্রতিটি মানুষ মর্যাদার সাথে বাঁচতে পারবে,
                                    শিক্ষা, স্বাস্থ্যসেবা এবং জীবিকার নিশ্চয়তা পাবে।
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-2 hover:border-[#e2ae57] transition-colors">
                            <CardHeader>
                                <div className="w-16 h-16 bg-[#be0027]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-[#be0027]" />
                                </div>
                                <CardTitle className="text-2xl">আমাদের মূল্যবোধ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-gray-600 leading-relaxed text-left">
                                    <li>• স্বচ্ছতা ও জবাবদিহিতা</li>
                                    <li>• সততা ও নিষ্ঠা</li>
                                    <li>• মানবিক মর্যাদা</li>
                                    <li>• সামাজিক ন্যায়বিচার</li>
                                    <li>• টেকসই উন্নয়ন</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Our Work Areas */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            আমাদের কর্মক্ষেত্র
                        </h2>
                        <p className="text-lg text-gray-600">
                            আমরা বিভিন্ন সেক্টরে কাজ করি মানুষের জীবনমান উন্নয়নের জন্য
                        </p>
                    </div>

                    <div className="sm:px-2 md:px-8 lg:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#2d5d45]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-10 h-10 text-[#2d5d45]" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">শিক্ষা</h3>
                            <p className="text-gray-600 text-sm">
                                বিনামূল্যে শিক্ষা সামগ্রী, বৃত্তি প্রদান এবং শিক্ষা প্রতিষ্ঠান স্থাপন
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#e2ae57]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Stethoscope className="w-10 h-10 text-[#e2ae57]" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">স্বাস্থ্য</h3>
                            <p className="text-gray-600 text-sm">
                                বিনামূল্যে চিকিৎসা সেবা, ওষুধ বিতরণ এবং স্বাস্থ্য সচেতনতা কার্যক্রম
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#be0027]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Droplets className="w-10 h-10 text-[#be0027]" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">পানি ও স্যানিটেশন</h3>
                            <p className="text-gray-600 text-sm">
                                নিরাপদ পানি সরবরাহ এবং স্যানিটেশন ব্যবস্থার উন্নয়ন
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#e2ae57]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Home className="w-10 h-10 text-[#e2ae57]" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">আশ্রয় ও পুনর্বাসন</h3>
                            <p className="text-gray-600 text-sm">
                                দুর্যোগে ক্ষতিগ্রস্ত পরিবারের পুনর্বাসন এবং আশ্রয়ের ব্যবস্থা
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto sm:px-2 md:px-8 lg:px-30">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            আমাদের নেতৃত্ব
                        </h2>
                        <p className="text-lg text-gray-600">
                            অভিজ্ঞ ও দক্ষ নেতৃত্বে পরিচালিত আমাদের দল
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="text-center">
                            <CardHeader>
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-gray-400" />
                                </div>
                                <CardTitle className="text-xl">মোঃ আব্দুল করিম</CardTitle>
                                <p className="text-[#2d5d45] font-medium">প্রতিষ্ঠাতা ও চেয়ারম্যান</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">
                                    ২০ বছরের সামাজিক সেবার অভিজ্ঞতা এবং উন্নয়ন কর্মকাণ্ডে নেতৃত্বদান।
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-gray-400" />
                                </div>
                                <CardTitle className="text-xl">ডাঃ ফাতিমা খাতুন</CardTitle>
                                <p className="text-[#2d5d45] font-medium">নির্বাহী পরিচালক</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">
                                    জনস্বাস্থ্য বিশেষজ্ঞ এবং প্রকল্প বাস্তবায়নে দক্ষ পরিচালক।
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-gray-400" />
                                </div>
                                <CardTitle className="text-xl">প্রফেসর রহিম উদ্দিন</CardTitle>
                                <p className="text-[#2d5d45] font-medium">শিক্ষা উপদেষ্টা</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">
                                    শিক্ষা ক্ষেত্রে ৩০ বছরের অভিজ্ঞতা এবং নীতি নির্ধারণে বিশেষজ্ঞতা।
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Impact Numbers */}
            <section className="py-16 bg-gradient-to-br from-[#2d5d45] to-[#1e402e] text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            আমাদের প্রভাব
                        </h2>
                        <p className="text-xl text-green-100">
                            গত ১০ বছরে আমাদের অর্জনের সংখ্যা
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">১০০+</div>
                            <div className="text-green-200">সফল প্রকল্প</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">৫০০০+</div>
                            <div className="text-green-200">উপকারভোগী পরিবার</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">২৫+</div>
                            <div className="text-green-200">জেলায় কাজ</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">৫০+</div>
                            <div className="text-green-200">স্থায়ী কর্মী</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
