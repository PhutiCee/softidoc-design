"use client"
import React, { useState } from 'react';
import {
    CreditCard,
    FileText,
    MapPin,
    Receipt,
    Table,
    Shield,
    Car,
    BookOpen,
    IdCard,
    Eye,
    Sparkles,
    ArrowRight,
    CheckCircle,
    Zap,
    Brain,
    Cpu,
    Clock,
    BarChart3,
    Star,
    Users,
    TrendingUp
} from 'lucide-react';
import Footer from '@/components/Footer';

export default function ProductsPage() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const preBuiltModels = [
        {
            id: 1,
            title: "Bank Statement Analysis",
            description: "Advanced AI that analyzes bank statements, extracts key financial data, and identifies spending patterns with 99.2% accuracy.",
            icon: CreditCard,
            color: "from-blue-500 to-cyan-500",
            features: ["Transaction categorization", "Balance verification", "Fraud detection", "Pattern analysis"],
            accuracy: "99.2%",
            category: "financial",
            processingTime: "< 3 seconds",
            useCase: "Financial verification for loans, credit assessments"
        },
        {
            id: 2,
            title: "Payslip Data Extraction",
            description: "Intelligently extracts salary information, deductions, and employment details from various payslip formats.",
            icon: FileText,
            color: "from-green-500 to-emerald-500",
            features: ["Salary extraction", "Tax calculations", "YTD summaries", "Multi-format support"],
            accuracy: "98.7%",
            category: "financial",
            processingTime: "< 2 seconds",
            useCase: "HR processing, income verification, loan applications"
        },
        {
            id: 3,
            title: "Proof of Address",
            description: "Validates and extracts address information from utility bills, bank statements, and official documents.",
            icon: MapPin,
            color: "from-purple-500 to-pink-500",
            features: ["Address validation", "Document verification", "Date checking", "Multi-language support"],
            accuracy: "97.8%",
            category: "verification",
            processingTime: "< 2 seconds",
            useCase: "KYC compliance, account opening, residency verification"
        },
        {
            id: 4,
            title: "Invoice Data Retrieval",
            description: "Comprehensive invoice processing that extracts vendor details, line items, totals, and tax information.",
            icon: Receipt,
            color: "from-orange-500 to-red-500",
            features: ["Line item extraction", "Tax calculations", "Vendor details", "PO matching"],
            accuracy: "98.9%",
            category: "business",
            processingTime: "< 4 seconds",
            useCase: "Accounts payable automation, expense management"
        },
        {
            id: 5,
            title: "Table Data Extraction",
            description: "Advanced OCR technology that accurately extracts and structures data from complex tables and forms.",
            icon: Table,
            color: "from-teal-500 to-blue-500",
            features: ["Complex table parsing", "Multi-column support", "Header detection", "Data validation"],
            accuracy: "96.5%",
            category: "data",
            processingTime: "< 5 seconds",
            useCase: "Data digitization, report automation, form processing"
        },
        {
            id: 6,
            title: "ID Classification",
            description: "Intelligent document classifier that identifies and categorizes various types of identification documents.",
            icon: Shield,
            color: "from-indigo-500 to-purple-500",
            features: ["Document type detection", "Country identification", "Validity checking", "Security features"],
            accuracy: "99.1%",
            category: "identification",
            processingTime: "< 1 second",
            useCase: "Document processing, compliance, security verification"
        },
        {
            id: 7,
            title: "Driver License Extraction",
            description: "Specialized AI for extracting personal information, restrictions, and validity from driver's licenses.",
            icon: Car,
            color: "from-yellow-500 to-orange-500",
            features: ["Personal data extraction", "License restrictions", "Expiry verification", "State compliance"],
            accuracy: "98.4%",
            category: "identification",
            processingTime: "< 2 seconds",
            useCase: "Age verification, identity confirmation, compliance checks"
        },
        {
            id: 8,
            title: "ID Book Data Extraction",
            description: "Comprehensive extraction of personal information from official ID books and booklet-style documents.",
            icon: BookOpen,
            color: "from-pink-500 to-rose-500",
            features: ["Multi-page processing", "Personal details", "Family information", "Historical data"],
            accuracy: "97.6%",
            category: "identification",
            processingTime: "< 6 seconds",
            useCase: "Government services, genealogy, official record keeping"
        },
        {
            id: 9,
            title: "ID Card Extraction",
            description: "Fast and accurate extraction of personal information from national ID cards and government-issued IDs.",
            icon: IdCard,
            color: "from-cyan-500 to-blue-500",
            features: ["Personal information", "ID numbers", "Biometric data", "Security verification"],
            accuracy: "99.0%",
            category: "identification",
            processingTime: "< 1 second",
            useCase: "Identity verification, onboarding, access control"
        },
        {
            id: 10,
            title: "Image Tampering Detection",
            description: "Advanced AI that detects document forgery, image manipulation, and fraudulent alterations.",
            icon: Eye,
            color: "from-red-500 to-pink-500",
            features: ["Forgery detection", "Pixel analysis", "Metadata examination", "Authenticity scoring"],
            accuracy: "96.8%",
            category: "security",
            processingTime: "< 3 seconds",
            useCase: "Fraud prevention, document authenticity, security compliance"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Models', count: preBuiltModels.length },
        { id: 'financial', name: 'Financial', count: preBuiltModels.filter(m => m.category === 'financial').length },
        { id: 'identification', name: 'Identification', count: preBuiltModels.filter(m => m.category === 'identification').length },
        { id: 'verification', name: 'Verification', count: preBuiltModels.filter(m => m.category === 'verification').length },
        { id: 'business', name: 'Business', count: preBuiltModels.filter(m => m.category === 'business').length },
        { id: 'data', name: 'Data Processing', count: preBuiltModels.filter(m => m.category === 'data').length },
        { id: 'security', name: 'Security', count: preBuiltModels.filter(m => m.category === 'security').length }
    ];

    const filteredModels = selectedCategory === 'all'
        ? preBuiltModels
        : preBuiltModels.filter(model => model.category === selectedCategory);

    const stats = [
        { icon: Users, value: "10,000+", label: "Documents Processed Daily" },
        { icon: TrendingUp, value: "98.2%", label: "Average Accuracy" },
        { icon: Zap, value: "< 3s", label: "Average Processing Time" },
        { icon: Star, value: "4.9/5", label: "Customer Satisfaction" }
    ];

    return (
        <div className="min-h-screen py-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-400/5 via-transparent to-accent/5">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4" />
                            <span>AI-Powered Document Intelligence</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
                            Pre-Built AI Models
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Transform your document processing with our AI models.
                            From financial analysis to identity verification, we've got you covered.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-cyan-400/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/90 transition-colors flex items-center space-x-2 group">
                                <span>Explore Models</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border border-gray-400 text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/50 transition-colors">
                                Request Custom Model
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors">
                                    <stat.icon className="h-8 w-8 text-cyan-400" />
                                </div>
                                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="py-12 bg-transparent">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-cyan-400 text-primary-foreground shadow-lg scale-105'
                                    : 'bg-cyan-700/50 text-foreground hover:bg-accent/80'
                                    }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Models Grid */}
            <div className="py-16 bg-transparent">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredModels.map((model) => {
                            const IconComponent = model.icon;
                            return (
                                <div
                                    key={model.id}
                                    className={`relative group cursor-pointer transform transition-all duration-300 ${hoveredCard === model.id ? 'scale-105 -translate-y-2' : ''
                                        }`}
                                    onMouseEnter={() => setHoveredCard(model.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="bg-card border border-gray-400 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${model.color} p-3 shadow-lg`}>
                                                <IconComponent className="h-10 w-10 text-white" />
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-primary">{model.accuracy}</div>
                                                <div className="text-sm text-muted-foreground">Accuracy</div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {model.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {model.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-2 mb-6">
                                            {model.features.map((feature, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm text-foreground">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Meta Info */}
                                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                                            <div className="flex items-center space-x-1">
                                                <Clock className="h-4 w-4" />
                                                <span>{model.processingTime}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <BarChart3 className="h-4 w-4" />
                                                <span>Enterprise Ready</span>
                                            </div>
                                        </div>

                                        {/* Use Case */}
                                        <div className="bg-accent/30 rounded-lg p-4 mb-6">
                                            <div className="text-sm font-medium text-foreground mb-1">Use Cases:</div>
                                            <div className="text-sm text-muted-foreground">{model.useCase}</div>
                                        </div>

                                        {/* CTA */}
                                        <button className="w-full bg-cyan-400/20 text-cyan-400 py-3 rounded-lg font-medium hover:bg-primary hover:text-cyan-200 transition-all duration-300 flex items-center justify-center space-x-2 group">
                                            <span>Try This Model</span>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Custom Models Section */}
            <div className="py-20 bg-gradient-to-br from-cyan-400/5 to-accent/10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center space-x-2 bg-cyan-400/30 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Brain className="h-4 w-4" />
                            <span>Custom AI Solutions</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Need Something Unique?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Our team of AI experts can build custom models tailored to your specific
                            document processing needs. From specialized formats to industry-specific requirements.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-card/50 backdrop-blur-sm border border-gray-400 rounded-xl p-6">
                                <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Custom Training</h3>
                                <p className="text-muted-foreground text-sm">Train models on your specific document types and formats</p>
                            </div>
                            <div className="bg-card/50 backdrop-blur-sm border border-gray-400 rounded-xl p-6">
                                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Fast Deployment</h3>
                                <p className="text-muted-foreground text-sm">Get your custom model deployed in just 2-4 weeks</p>
                            </div>
                            <div className="bg-card/50 backdrop-blur-sm border border-gray-400 rounded-xl p-6">
                                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Dedicated Support</h3>
                                <p className="text-muted-foreground text-sm">24/7 support and continuous model optimization</p>
                            </div>
                        </div>

                        <button className="bg-cyan-400/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/90 transition-colors inline-flex items-center space-x-2 group">
                            <span>Discuss Custom Model</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};