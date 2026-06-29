import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const forYou = [
  'You run a real business with real operational complexity',
  "Your team spends hours on tasks that follow a predictable pattern",
  "You use multiple tools that don't talk to each other",
  "You've thought about AI but don't know where it actually fits",
  'You want results, not a proof-of-concept',
];

const notForYou = [
  'You\'re looking for a magic button or overnight transformation',
  'You\'re running a hobby project or early-stage experiment',
  'You expect instant results without any process involvement',
  'You want to replace your entire software stack',
  'You\'re not willing to spend 45 minutes scoping the work',
];

export default function WhoItsFor() {
  return (
    <section className="py-28 bg-[#111111] dot-grid px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-10 text-center"
        >
          Is This for You?
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-glow p-8 md:p-10 rounded-2xl bg-[#0e0e0e] border border-teal-400/15"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <h3 className="text-white font-semibold text-lg">This is for you if...</h3>
            </div>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="p-8 md:p-10 rounded-2xl bg-[#0a0a0a] border border-white/8"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-gray-600" />
              <h3 className="text-gray-500 font-semibold text-lg">This is not for you if...</h3>
            </div>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0" />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
