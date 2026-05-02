const features = [
  {
    icon: SwipeIcon,
    title: 'Swipe to Decide',
    description: 'One gesture per photo. Swipe left to delete, right to keep. Process your entire library in one focused session without second-guessing.',
  },
  {
    icon: StorageIcon,
    title: 'Large File Scanner',
    description: 'Identifies the videos and photos eating the most storage. Tackle the biggest offenders first and free up space in minutes.',
  },
  {
    icon: BlurIcon,
    title: 'Blurry Detection',
    description: 'Automatically surfaces out-of-focus shots so you can delete them fast. Stop squinting at thumbnails trying to spot the blurry ones.',
  },
  {
    icon: DuplicateIcon,
    title: 'Duplicate Finder',
    description: 'Finds near-identical photos and syncs with your existing Duplicates album. Reclaim storage without manually hunting down copies.',
  },
  {
    icon: ShieldIcon,
    title: 'Safe Deletions',
    description: 'Everything goes to Recently Deleted first. Nothing is permanently gone until you say so — review and recover anything before it\'s final.',
  },
  {
    icon: LockIcon,
    title: 'Private by Design',
    description: 'All processing happens entirely on your device. Your photos never leave your phone — no uploads, no cloud analysis, no exceptions.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-sc-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sc-black mb-4">
            Everything you need to{' '}
            <span className="gradient-text">declutter your library</span>
          </h2>
          <p className="text-lg text-sc-dark max-w-2xl mx-auto">
            SwipeCull is built around one goal: making photo cleanup so fast you'll actually do it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gradient-border rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow bg-sc-white"
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-sc-black mb-2">
                {feature.title}
              </h3>
              <p className="text-sc-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SwipeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg>
  )
}

function BlurIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
}

function DuplicateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

function StorageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  )
}
