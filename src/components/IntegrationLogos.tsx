import { motion } from 'framer-motion';

const integrations = [
  { name: 'Slack',       category: 'Comms' },
  { name: 'HubSpot',     category: 'CRM' },
  { name: 'Salesforce',  category: 'CRM' },
  { name: 'Notion',      category: 'Docs' },
  { name: 'Airtable',    category: 'Data' },
  { name: 'Google Sheets', category: 'Data' },
  { name: 'Zapier',      category: 'Automation' },
  { name: 'Make',        category: 'Automation' },
  { name: 'Stripe',      category: 'Payments' },
  { name: 'QuickBooks',  category: 'Finance' },
  { name: 'Xero',        category: 'Finance' },
  { name: 'Zendesk',     category: 'Support' },
  { name: 'Intercom',    category: 'Support' },
  { name: 'Typeform',    category: 'Forms' },
  { name: 'Jira',        category: 'PM' },
  { name: 'Asana',       category: 'PM' },
  { name: 'Monday.com',  category: 'PM' },
  { name: 'Pipedrive',   category: 'CRM' },
  { name: 'Shopify',     category: 'E-Commerce' },
  { name: 'AWS S3',      category: 'Storage' },
];

export default function IntegrationLogos() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-white/5 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 text-xs font-semibold tracking-premium uppercase mb-3">
            Works with your existing stack
          </p>
          <h3 className="text-white text-xl font-semibold tracking-tight">
            No rip-and-replace. We build on what you already have.
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            We integrate via APIs, webhooks, and native connectors — across 100+ tools.
          </p>
        </motion.div>

        {/* Scrolling marquee row 1 — left to right */}
        <div className="relative w-full overflow-hidden mb-3">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="flex w-max">
            <motion.div
              className="flex gap-3 pr-3"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ ease: 'linear', duration: 28, repeat: Infinity }}
            >
              {[...integrations.slice(0, 10), ...integrations.slice(0, 10)].map((item, i) => (
                <IntegrationChip key={i} name={item.name} category={item.category} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scrolling marquee row 2 — right to left */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="flex w-max">
            <motion.div
              className="flex gap-3 pr-3"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ ease: 'linear', duration: 32, repeat: Infinity }}
            >
              {[...integrations.slice(10), ...integrations.slice(10)].map((item, i) => (
                <IntegrationChip key={i} name={item.name} category={item.category} />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-600 text-xs mt-8"
        >
          Don't see your tool? If it has an API, we can likely connect it.
        </motion.p>
      </div>
    </section>
  );
}

function IntegrationChip({ name, category }: { name: string; category: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 bg-white/[0.025] hover:border-teal-400/30 hover:bg-teal-400/5 hover:text-teal-300 transition-all duration-300 cursor-default whitespace-nowrap group">
      <span className="text-white text-xs font-medium group-hover:text-teal-300 transition-colors">{name}</span>
      <span className="text-gray-600 text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/5 group-hover:bg-teal-400/10 group-hover:text-teal-400/70 transition-all">
        {category}
      </span>
    </div>
  );
}
