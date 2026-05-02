const features = [
  {
    name: 'Swipes',
    description: 'Clean your library one photo at a time',
    free: '10',
    unlimited: '∞',
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
  {
    name: 'All Future Updates',
    description: 'New cleanup modes and improvements',
    free: false,
    unlimited: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-sc-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sc-black mb-4">
            Clean your library.{' '}
            <span className="gradient-text">Once.</span>
          </h2>
          <p className="text-lg text-sc-dark max-w-2xl mx-auto">
            One purchase. Unlimited swipes. Forever.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-sc-pearl">
                <th className="text-left py-4 px-4 font-semibold text-sc-black">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-sc-dark">Free</th>
                <th className="text-center py-4 px-4 font-semibold text-sc-purple">Unlimited</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.name} className="border-b border-sc-pearl">
                  <td className="py-6 px-4">
                    <div>
                      <p className="font-semibold text-sc-black">{feature.name}</p>
                      <p className="text-sm text-sc-dark mt-1">{feature.description}</p>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    {typeof feature.free === 'boolean' ? (
                      feature.free ? (
                        <svg className="w-6 h-6 text-sc-purple mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-sc-pearl text-2xl">−</span>
                      )
                    ) : (
                      <span className="font-semibold text-sc-black text-lg">{feature.free}</span>
                    )}
                  </td>
                  <td className="py-6 px-4 text-center">
                    {typeof feature.unlimited === 'boolean' ? (
                      feature.unlimited ? (
                        <svg className="w-6 h-6 text-sc-purple mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-sc-pearl text-2xl">−</span>
                      )
                    ) : (
                      <span className="font-semibold text-sc-purple text-lg">{feature.unlimited}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-12">
          {/* <div className="text-center">
            <p className="text-sc-dark mb-4">Always free, always there</p>
            <a
              href="https://apps.apple.com/app/swipecull"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sc-purple px-8 py-3 rounded-xl font-semibold border border-sc-purple hover:bg-sc-purple/5 transition-colors"
            >
              Download Free
            </a>
          </div> */}
          <div className="text-center gradient-border rounded-xl p-6 bg-sc-white min-w-xl">
            <p className="text-sc-dark mb-4">One-time purchase</p>
            <a
              href="https://apps.apple.com/app/swipecull"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gradient-bg text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Unlock — $4.99
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
