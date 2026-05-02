export default function Privacy() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-sc-black mb-8">Privacy Policy</h1>

        <div className="prose prose-lg text-sc-dark space-y-6">
          <p className="text-sc-dark">
            <strong>Last updated:</strong> May 2, 2026
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-sc-black">Overview</h2>
            <p>
              SwipeCull is designed with your privacy in mind. Your photos are personal, and we've built the app so they stay that way — processed entirely on your device, never sent to our servers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-sc-black">Data Collection</h2>
            <p>
              <strong>SwipeCull does not collect any personal data.</strong> All processing — including blurry detection, duplicate finding, and file analysis — happens on your device. Your photos never leave your phone.
            </p>
            <p>We do not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Collect or store your photos on our servers</li>
              <li>Access or analyze your photo metadata</li>
              <li>Share any data with third parties</li>
              <li>Use analytics or tracking tools</li>
              <li>Display advertisements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-sc-black">Data Storage</h2>
            <p>Your data is stored exclusively on your device:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>On Your Device:</strong> All app data (deletion history, preferences) is stored locally on your iPhone using secure on-device storage.
              </li>
              <li>
                <strong>Your Photos Remain Yours:</strong> Photos are only accessed when you're actively using SwipeCull. They're never copied to SwipeCull's storage — only your Photos library is accessed.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-sc-black">In-App Purchases</h2>
            <p>
              SwipeCull is a one-time purchase processed entirely through Apple's App Store via StoreKit. We do not handle or store any payment information. All purchase and entitlement data is managed by Apple.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-sc-black">Children's Privacy</h2>
            <p>
              SwipeCull does not knowingly collect any information from children. The app is suitable for users of all ages as it does not collect any personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-sc-black">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-sc-black">Contact</h2>
            <p>
              If you have questions about this privacy policy, please reach out via the <a href="/support" className="text-sc-purple hover:underline">Support</a> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
