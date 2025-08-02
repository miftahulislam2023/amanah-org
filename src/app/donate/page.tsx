import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, Target, CreditCard, Smartphone, Building, DollarSign } from "lucide-react";
import Link from "next/link";

export default function Donate() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            দান করুন
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-8">
                            আপনার ছোট অবদানও অনেক পরিবারের জীবনে বড় পরিবর্তন আনতে পারে
                        </p>
                        <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                            এখনই দান করুন
                            <Heart className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Impact of Donations */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            আপনার দানের প্রভাব
                        </h2>
                        <p className="text-lg text-gray-600">
                            দেখুন আপনার দান কিভাবে মানুষের জীবনে পরিবর্তন আনে
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center border-2 hover:border-green-200 transition-colors">
                            <CardHeader>
                                <div className="text-3xl font-bold text-green-600">৫০০ ৳</div>
                                <CardTitle>একটি শিশুর</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    একমাসের শিক্ষা সামগ্রী (বই, খাতা, কলম)
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-2 hover:border-green-200 transition-colors">
                            <CardHeader>
                                <div className="text-3xl font-bold text-green-600">১০০০ ৳</div>
                                <CardTitle>একটি পরিবারের</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    একসপ্তাহের খাদ্য সহায়তা
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-2 hover:border-green-200 transition-colors">
                            <CardHeader>
                                <div className="text-3xl font-bold text-green-600">২০০০ ৳</div>
                                <CardTitle>একজন রোগীর</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    বিনামূল্যে চিকিৎসা ও ওষুধ
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-2 hover:border-green-200 transition-colors">
                            <CardHeader>
                                <div className="text-3xl font-bold text-green-600">৫০০০ ৳</div>
                                <CardTitle>একটি নলকূপ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    ৫০টি পরিবারের জন্য নিরাপদ পানি
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Donation Categories */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            দানের ক্ষেত্রসমূহ
                        </h2>
                        <p className="text-lg text-gray-600">
                            আপনার পছন্দ অনুযায়ী নির্দিষ্ট ক্ষেত্রে দান করুন
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-8 h-8 text-blue-600" />
                                </div>
                                <CardTitle className="text-center">শিক্ষা সহায়তা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4 text-center">
                                    দরিদ্র শিশুদের শিক্ষার জন্য বই, খাতা, বৃত্তি প্রদান
                                </p>
                                <Button className="w-full" variant="outline">
                                    শিক্ষায় দান করুন
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-8 h-8 text-green-600" />
                                </div>
                                <CardTitle className="text-center">স্বাস্থ্য সেবা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4 text-center">
                                    বিনামূল্যে চিকিৎসা, ওষুধ ও স্বাস্থ্য ক্যাম্প পরিচালনা
                                </p>
                                <Button className="w-full" variant="outline">
                                    স্বাস্থ্যে দান করুন
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-purple-600" />
                                </div>
                                <CardTitle className="text-center">খাদ্য সহায়তা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4 text-center">
                                    অভাবী পরিবারগুলোর জন্য খাদ্য সামগ্রী বিতরণ
                                </p>
                                <Button className="w-full" variant="outline">
                                    খাদ্যে দান করুন
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8 text-blue-600" />
                                </div>
                                <CardTitle className="text-center">দুর্যোগ ত্রাণ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4 text-center">
                                    প্রাকৃতিক দুর্যোগে ক্ষতিগ্রস্ত মানুষের সহায়তা
                                </p>
                                <Button className="w-full" variant="outline">
                                    ত্রাণে দান করুন
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building className="w-8 h-8 text-green-600" />
                                </div>
                                <CardTitle className="text-center">অবকাঠামো উন্নয়ন</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4 text-center">
                                    স্কুল, ক্লিনিক, নলকূপ স্থাপন ও সংস্কার
                                </p>
                                <Button className="w-full" variant="outline">
                                    উন্নয়নে দান করুন
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <DollarSign className="w-8 h-8 text-orange-600" />
                                </div>
                                <CardTitle className="text-center">সাধারণ তহবিল</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4 text-center">
                                    সব ধরনের কার্যক্রমে ব্যবহারের জন্য সাধারণ দান
                                </p>
                                <Button className="w-full" variant="outline">
                                    সাধারণ দান করুন
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Payment Methods */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            দানের উপায়
                        </h2>
                        <p className="text-lg text-gray-600">
                            সুবিধাজনক উপায়ে আমাদের কাছে আপনার দান পৌঁছান
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <Card className="text-center">
                            <CardHeader>
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Smartphone className="w-8 h-8 text-blue-600" />
                                </div>
                                <CardTitle>মোবাইল ব্যাংকিং</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div>
                                    <p className="font-semibold">bKash:</p>
                                    <p className="text-sm text-gray-600">০১৭১২-৩৪৫৬৭২</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Nagad:</p>
                                    <p className="text-sm text-gray-600">০১৮৫৫-৬৭৮৯০১</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Rocket:</p>
                                    <p className="text-sm text-gray-600">০১৯৪৪-৫৬৭৮৯০</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building className="w-8 h-8 text-green-600" />
                                </div>
                                <CardTitle>ব্যাংক ট্রান্সফার</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div>
                                    <p className="font-semibold">ব্যাংক:</p>
                                    <p className="text-sm text-gray-600">ইসলামী ব্যাংক বাংলাদেশ</p>
                                </div>
                                <div>
                                    <p className="font-semibold">অ্যাকাউন্ট:</p>
                                    <p className="text-sm text-gray-600">১২৩৪৫৬৭৮৯০</p>
                                </div>
                                <div>
                                    <p className="font-semibold">শাখা:</p>
                                    <p className="text-sm text-gray-600">ধানমন্ডি, ঢাকা</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CreditCard className="w-8 h-8 text-purple-600" />
                                </div>
                                <CardTitle>অনলাইন পেমেন্ট</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-gray-600">
                                    ক্রেডিট কার্ড, ডেবিট কার্ড দিয়ে নিরাপদ অনলাইন পেমেন্ট
                                </p>
                                <Button className="w-full">
                                    অনলাইনে দান করুন
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Donate */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            কেন আমানাহ ফাউন্ডেশনে দান করবেন?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-gray-900 mb-3">১০০% স্বচ্ছতা</h3>
                            <p className="text-gray-600 text-sm">
                                আপনার প্রতিটি টাকার হিসাব এবং ব্যবহার সম্পর্কে সম্পূর্ণ স্বচ্ছতা
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-gray-900 mb-3">লক্ষ্যভিত্তিক ব্যবহার</h3>
                            <p className="text-gray-600 text-sm">
                                আপনার দান নির্দিষ্ট প্রকল্পে সরাসরি ব্যবহৃত হয়
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-gray-900 mb-3">সরাসরি প্রভাব</h3>
                            <p className="text-gray-600 text-sm">
                                আপনার দান সরাসরি উপকারভোগীদের কাছে পৌঁছায়
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-gray-900 mb-3">নিয়মিত আপডেট</h3>
                            <p className="text-gray-600 text-sm">
                                প্রকল্পের অগ্রগতি সম্পর্কে নিয়মিত রিপোর্ট পাবেন
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-gray-900 mb-3">সরকারি নিবন্ধন</h3>
                            <p className="text-gray-600 text-sm">
                                আইনত নিবন্ধিত ও স্বীকৃত দাতব্য সংস্থা
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-gray-900 mb-3">কম প্রশাসনিক খরচ</h3>
                            <p className="text-gray-600 text-sm">
                                মাত্র ৫% প্রশাসনিক খরচ, ৯৫% সরাসরি সেবায়
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-green-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        আজই দান করুন
                    </h2>
                    <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
                        আপনার দান একটি পরিবারের জীবনে আলো জ্বালাতে পারে।
                        মানবতার সেবায় এগিয়ে আসুন।
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                            অনলাইনে দান করুন
                            <Heart className="w-5 h-5 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-600">
                            <Link href="/contact">
                                যোগাযোগ করুন
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
