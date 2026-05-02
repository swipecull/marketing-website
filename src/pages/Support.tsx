export default function Support() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-sc-black mb-8">Support</h1>

        <div className="prose prose-lg text-sc-dark space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-sc-black">Need Help?</h2>
            <p>
              We're here to help you get the most out of SwipeCull. Check out the frequently asked questions below, or reach out directly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-sc-black">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="gradient-border rounded-xl p-6 bg-sc-white">
                <h3 className="font-semibold text-sc-black mb-2">How do I start culling photos?</h3>
                <p className="text-sc-dark">
                  Open SwipeCull, select an album, and start swiping. Swipe left to delete, swipe right to keep. As simple as that.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-sc-white">
                <h3 className="font-semibold text-sc-black mb-2">Are my photos safe when I delete them?</h3>
                <p className="text-sc-dark">
                  Yes. Everything goes to Recently Deleted first. Nothing is permanently gone until you empty Recently Deleted — giving you time to change your mind.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-sc-white">
                <h3 className="font-semibold text-sc-black mb-2">How does blurry detection work?</h3>
                <p className="text-sc-dark">
                  SwipeCull analyzes photos on your device to identify out-of-focus shots. It surfaces the blurry ones automatically so you can swipe through and delete them in bulk.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-sc-white">
                <h3 className="font-semibold text-sc-black mb-2">What's the duplicate finder?</h3>
                <p className="text-sc-dark">
                  The duplicate finder identifies near-identical photos in your library and syncs them with your Photos app's Duplicates album. Makes cleanup fast and organized.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-sc-white">
                <h3 className="font-semibold text-sc-black mb-2">How do I find the largest files?</h3>
                <p className="text-sc-dark">
                  Use the Large File Scanner to see which videos and photos are eating up your storage. Start with the biggest offenders and free up space fast.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-sc-white">
                <h3 className="font-semibold text-sc-black mb-2">Is my data sent anywhere?</h3>
                <p className="text-sc-dark">
                  No. All processing happens on your device. Your photos never leave your phone — no cloud uploads, no analysis servers, no data collection.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-sc-white">
                <h3 className="font-semibold text-sc-black mb-2">Can I use SwipeCull on multiple devices?</h3>
                <p className="text-sc-dark">
                  SwipeCull is an iOS app. Each device has its own copy. Your Photos library on each device stays separate, and SwipeCull processes each locally.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-sc-white">
                <h3 className="font-semibold text-sc-black mb-2">What's the price, and why no subscription?</h3>
                <p className="text-sc-dark">
                  SwipeCull is a one-time purchase of $4.99. No subscriptions, no recurring charges, no hidden fees. You buy it once and it's yours forever.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
