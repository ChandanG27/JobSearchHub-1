// Job Search Hub - Standalone JavaScript Application

class JobSearchHub {
  constructor() {
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  generateSearchUrls(jobTitle, location) {
    const encodedTitle = encodeURIComponent(jobTitle);
    const encodedLocation = encodeURIComponent(location);

    return {
      linkedin: `https://www.linkedin.com/jobs/search/?keywords=${encodedTitle}&location=${encodedLocation}`,
      indeed: `https://www.indeed.com/jobs?q=${encodedTitle}&l=${encodedLocation}`,
      naukri: `https://www.naukri.com/jobs-in-${encodedLocation}-${encodedTitle.replace(/\s+/g, '-')}`
    };
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <!-- Header -->
      <header class="bg-white shadow-sm border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0V6a2 2 0 00-2 2v6"></path>
                </svg>
              </div>
              <h1 class="text-xl font-semibold text-slate-900">Job Search Hub</h1>
            </div>
            <div class="text-sm text-slate-500">Find opportunities across platforms</div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Find Your Dream Job</h2>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto">
            Search across LinkedIn, Indeed, and Naukri with one simple form. Enter your preferences and get instant access to relevant opportunities.
          </p>
        </div>

        <!-- Job Search Form -->
        <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 mb-8">
          <form id="jobSearchForm" class="space-y-6">
            <!-- Job Title Input -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">
                Job Title <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="jobTitle"
                  placeholder="e.g., Software Engineer, Marketing Manager, Data Analyst"
                  class="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-slate-400 text-slate-900"
                  required
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0V6a2 2 0 00-2 2v6"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Location Input -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">
                Location <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="location"
                  placeholder="e.g., New York, Remote, San Francisco"
                  class="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-slate-400 text-slate-900"
                  required
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Search Button -->
            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span>Generate Job Search Links</span>
            </button>
          </form>
        </div>

        <!-- Search Results Section -->
        <div id="searchResults" class="hidden">
          <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-slate-900">Your Job Search Links</h3>
            </div>
            
            <p class="text-slate-600 mb-6">Click on any platform below to open job search results in a new tab:</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="searchLinks">
              <!-- Links will be dynamically inserted here -->
            </div>

            <!-- Search Summary -->
            <div class="mt-6 p-4 bg-slate-50 rounded-lg">
              <p class="text-sm text-slate-600" id="searchSummary">
                <!-- Summary will be dynamically inserted here -->
              </p>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Lightning Fast</h3>
            <p class="text-slate-600">Generate search links instantly with our optimized form processing.</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Multi-Platform</h3>
            <p class="text-slate-600">Search across LinkedIn, Indeed, and Naukri with a single form.</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Mobile Friendly</h3>
            <p class="text-slate-600">Fully responsive design that works perfectly on all devices.</p>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-white border-t border-slate-200 mt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="text-center text-sm text-slate-500">
            <p>&copy; 2024 Job Search Hub. Streamlining your job search across multiple platforms.</p>
          </div>
        </div>
      </footer>
    `;
  }

  bindEvents() {
    const form = document.getElementById('jobSearchForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    const jobTitle = document.getElementById('jobTitle').value;
    const location = document.getElementById('location').value;

    if (!jobTitle || !location) {
      alert('Please fill in both job title and location fields.');
      return;
    }

    const urls = this.generateSearchUrls(jobTitle, location);
    this.displayResults(urls, jobTitle, location);
  }

  displayResults(urls, jobTitle, location) {
    const resultsDiv = document.getElementById('searchResults');
    const linksDiv = document.getElementById('searchLinks');
    const summaryDiv = document.getElementById('searchSummary');

    // Create platform links
    linksDiv.innerHTML = `
      <!-- LinkedIn Link -->
      <a
        href="${urls.linkedin}"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-between p-4 border-2 border-blue-700 rounded-xl hover:bg-blue-700 hover:text-white transition-colors duration-200 group"
      >
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-white/20">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <span class="font-medium text-blue-700 group-hover:text-white">LinkedIn</span>
        </div>
        <svg class="w-5 h-5 text-blue-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>

      <!-- Indeed Link -->
      <a
        href="${urls.indeed}"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-between p-4 border-2 border-blue-800 rounded-xl hover:bg-blue-800 hover:text-white transition-colors duration-200 group"
      >
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center group-hover:bg-white/20">
            <span class="text-white font-bold text-sm">I</span>
          </div>
          <span class="font-medium text-blue-800 group-hover:text-white">Indeed</span>
        </div>
        <svg class="w-5 h-5 text-blue-800 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>

      <!-- Naukri Link -->
      <a
        href="${urls.naukri}"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-between p-4 border-2 border-orange-500 rounded-xl hover:bg-orange-500 hover:text-white transition-colors duration-200 group"
      >
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-white/20">
            <span class="text-white font-bold text-sm">N</span>
          </div>
          <span class="font-medium text-orange-500 group-hover:text-white">Naukri</span>
        </div>
        <svg class="w-5 h-5 text-orange-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
    `;

    // Update summary
    summaryDiv.innerHTML = `<strong>Search for:</strong> ${jobTitle} in ${location}`;

    // Show results
    resultsDiv.classList.remove('hidden');

    // Smooth scroll to results
    setTimeout(() => {
      resultsDiv.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new JobSearchHub();
});