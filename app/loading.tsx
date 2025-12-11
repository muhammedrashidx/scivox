export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <div className="animate-pulse space-y-8">
          {/* Header skeleton */}
          <div className="h-12 bg-secondary rounded w-1/3 mb-8" />
          
          {/* Content skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="aspect-[16/9] bg-secondary rounded-lg" />
              <div className="h-8 bg-secondary rounded w-3/4" />
              <div className="h-4 bg-secondary rounded w-1/2" />
            </div>
            <div className="lg:col-span-1 space-y-4">
              <div className="h-6 bg-secondary rounded w-1/2" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 bg-secondary rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

