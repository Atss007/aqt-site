"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    FileText,
    Shield,
    Scale,
    Lock,
    AlertCircle,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Mail,
    Phone,
    MapPin,
    Calendar,
    User,
    CreditCard,
    Server,
    Eye,
    Ban,
    Globe,
    ArrowRight,
    Download,
    Printer,
} from "lucide-react";
import Link from "next/link";

// Collapsible Section Component
const CollapsibleSection = ({ icon: Icon, title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-6"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 text-left">{title}</h3>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="text-slate-600" size={24} />
                </motion.div>
            </button>

            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="px-6 py-6 border-t border-slate-200 prose prose-slate max-w-none">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
};

// Table of Contents Item
const TOCItem = ({ icon: Icon, title, onClick }) => (
    <motion.button
        whileHover={{ x: 5 }}
        onClick={onClick}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-50 transition-all duration-200 text-left group"
    >
        <Icon className="text-teal-600 group-hover:text-teal-700 flex-shrink-0" size={20} />
        <span className="text-slate-700 group-hover:text-slate-900 font-medium">{title}</span>
        <ArrowRight className="ml-auto text-slate-400 group-hover:text-teal-600 opacity-0 group-hover:opacity-100 transition-all" size={16} />
    </motion.button>
);

export default function TermsAndConditions() {
    const lastUpdated = "January 15, 2024";

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        // In a real implementation, this would trigger a PDF download
        alert("PDF download would be triggered here");
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
            {/* Hero Section */}
            <section className="  h-[600px] relative max-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-teal-800 pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-sm border border-teal-400/20 rounded-full px-6 py-3 mb-8"
                        >
                            <Scale className="text-teal-400" size={20} />
                            <span className="text-teal-300 font-medium">Legal Information</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Terms & Conditions
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Please read these terms carefully before using our services, as they contain important information about your rights, responsibilities, and legal obligations
                        </p>

                        <div className="flex items-center justify-center gap-2 text-slate-300">
                            <Calendar size={20} />
                            <span>Last Updated: {lastUpdated}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar - Table of Contents */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sticky top-24">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <FileText size={20} className="text-teal-600" />
                                    Quick Navigation
                                </h3>

                                <nav className="space-y-1">
                                    <TOCItem icon={AlertCircle} title="Introduction" onClick={() => scrollToSection('introduction')} />
                                    <TOCItem icon={User} title="Acceptance of Terms" onClick={() => scrollToSection('acceptance')} />
                                    <TOCItem icon={Shield} title="Use of Services" onClick={() => scrollToSection('use-services')} />
                                    <TOCItem icon={Lock} title="User Accounts" onClick={() => scrollToSection('accounts')} />
                                    <TOCItem icon={FileText} title="Intellectual Property" onClick={() => scrollToSection('ip')} />
                                    <TOCItem icon={CreditCard} title="Payment Terms" onClick={() => scrollToSection('payment')} />
                                    <TOCItem icon={Eye} title="Privacy & Data" onClick={() => scrollToSection('privacy')} />
                                    <TOCItem icon={Scale} title="Limitation of Liability" onClick={() => scrollToSection('liability')} />
                                    <TOCItem icon={Ban} title="Termination" onClick={() => scrollToSection('termination')} />
                                    <TOCItem icon={Globe} title="Governing Law" onClick={() => scrollToSection('law')} />
                                </nav>

                                <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                                    <button
                                        onClick={handlePrint}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors"
                                    >
                                        <Printer size={18} />
                                        Print
                                    </button>
                                    <button
                                        onClick={handleDownload}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium rounded-lg transition-colors"
                                    >
                                        <Download size={18} />
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Introduction */}
                            <div id="introduction">
                                <CollapsibleSection icon={AlertCircle} title="1. Introduction" defaultOpen={true}>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Welcome to <strong>Atlanta Quantum Tech</strong> ("Company", "we", "our", "us"). These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with our website and services (the "Service") operated by Atlanta Quantum Tech.
                                    </p>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Please read these Terms and Conditions carefully before using our Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                        <p className="text-blue-900 text-sm font-medium">
                                            <strong>Important:</strong> By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                                        </p>
                                    </div>
                                </CollapsibleSection>
                            </div>

                            {/* Acceptance of Terms */}
                            <div id="acceptance">
                                <CollapsibleSection icon={User} title="2. Acceptance of Terms">
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        By creating an account, accessing, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, along with our Privacy Policy.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">You represent and warrant that:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                        <li>You are at least 18 years of age or the age of majority in your jurisdiction</li>
                                        <li>You have the legal capacity to enter into a binding agreement</li>
                                        <li>All information you provide is accurate, current, and complete</li>
                                        <li>You will maintain the accuracy of such information</li>
                                        <li>Your use of the Service does not violate any applicable law or regulation</li>
                                    </ul>
                                    <p className="text-slate-700 leading-relaxed">
                                        If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                                    </p>
                                </CollapsibleSection>
                            </div>

                            {/* Use of Services */}
                            <div id="use-services">
                                <CollapsibleSection icon={Shield} title="3. Use of Services">
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Our Service provides technology solutions, software development, and digital services. You agree to use the Service only for lawful purposes and in accordance with these Terms.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">You agree NOT to use the Service:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                        <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                                        <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                                        <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                                        <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Service</li>
                                        <li>To use any automated system, including "robots," "spiders," or "offline readers," to access the Service</li>
                                        <li>To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
                                    </ul>
                                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                                        <p className="text-amber-900 text-sm">
                                            <strong>Warning:</strong> Violation of these terms may result in immediate termination of your account and legal action.
                                        </p>
                                    </div>
                                </CollapsibleSection>
                            </div>

                            {/* User Accounts */}
                            <div id="accounts">
                                <CollapsibleSection icon={Lock} title="4. User Accounts & Security">
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Account Security:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                        <li>You are responsible for safeguarding the password you use to access the Service</li>
                                        <li>You agree not to disclose your password to any third party</li>
                                        <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account</li>
                                        <li>You may not use another user&apos;s account without permission</li>
                                        <li>You are responsible for all activities that occur under your account</li>
                                    </ul>
                                    <h4 className="font-bold text-slate-900 mb-3">Account Termination:</h4>
                                    <p className="text-slate-700 leading-relaxed mb-2">
                                        We reserve the right to suspend or terminate your account if you breach these Terms or engage in activities that may cause harm to the Company or other users.
                                    </p>
                                </CollapsibleSection>
                            </div>

                            {/* Intellectual Property */}
                            <div id="ip">
                                <CollapsibleSection icon={FileText} title="5. Intellectual Property Rights">
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        The Service and its original content, features, and functionality are and will remain the exclusive property of Atlanta Quantum Tech and its licensors.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Our Content:</h4>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Atlanta Quantum Tech.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Your Content:</h4>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        You retain all rights to any content you submit, post, or display on or through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content in connection with operating and providing the Service.
                                    </p>
                                    <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
                                        <p className="text-teal-900 text-sm">
                                            <strong>License Grant:</strong> This license continues even if you stop using our Service, but you can terminate it by deleting your content or account.
                                        </p>
                                    </div>
                                </CollapsibleSection>
                            </div>

                            {/* Payment Terms */}
                            <div id="payment">
                                <CollapsibleSection icon={CreditCard} title="6. Payment Terms & Billing">
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Certain aspects of the Service are provided on a paid basis ("Paid Services"). You will be required to provide payment information to access Paid Services.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Pricing:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                        <li>All prices are in US Dollars unless otherwise specified</li>
                                        <li>Prices are subject to change with 30 days' notice</li>
                                        <li>You will be notified of any price changes before they take effect</li>
                                        <li>Continued use after a price change constitutes acceptance of the new pricing</li>
                                    </ul>
                                    <h4 className="font-bold text-slate-900 mb-3">Billing & Refunds:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                        <li>Billing cycles are monthly or annually, depending on your subscription</li>
                                        <li>Payments are non-refundable except as required by law</li>
                                        <li>You may cancel your subscription at any time, effective at the end of the current billing period</li>
                                        <li>We reserve the right to refuse or cancel orders at our discretion</li>
                                    </ul>
                                    <h4 className="font-bold text-slate-900 mb-3">Payment Methods:</h4>
                                    <p className="text-slate-700 leading-relaxed">
                                        We accept major credit cards, debit cards, and other payment methods as displayed on our platform. You authorize us to charge your payment method for the total amount of your purchase.
                                    </p>
                                </CollapsibleSection>
                            </div>

                            {/* Privacy & Data */}
                            <div id="privacy">
                                <CollapsibleSection icon={Eye} title="7. Privacy & Data Protection">
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using the Service, you agree to our collection and use of information in accordance with our Privacy Policy.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Data Collection:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                        <li>We collect information you provide directly to us</li>
                                        <li>We collect information automatically when you use our Service</li>
                                        <li>We may collect information from third-party sources</li>
                                        <li>All data is stored securely using industry-standard encryption</li>
                                    </ul>
                                    <h4 className="font-bold text-slate-900 mb-3">Your Rights:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                        <li>Right to access your personal data</li>
                                        <li>Right to rectify inaccurate data</li>
                                        <li>Right to request deletion of your data</li>
                                        <li>Right to data portability</li>
                                        <li>Right to object to processing</li>
                                    </ul>
                                    <Link href="/privacy" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
                                        Read our full Privacy Policy
                                        <ArrowRight size={16} />
                                    </Link>
                                </CollapsibleSection>
                            </div>

                            {/* Limitation of Liability */}
                            <div id="liability">
                                <CollapsibleSection icon={Scale} title="8. Limitation of Liability">
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        To the maximum extent permitted by applicable law, in no event shall Atlanta Quantum Tech, its affiliates, agents, directors, employees, suppliers, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Disclaimer of Warranties:</h4>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Limitation of Damages:</h4>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        In no event will our total liability to you for all damages, losses, and causes of action exceed the amount you have paid to us in the last twelve (12) months, or one hundred dollars ($100) if you have not made any payments.
                                    </p>
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                                        <p className="text-red-900 text-sm font-medium">
                                            <strong>Notice:</strong> Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for consequential or incidental damages. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.
                                        </p>
                                    </div>
                                </CollapsibleSection>
                            </div>

                            {/* Termination */}
                            <div id="termination">
                                <CollapsibleSection icon={Ban} title="9. Termination">
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Your Rights to Terminate:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                        <li>You may terminate your account at any time by contacting us</li>
                                        <li>Upon termination, your right to use the Service will immediately cease</li>
                                        <li>If you wish to terminate your account, you may simply discontinue using the Service</li>
                                    </ul>
                                    <h4 className="font-bold text-slate-900 mb-3">Effect of Termination:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                        <li>All provisions of the Terms which by their nature should survive termination shall survive</li>
                                        <li>This includes ownership provisions, warranty disclaimers, indemnity, and limitations of liability</li>
                                        <li>We will retain your data as required by law or for legitimate business purposes</li>
                                    </ul>
                                </CollapsibleSection>
                            </div>

                            {/* Governing Law */}
                            <div id="law">
                                <CollapsibleSection icon={Globe} title="10. Governing Law & Dispute Resolution">
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        These Terms shall be governed and construed in accordance with the laws of the State of Georgia, United States, without regard to its conflict of law provisions.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Dispute Resolution:</h4>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in Atlanta, Georgia.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Exceptions:</h4>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Either party may seek injunctive relief in any court of competent jurisdiction to protect intellectual property rights or confidential information.
                                    </p>
                                    <h4 className="font-bold text-slate-900 mb-3">Class Action Waiver:</h4>
                                    <p className="text-slate-700 leading-relaxed">
                                        You agree to waive any right to participate in a class action lawsuit or class-wide arbitration.
                                    </p>
                                </CollapsibleSection>
                            </div>

                            {/* Changes to Terms */}
                            <div id="changes">
                                <CollapsibleSection icon={AlertCircle} title="11. Changes to Terms">
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                                    </p>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                        <p className="text-blue-900 text-sm">
                                            <strong>Notification:</strong> We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date.
                                        </p>
                                    </div>
                                </CollapsibleSection>
                            </div>

                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl shadow-xl p-8 text-white mt-8"
                            >
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Mail size={28} />
                                    Contact Us
                                </h3>
                                <p className="text-teal-100 mb-6">
                                    If you have any questions about these Terms and Conditions, please contact us:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Mail className="flex-shrink-0" size={20} />
                                        <a href="mailto:legal@atlantaquantum.com" className="hover:underline">
                                            legal@atlantaquantum.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="flex-shrink-0" size={20} />
                                        <a href="tel:+11234567890" className="hover:underline">
                                            +1 (123) 456-7890
                                        </a>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="flex-shrink-0 mt-1" size={20} />
                                        <span>
                                            123 Tech Boulevard, Suite 456<br />
                                            Atlanta, GA 30303, United States
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Acknowledgment */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mt-8"
                            >
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={32} />
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                                            Acknowledgment
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed mb-4">
                                            BY USING THE SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
                                        </p>
                                        <p className="text-slate-600 text-sm">
                                            These Terms and Conditions were last updated on {lastUpdated}.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global CSS */}
            <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @media print {
          .no-print {
            display: none !important;
          }
        }

        .prose ul {
          margin-top: 0;
          margin-bottom: 1em;
        }

        .prose li {
          margin-top: 0.25em;
          margin-bottom: 0.25em;
        }
      `}</style>
        </div>
    );
}