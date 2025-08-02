import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Facebook, Youtube } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#2d5d45] to-[#1e402e] text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            যোগাযোগ করুন
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                            আমাদের সাথে যোগাযোগ করুন এবং মানবতার সেবায় অংশগ্রহণ করুন
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-16 sm:px-2 md:px-8 lg:px-30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">আমাদের সাথে যোগাযোগ করুন</CardTitle>
                                    <p className="text-gray-600">
                                        আপনার মতামত, প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন
                                    </p>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">নাম *</Label>
                                                <Input id="name" name="name" placeholder="আপনার পূর্ণ নাম" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">ফোন নম্বর</Label>
                                                <Input id="phone" name="phone" placeholder="+৮৮০১৭xxxxxxxx" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">ইমেইল *</Label>
                                            <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject">বিষয়</Label>
                                            <Select name="subject">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="একটি বিষয় নির্বাচন করুন" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="general">সাধারণ জিজ্ঞাসা</SelectItem>
                                                    <SelectItem value="volunteer">স্বেচ্ছাসেবক হতে চাই</SelectItem>
                                                    <SelectItem value="donation">দান সংক্রান্ত</SelectItem>
                                                    <SelectItem value="partnership">অংশীদারিত্ব</SelectItem>
                                                    <SelectItem value="media">মিডিয়া ও প্রেস</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">বার্তা *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="আপনার বার্তা লিখুন..."
                                                rows={6}
                                                required
                                            />
                                        </div>

                                        <Button type="submit" className="w-full bg-[#2d5d45] hover:bg-[#1e402e]">
                                            বার্তা পাঠান
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Office Info */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-[#2d5d45]" />
                                        আমাদের অফিস
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">প্রধান কার্যালয়</h4>
                                        <p className="text-gray-600">
                                            ১২৩, মেইন রোড<br />
                                            ধানমন্ডি, ঢাকা - ১২০৫<br />
                                            বাংলাদেশ
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <Phone className="w-5 h-5 text-[#2d5d45]" />
                                        <div>
                                            <p className="font-medium">+৮৮ ০১৭১২-৩৪৫৬৭২</p>
                                            <p className="text-sm text-gray-600">অফিস লাইন</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-[#2d5d45]" />
                                        <div>
                                            <p className="font-medium">info@amanahfoundation.org</p>
                                            <p className="text-sm text-gray-600">মূল ইমেইল</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-[#2d5d45]" />
                                        <div>
                                            <p className="font-medium">রবি - বৃহস্পতি</p>
                                            <p className="text-sm text-gray-600">সকাল ৯টা - বিকাল ৫টা</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Branch Offices */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>শাখা অফিস</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900">চট্টগ্রাম শাখা</h4>
                                        <p className="text-gray-600 text-sm">
                                            ৪৫৬, আগ্রাবাদ, চট্টগ্রাম<br />
                                            ফোন: +৮৮ ০১৮৫৫-৬৭৮৯০১
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-900">সিলেট শাখা</h4>
                                        <p className="text-gray-600 text-sm">
                                            ৭৮৯, জিন্দাবাজার, সিলেট<br />
                                            ফোন: +৮৮ ০১৯৪৪-৫৬৭৮৯০
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Social Media */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>সামাজিক যোগাযোগ মাধ্যম</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 px-4 py-2 bg-[#2d5d45] text-white rounded-lg hover:bg-[#1e402e] transition-colors"
                                        >
                                            <Facebook className="w-5 h-5" />
                                            Facebook
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 px-4 py-2 bg-[#be0027] text-white rounded-lg hover:bg-red-700 transition-colors"
                                        >
                                            <Youtube className="w-5 h-5" />
                                            YouTube
                                        </a>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-4">
                                        আমাদের কার্যক্রম ও আপডেট পেতে ফলো করুন
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            আমাদের অবস্থান
                        </h2>
                        <p className="text-lg text-gray-600">
                            ঢাকার প্রাণকেন্দ্রে অবস্থিত আমাদের প্রধান কার্যালয়
                        </p>
                    </div>

                    <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600">Google Maps এর মাধ্যমে আমাদের খুঁজে নিন</p>
                            <p className="text-sm text-gray-500 mt-2">
                                ধানমন্ডি, ঢাকা - ১২০৫
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-16 bg-red-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#be0027] mb-4">
                            জরুরি যোগাযোগ
                        </h2>
                        <p className="text-gray-700 mb-6">
                            যেকোনো জরুরি পরিস্থিতিতে আমাদের সাথে যোগাযোগ করুন
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+8801712345672"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#be0027] text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                জরুরি হটলাইন: ০১৭১২-৩৪৫৬৭২
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
