import screenHome from '../assets/screen-home.png'
import screenSwipeRight from '../assets/screen-swipe-right.png'
import screenSwipeLeft from '../assets/screen-swipe-left.png'
import screenLargeFiles from '../assets/screen-large.png'

export default function AppPreview() {
  return (
    <section className="py-16 sm:py-24 bg-sc-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sc-black mb-4">
            See it in action
          </h2>
          <p className="text-lg text-sc-dark max-w-2xl mx-auto">
            From smart scanning to one-swipe decisions — every screen is designed to get you through your library as fast as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Home screen — primary large mockup */}
          <div className="relative">
            <div className="w-64 sm:w-72 bg-sc-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full bg-sc-charcoal rounded-[2.5rem] overflow-hidden">
                <img
                  src={screenHome}
                  alt="SwipeCull home screen showing album selection and smart scan options"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Swipe screen — second large mockup */}
          <div className="relative">
            <div className="w-64 sm:w-72 bg-sc-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full bg-sc-charcoal rounded-[2.5rem] overflow-hidden">
                <img
                  src={screenSwipeRight}
                  alt="SwipeCull swipe interface showing swipe left to delete, right to keep"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Smaller screens on the right — desktop only */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="w-48 bg-tt-black rounded-[2rem] p-2 shadow-xl">
              <div className="w-full bg-tt-charcoal rounded-[1.75rem] overflow-hidden">
                <img
                  src={screenSwipeLeft}
                  alt="TallyTap reports screen with monthly donut chart"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-48 bg-tt-black rounded-[2rem] p-2 shadow-xl">
              <div className="w-full bg-tt-charcoal rounded-[1.75rem] overflow-hidden">
                <img
                  src={screenLargeFiles}
                  alt="TallyTap transactions list grouped by date"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
