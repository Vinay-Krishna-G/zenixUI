export function Why() {
  return (
    <section className="py-24 bg-surface-bg border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading font-heading tracking-tight mb-6">
              Own your code.
            </h2>
            <div className="space-y-6 text-lg text-text-body leading-relaxed">
              <p>
                Most website builders trap you in their ecosystem. If you want to add custom authentication, connect a database, or optimize your SEO, you hit a wall.
              </p>
              <p>
                ZenixUI flips the model. We give you a stunning, launch-ready experience, but you don't host it with us. You export it.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">✓</span>
                  <span><strong>No proprietary runtime.</strong> It's just React.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">✓</span>
                  <span><strong>No vendor lock-in.</strong> Host it anywhere.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">✓</span>
                  <span><strong>Clean Next.js project.</strong> Tailored to your exact content.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative rounded-2xl bg-surface-card border border-surface-border p-8 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <pre className="text-sm font-mono text-text-muted leading-relaxed overflow-x-auto">
              <code>
<span className="text-brand-primary">export default</span> <span className="text-text-heading">function</span> Home() {'{\n'}
{'  '}return ({'\n'}
{'    '}&lt;main&gt;{'\n'}
{'      '}&lt;Hero content={'{content.hero}'} /&gt;{'\n'}
{'      '}&lt;Features content={'{content.features}'} /&gt;{'\n'}
{'      '}&lt;Pricing content={'{content.pricing}'} /&gt;{'\n'}
{'    '}&lt;/main&gt;{'\n'}
{'  '}){'\n'}
{'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
