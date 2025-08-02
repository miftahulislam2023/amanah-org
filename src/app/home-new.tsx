import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Globe, Award, ArrowRight, Droplets, BookOpen, Stethoscope } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            মানবতার সেবায় <br />
                            <span className="text-blue-200">আমানাহ ফাউন্ডেশন</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                            দরিদ্র ও অসহায় মানুষের পাশে দাঁড়িয়ে একটি উন্নত সমাজ গড়ে তুলতে আমাদের সাথে যুক্ত হন
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                                <Link href="/donate">
                                    এখনই দান করুন
                                    <Heart className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
                                <Link href="/projects">
                                    প্রকল্প দেখুন
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">১০০+</div>
                            <div className="text-gray-600">সফল প্রকল্প</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">৫০০০+</div>
                            <div className="text-gray-600">উপকারভোগী পরিবার</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">২৫+</div>
                            <div className="text-gray-600">জেলায় কাজ</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">১০ বছর</div>
                            <div className="text-gray-600">অভিজ্ঞতা</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            আমাদের মিশন
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আমানাহ ফাউন্ডেশনের মূল লক্ষ্য হলো দরিদ্র ও অসহায় মানুষের জীবনযাত্রার মান উন্নয়ন করা।
                            শিক্ষা, স্বাস্থ্য, খাদ্য নিরাপত্তা এবং দুর্যোগ ব্যবস্থাপনার মাধ্যমে আমরা একটি টেকসই সমাজ গড়তে প্রতিশ্রুতিবদ্ধ।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                            <CardHeader>
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="w-8 h-8 text-blue-600" />
                                </div>
                                <CardTitle className="text-xl">শিক্ষা সহায়তা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    দরিদ্র শিশুদের শিক্ষার সুযোগ প্রদান এবং শিক্ষা উপকরণ বিতরণের মাধ্যমে আমরা ভবিষ্যৎ প্রজন্মকে গড়ে তুলি।
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                            <CardHeader>
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Stethoscope className="w-8 h-8 text-blue-600" />
                                </div>
                                <CardTitle className="text-xl">স্বাস্থ্য সেবা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    বিনামূল্যে চিকিৎসা সেবা, ওষুধ বিতরণ এবং স্বাস্থ্য সচেতনতা বৃদ্ধির কার্যক্রম পরিচালনা করি।
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                            <CardHeader>
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Droplets className="w-8 h-8 text-blue-600" />
                                </div>
                                <CardTitle className="text-xl">পানি ও স্যানিটেশন</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    নিরাপদ পানি সরবরাহ এবং স্যানিটেশন ব্যবস্থা উন্নয়নের মাধ্যমে জনস্বাস্থ্য রক্ষায় কাজ করি।
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            চলমান প্রকল্পসমূহ
                        </h2>
                        <p className="text-lg text-gray-600">
                            আমাদের বর্তমান প্রকল্পগুলি দেখুন যা সমাজের উন্নয়নে ভূমিকা রাখছে
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {/* Sample Project Cards - These will be dynamic later */}
                        <Card className="overflow-hidden">
                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                <BookOpen className="w-12 h-12 text-blue-600" />
                            </div>
                            <CardHeader>
                                <CardTitle>শিক্ষা সহায়তা প্রকল্প</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    দরিদ্র শিশুদের বিনামূল্যে শিক্ষা সামগ্রী প্রদান এবং বৃত্তি প্রদানের মাধ্যমে শিক্ষার প্রসার।
                                </p>
                                <div className="text-sm text-blue-600">
                                    উপকারভোগী: ৫০০+ শিশু
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden">
                            <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                <Stethoscope className="w-12 h-12 text-green-600" />
                            </div>
                            <CardHeader>
                                <CardTitle>স্বাস্থ্য সেবা ক্যাম্প</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    গ্রামীণ এলাকায় বিনামূল্যে চিকিৎসা সেবা প্রদান এবং স্বাস্থ্য সচেতনতা বৃদ্ধি।
                                </p>
                                <div className="text-sm text-blue-600">
                                    উপকারভোগী: ১০০০+ রোগী
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden">
                            <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                                <Droplets className="w-12 h-12 text-purple-600" />
                            </div>
                            <CardHeader>
                                <CardTitle>নিরাপদ পানি প্রকল্প</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    দুর্গম এলাকায় নলকূপ স্থাপন এবং পানি বিশুদ্ধকরণ ব্যবস্থা চালু করা।
                                </p>
                                <div className="text-sm text-blue-600">
                                    উপকারভোগী: ২০০+ পরিবার
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center">
                        <Button asChild size="lg">
                            <Link href="/projects">
                                সকল প্রকল্প দেখুন
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        আজই আমাদের সাথে যুক্ত হন
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        আপনার ছোট অবদানও অনেক পরিবারের জীবনে পরিবর্তন আনতে পারে।
                        মানবতার সেবায় আমাদের সাথে এগিয়ে আসুন।
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                            <Link href="/donate">
                                দান করুন
                                <Heart className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
                            <Link href="/get-involved">
                                স্বেচ্ছাসেবক হন
                                <Users className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
