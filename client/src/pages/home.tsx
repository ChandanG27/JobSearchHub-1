import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, MapPin, ExternalLink, Zap, CheckCircle, Smartphone } from "lucide-react";

const jobSearchSchema = z.object({
  jobTitle: z.string().min(1, "Please enter a job title"),
  location: z.string().min(1, "Please enter a location"),
});

type JobSearchForm = z.infer<typeof jobSearchSchema>;

interface SearchUrls {
  linkedin: string;
  indeed: string;
  naukri: string;
}

export default function Home() {
  const [searchUrls, setSearchUrls] = useState<SearchUrls | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<JobSearchForm>({
    resolver: zodResolver(jobSearchSchema),
    defaultValues: {
      jobTitle: "",
      location: "",
    },
  });

  const generateSearchUrls = (jobTitle: string, location: string): SearchUrls => {
    const encodedTitle = encodeURIComponent(jobTitle);
    const encodedLocation = encodeURIComponent(location);

    return {
      linkedin: `https://www.linkedin.com/jobs/search/?keywords=${encodedTitle}&location=${encodedLocation}`,
      indeed: `https://www.indeed.com/jobs?q=${encodedTitle}&l=${encodedLocation}`,
      naukri: `https://www.naukri.com/jobs-in-${encodedLocation}-${encodedTitle.replace(/\s+/g, '-')}`,
    };
  };

  const onSubmit = async (data: JobSearchForm) => {
    setIsLoading(true);
    
    // Simulate brief loading for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const urls = generateSearchUrls(data.jobTitle, data.location);
    setSearchUrls(urls);
    setIsLoading(false);

    // Scroll to results
    setTimeout(() => {
      document.getElementById('search-results')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-900">Job Search Hub</h1>
            </div>
            <div className="text-sm text-slate-500">Find opportunities across platforms</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Find Your Dream Job</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Search across LinkedIn, Indeed, and Naukri with one simple form. Enter your preferences and get instant access to relevant opportunities.
          </p>
        </div>

        {/* Job Search Form */}
        <Card className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 mb-8">
          <CardContent className="p-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Job Title Input */}
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-slate-700 mb-2">
                        Job Title <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="e.g., Software Engineer, Marketing Manager, Data Analyst"
                            className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-slate-400 text-slate-900"
                            {...field}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <Briefcase className="w-5 h-5 text-slate-400" />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Location Input */}
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-slate-700 mb-2">
                        Location <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="e.g., New York, Remote, San Francisco"
                            className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-slate-400 text-slate-900"
                            {...field}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <MapPin className="w-5 h-5 text-slate-400" />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Search Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Search className="w-5 h-5" />
                  <span>{isLoading ? "Generating Links..." : "Generate Job Search Links"}</span>
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Search Results Section */}
        {searchUrls && (
          <div id="search-results">
            <Card className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Your Job Search Links</h3>
                </div>
                
                <p className="text-slate-600 mb-6">Click on any platform below to open job search results in a new tab:</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* LinkedIn Link */}
                  <a
                    href={searchUrls.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border-2 border-linkedin rounded-xl hover:bg-linkedin hover:text-white transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-linkedin rounded-lg flex items-center justify-center group-hover:bg-white/20">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <span className="font-medium text-linkedin group-hover:text-white">LinkedIn</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-linkedin group-hover:text-white" />
                  </a>

                  {/* Indeed Link */}
                  <a
                    href={searchUrls.indeed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border-2 border-indeed rounded-xl hover:bg-indeed hover:text-white transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indeed rounded-lg flex items-center justify-center group-hover:bg-white/20">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.361 8.163V15.815C11.001 16.683 9.45 16.41 8.597 15.055C7.744 13.7 8.097 11.756 9.457 10.888C10.817 10.02 12.361 8.163 12.361 8.163ZM7.208 10.636C6.034 11.67 5.815 13.392 6.593 14.707C7.371 16.022 9.143 16.662 10.317 15.628V19.417H14.181V4.583H10.317V8.772C9.143 7.738 7.371 8.378 6.593 9.693C5.815 11.008 6.034 12.73 7.208 10.636Z"/>
                        </svg>
                      </div>
                      <span className="font-medium text-indeed group-hover:text-white">Indeed</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-indeed group-hover:text-white" />
                  </a>

                  {/* Naukri Link */}
                  <a
                    href={searchUrls.naukri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border-2 border-naukri rounded-xl hover:bg-naukri hover:text-white transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-naukri rounded-lg flex items-center justify-center group-hover:bg-white/20">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.6 5.2h-6.8l1.2-1.6c.8-1.2.4-2.8-.8-3.6s-2.8-.4-3.6.8L10 3.6 8.4.8c-.8-1.2-2.4-1.6-3.6-.8S3.2 2.4 4 3.6l1.2 1.6H2.4c-1.2 0-2.4 1.2-2.4 2.4v12c0 1.2 1.2 2.4 2.4 2.4h19.2c1.2 0 2.4-1.2 2.4-2.4v-12c0-1.2-1.2-2.4-2.4-2.4zM20 19.6H4V7.6h16v12z"/>
                        </svg>
                      </div>
                      <span className="font-medium text-naukri group-hover:text-white">Naukri</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-naukri group-hover:text-white" />
                  </a>
                </div>

                {/* Search Summary */}
                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">
                    <strong>Search for:</strong> {form.getValues("jobTitle")} in {form.getValues("location")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Lightning Fast</h3>
            <p className="text-slate-600">Generate search links instantly with our optimized form processing.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Multi-Platform</h3>
            <p className="text-slate-600">Search across LinkedIn, Indeed, and Naukri with a single form.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Mobile Friendly</h3>
            <p className="text-slate-600">Fully responsive design that works perfectly on all devices.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-slate-500">
            <p>&copy; 2024 Job Search Hub. Streamlining your job search across multiple platforms.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
