export const metadata = {
  title: 'notchnotch — Your MacBook already has an AI agent'
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="nn-hero">
        <div className="nn-badge">macOS 14+ &middot; Open Source &middot; v1.0</div>
        <h1>
          Your MacBook already has<br />
          <span className="nn-highlight">an AI agent.</span><br />
          It just doesn't know it yet.
        </h1>
        <p className="nn-subtitle">
          notchnotch puts Hermes — an open-source AI agent that reads your files,
          runs scripts, browses the web, and handles the tedious stuff — inside
          your MacBook's notch. Hover, talk, done.
        </p>
        <div className="nn-cta-group">
          <a href="/docs/getting-started" className="nn-cta nn-cta-primary">
            Get started
          </a>
          <a href="https://github.com/KikinaStudio/Notchnotch" className="nn-cta nn-cta-secondary" target="_blank" rel="noopener">
            GitHub ↗
          </a>
        </div>

        <div className="nn-hero-image">
          <img src="/screenshots/chat.png" alt="notchnotch chat interface in the MacBook notch" />
        </div>
      </section>

      {/* What is this */}
      <section className="nn-section">
        <h2 className="nn-section-title">No terminal. No API keys to find. No config files.</h2>
        <p className="nn-section-subtitle">
          notchnotch installs Hermes for you on first launch, picks a free model,
          and you're talking to your computer in under two minutes.
        </p>

        <div className="nn-features">
          <div className="nn-feature-card">
            <div className="nn-feature-icon">💬</div>
            <h3>Chat in the notch</h3>
            <p>
              Hover or click the notch to expand a chat panel. Your agent remembers
              context across app restarts. Edit any message, retry any answer.
            </p>
          </div>
          <div className="nn-feature-card">
            <div className="nn-feature-icon">🧠</div>
            <h3>Feed its brain</h3>
            <p>
              Drop a file on the notch, paste an image, record a voice memo, clip a
              web page. Everything lands in your agent's memory and wiki.
            </p>
          </div>
          <div className="nn-feature-card">
            <div className="nn-feature-icon">⏰</div>
            <h3>Routines</h3>
            <p>
              25 ready-made templates: daily news digests, price trackers, health
              reminders. Or describe your own routine in plain English.
            </p>
          </div>
          <div className="nn-feature-card">
            <div className="nn-feature-icon">📱</div>
            <h3>Telegram continuity</h3>
            <p>
              Same conversation on your Mac and your phone. One agent, two
              interfaces, no manual linking.
            </p>
          </div>
          <div className="nn-feature-card">
            <div className="nn-feature-icon">🎙️</div>
            <h3>Voice memos</h3>
            <p>
              Triple-tap Control from any app. Transcribed on-device. Send as a
              message or save straight to your agent's brain.
            </p>
          </div>
          <div className="nn-feature-card">
            <div className="nn-feature-icon">🔒</div>
            <h3>Everything stays local</h3>
            <p>
              No server, no backend, no tracking. Your conversations live on your
              disk. The only external call is to the AI provider you choose.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="nn-section">
        <h2 className="nn-section-title">Up and running in 2 minutes</h2>
        <p className="nn-section-subtitle">
          notchnotch handles everything on first launch. No terminal required.
        </p>

        <div className="nn-steps">
          <div className="nn-step">
            <div className="nn-step-number">1</div>
            <div className="nn-step-content">
              <h4>Install</h4>
              <p>Download the DMG or install with Homebrew. One command, one drag, done.</p>
            </div>
          </div>
          <div className="nn-step">
            <div className="nn-step-number">2</div>
            <div className="nn-step-content">
              <h4>Guided setup</h4>
              <p>
                notchnotch installs the Hermes agent in the background, connects to a
                free AI model (Nous Portal, zero config), and optionally sets up Telegram.
              </p>
            </div>
          </div>
          <div className="nn-step">
            <div className="nn-step-number">3</div>
            <div className="nn-step-content">
              <h4>Hover the notch</h4>
              <p>
                A chat panel opens. Type your question, press Return. Your agent reads
                files, runs scripts, browses the web, and remembers everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="nn-section">
        <h2 className="nn-section-title">Install</h2>
        <div className="nn-install">
          <div className="nn-install-method">
            <h4>Homebrew (recommended)</h4>
            <code>brew install --cask KikinaStudio/tap/notchnotch --no-quarantine</code>
          </div>
          <div className="nn-install-method">
            <h4>Or download the DMG</h4>
            <code>
              <a href="https://github.com/KikinaStudio/Notchnotch/releases" target="_blank" rel="noopener" style={{ color: '#A78BFA', textDecoration: 'underline' }}>
                GitHub Releases
              </a>
              {' '}&rarr; Drag to Applications &rarr; run: xattr -cr /Applications/notchnotch.app
            </code>
          </div>
          <div className="nn-install-method">
            <h4>Build from source</h4>
            <code>git clone https://github.com/KikinaStudio/Notchnotch.git && cd NotchNotch && bash scripts/run.sh</code>
          </div>
        </div>
      </section>

      {/* What is Hermes */}
      <section className="nn-section">
        <h2 className="nn-section-title">What is Hermes?</h2>
        <p className="nn-section-subtitle">
          Hermes is an open-source AI agent by NousResearch. It runs on your Mac and
          has access to 40+ tools: file operations, web browsing, shell commands,
          calendar, cron jobs, and more. It keeps persistent memory across sessions
          and builds a personal wiki from everything you feed it.
        </p>
        <p className="nn-section-subtitle" style={{ marginTop: '-1.5rem' }}>
          notchnotch is the native macOS interface for Hermes. Think of it as the
          face your agent was missing.
        </p>
        <div style={{ textAlign: 'center' }}>
          <a href="https://github.com/NousResearch/hermes-agent" className="nn-cta nn-cta-secondary" target="_blank" rel="noopener">
            Hermes on GitHub ↗
          </a>
        </div>
      </section>
    </main>
  )
}
