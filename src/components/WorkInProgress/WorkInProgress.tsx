interface Props {
  apiStatus: boolean | null;
}

const WorkInProgress = ({ apiStatus }: Props) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 text-white">
      {/* Animated background from your original */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-500" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-position-[60px_60px] opacity-30" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        {/* Simplified icon */}
        <div className="mb-8">
          <div className="relative h-16 w-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto">
            <svg 
              className="h-8 w-8 text-red-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
              />
            </svg>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Feature in Development
        </h1>

        {/* Simple subtitle */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-lg text-slate-300 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            Under Construction
          </span>
        </div>

        {/* API Status - clean card */}
        <div className="mb-10 w-full max-w-xs">
          <div className={`px-5 py-4 rounded-xl backdrop-blur-sm border ${
            apiStatus === null ? 'border-amber-500/30 bg-amber-500/5' :
            apiStatus === true ? 'border-emerald-500/30 bg-emerald-500/5' : 
            'border-rose-500/30 bg-rose-500/5'
          }`}>
            <div className="flex items-center justify-center gap-3">
              <div className={`h-2.5 w-2.5 rounded-full ${
                apiStatus === null ? 'bg-amber-500 animate-pulse' :
                apiStatus === true ? 'bg-emerald-500' : 'bg-rose-500'
              }`} />
              <div className="text-center">
                <div className="text-sm font-medium">
                  {apiStatus === null ? 'Checking Connection' : 
                   apiStatus === true ? 'All Systems Operational' : 
                   'Service Temporarily Unavailable'}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {apiStatus === null ? 'Establishing secure connection...' : 
                   apiStatus === true ? 'Backend services are ready' : 
                   'We\'re working to restore service'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle footer */}
        <div className="absolute bottom-8 text-center">
          <p className="text-xs text-slate-500">
            We'll notify you when it's ready
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;