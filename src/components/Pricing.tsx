const features = [
  {
    name: 'Swipes',
    description: 'Clean your library one photo at a time',
    free: '10',
    unlimited: 'unlimited',
  },
  {
    name: 'Large Files',
    description: 'Reclaim space from big videos and files',
    free: true,
    unlimited: true,
  },
  {
    name: 'Blurry Photos',
    description: 'Auto-detect and remove blurry shots',
    free: false,
    unlimited: true,
  },
  {
    name: 'Duplicates',
    description: 'Find and remove duplicate photos',
    free: false,
    unlimited: true,
  },
]

export default function Pricing() {
  const freeFeatures = features.filter(f => f.free !== false)
  const premiumFeatures = features.filter(f => f.unlimited !== false)

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-sc-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sc-black mb-4">
            Simple, <span className="gradient-text">honest pricing</span>
          </h2>
          <p className="text-lg text-sc-dark max-w-2xl mx-auto">
            Free to use with everything you need. One optional upgrade — no subscription, no recurring fees, yours forever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Card */}
          <div className="border border-sc-pearl rounded-2xl p-8 bg-sc-white hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-sc-black mb-2">Free</h3>
            <p className="text-sc-dark mb-6">Everything you need to get started</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-sc-black">$0</span>
            </div>

            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature) => (
                <li key={feature.name} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sc-purple flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sc-dark font-medium">{feature.name} {typeof feature.free === 'string' && (
                      <span className="font-bold text-sc-dark">({feature.free})</span>
                    )}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="https://apps.apple.com/app/swipecull"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center text-sc-purple px-6 py-3 rounded-xl font-semibold border-2 border-sc-purple hover:bg-sc-purple/5 transition-colors"
            >
              Download Free
            </a>
          </div>

          {/* Premium Card */}
          <div className="border-2 border-sc-purple rounded-2xl p-8 bg-sc-white shadow-lg relative hover:shadow-xl transition-shadow">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-block bg-sc-purple text-white px-4 py-1 rounded-full text-sm font-semibold">One-time purchase</span>
            </div>

            <h3 className="text-2xl font-bold text-sc-black mb-2 mt-4">Premium</h3>
            <p className="text-sc-dark mb-6">For power users who want everything</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-sc-black">$4.99</span>
              <span className="text-sc-dark text-sm ml-2">one-time</span>
            </div>

            <ul className="space-y-4 mb-8">
              {premiumFeatures.map((feature) => (
                <li key={feature.name} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sc-purple flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sc-dark font-medium">{feature.name} {typeof feature.unlimited === 'string' && (
                      <span className="font-bold text-sc-dark">({feature.unlimited})</span>
                    )}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="https://apps.apple.com/app/swipecull"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Get Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
