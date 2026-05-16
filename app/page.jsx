export const metadata = {
  title: 'notchnotch · Your MacBook already has an AI agent'
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="nn-hero">
        <div className="nn-badge">macOS 14+ &middot; Universal (Intel + Apple Silicon) &middot; v1.4.0</div>
        <p className="nn-slogan">
          Notch Notch!<br />
          Who's there?<br />
          <span className="nn-highlight">The futchure.</span>
        </p>
        <p className="nn-subtitle">
          notchnotch puts Hermes, an open-source AI agent that reads your files,
          runs scripts, browses the web, and handles the tedious stuff, inside
          your MacBook's notch. Hover, talk, watch it work — live.
        </p>
        <div className="nn-cta-group">
          <a href="https://github.com/KikinaStudio/NotchNotch/releases/latest" className="nn-cta nn-cta-primary" target="_blank" rel="noopener">
            Download for macOS
          </a>
          <a href="/docs/getting-started" className="nn-cta nn-cta-secondary">
            Get started
          </a>
          <a href="https://github.com/KikinaStudio/Notchnotch" className="nn-cta nn-cta-secondary" target="_blank" rel="noopener">
            GitHub ↗
          </a>
        </div>

        <div className="nn-hero-image">
          <img src="/header.png" alt="notchnotch, your AI agent inside the MacBook notch" />
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
            <h3>Live chat in the notch</h3>
            <p>
              Hover the notch, type, press Return. Answers stream in token by
              token. Edit any message, retry any answer — context survives
              restarts.
            </p>
          </div>
          <div className="nn-feature-card">
            <div className="nn-feature-icon">👁️</div>
            <h3>Watch it think</h3>
            <p>
              Live thinking preview as tokens arrive. Each tool call appears the
              moment it fires — name and arguments, not a post-hoc log. No more
              guessing what the agent is doing.
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
            <div className="nn-feature-icon">🖱️</div>
            <h3>Mac control</h3>
            <p>
              Opt in and your agent can operate your apps the way you do — open
              Mail and reply to a thread, file documents in Finder, navigate
              Safari. Discreet, sandboxed, and approve-each-action by default.
            </p>
          </div>
          <div className="nn-feature-card">
            <div className="nn-feature-icon">⏰</div>
            <h3>Routines without cron</h3>
            <p>
              Pick a template, tap Daily / Weekdays / Custom, set a time. Tap
              any active card to rename, retime, or rewrite it inline — Notion-
              style. No cron syntax, no round-trip through chat.
            </p>
          </div>
          <div className="nn-feature-card">
            <div className="nn-feature-icon">🔗</div>
            <h3>One-click Google</h3>
            <p>
              Click "Connect Google" in Settings. Your browser opens, you
              consent, you're done. Calendar, Gmail, and Drive land in your
              agent's hands — no tokens to copy, no JSON to edit.
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
            <div className="nn-feature-icon">🎛️</div>
            <h3>Pick your model</h3>
            <p>
              Nous Portal works out of the box — free, no API key. Or bring your
              own: OpenAI, Anthropic, OpenRouter, Gemini, MiniMax, HuggingFace,
              Z.AI, and 4 more. Switch anytime from Settings.
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
          macOS 14+. No terminal experience required.
        </p>

        <div className="nn-steps">
          <div className="nn-step">
            <div className="nn-step-number">1</div>
            <div className="nn-step-content">
              <h4>Download the DMG</h4>
              <p>
                Grab <a href="https://github.com/KikinaStudio/NotchNotch/releases/latest" target="_blank" rel="noopener" style={{ color: '#4A9EC4' }}>the latest release</a> from
                GitHub. One 5.5&nbsp;MB universal binary — Intel and Apple Silicon. Drag the app to Applications, then right-click and open it once:
              </p>
              <code className="nn-step-code">right-click notchnotch.app → Open → Open</code>
              <p className="nn-step-note">
                macOS blocks ad-hoc-signed apps by default. The right-click bypass is the canonical workaround. From v1.3.0 onwards, updates install themselves via Sparkle — same one-time bypass after each update.
              </p>
            </div>
          </div>
          <div className="nn-step">
            <div className="nn-step-number">2</div>
            <div className="nn-step-content">
              <h4>Launch &amp; guided setup</h4>
              <p>
                On first open, notchnotch installs the Hermes agent automatically, picks a free AI model
                (no API key needed), and optionally connects Telegram for mobile access. You don't
                configure anything, just click through.
              </p>
            </div>
          </div>
          <div className="nn-step">
            <div className="nn-step-number">3</div>
            <div className="nn-step-content">
              <h4>Hover the notch</h4>
              <p>
                The chat panel opens. Type your question, press Return. Your agent reads
                files, runs scripts, browses the web, and remembers everything.
              </p>
            </div>
          </div>
        </div>

        <div className="nn-install-alt">
          <p>
            <strong>Or with Homebrew:</strong>{' '}
            <code>brew install --cask KikinaStudio/tap/notchnotch --no-quarantine</code>
          </p>
        </div>
      </section>

      {/* What is Hermes */}
      <section className="nn-section">
        <h2 className="nn-section-title">What is Hermes?</h2>
        <div className="nn-nous-avatar">
          <img src="/logos/nous-research.webp" alt="NousResearch" />
        </div>
        <p className="nn-section-subtitle">
          <a href="https://github.com/NousResearch/hermes-agent" target="_blank" rel="noopener" style={{ color: '#4A9EC4' }}>Hermes</a> is
          an open-source AI agent built by <a href="https://nousresearch.com" target="_blank" rel="noopener" style={{ color: '#4A9EC4' }}>NousResearch</a>.
          Unlike a simple chatbot, Hermes is a full agent that runs locally on your Mac
          and can actually <em>do things</em> on your behalf.
        </p>

        <div className="nn-hermes-capabilities">
          <div className="nn-hermes-col">
            <h4>What it can do</h4>
            <ul>
              <li>Read, write, and organize your files</li>
              <li>Run shell commands and scripts</li>
              <li>Browse the web and extract information</li>
              <li>Schedule automated tasks and webhooks</li>
              <li>Talk on 17 messaging platforms (Telegram, Discord, Slack, WhatsApp, Signal, iMessage, and more)</li>
              <li>Generate images, transcribe voice, speak responses aloud</li>
            </ul>
          </div>
          <div className="nn-hermes-col">
            <h4>What makes it different</h4>
            <ul>
              <li>40+ built-in tools, not just text generation</li>
              <li>Persistent memory across sessions and restarts</li>
              <li>Builds a personal wiki from everything you feed it</li>
              <li>Runs 100% on your machine, no cloud backend</li>
              <li>Works with any model — Claude, GPT, Gemini, Kimi, Grok, local Ollama, AWS Bedrock</li>
              <li>Extensible via MCP, plugins, and shell hooks</li>
            </ul>
          </div>
        </div>

        <p className="nn-section-subtitle" style={{ marginTop: '0' }}>
          notchnotch is the native macOS interface for Hermes. Think of it as the
          face your agent was missing.
        </p>
        <div className="nn-cta-group" style={{ justifyContent: 'center' }}>
          <a href="https://github.com/NousResearch/hermes-agent" className="nn-cta nn-cta-secondary" target="_blank" rel="noopener">
            Hermes on GitHub ↗
          </a>
          <a href="https://nousresearch.com" className="nn-cta nn-cta-secondary" target="_blank" rel="noopener">
            NousResearch ↗
          </a>
        </div>
      </section>
    </main>
  )
}
