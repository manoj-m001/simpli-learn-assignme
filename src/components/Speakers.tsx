import Image from "next/image";

export default function Speakers() {
  return (
    <section className="bg-blue-700 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-orange-400 mb-12">
          Featured Speakers
        </h2>

        {/* Speaker 1 */}
        <div className="flex flex-col md:flex-row gap-8 mb-14">
          <Image
            src="/speakers/rob.png"
            alt="Rob Lauber"
            width={192}
            height={192}
            className="w-48 h-48 rounded-lg object-cover"
          />

          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              Rob Lauber
            </h3>
            <p className="text-white leading-relaxed">
              Rob Lauber is a global workforce and capability-building leader with over
              25 years of experience helping organizations prepare leaders and frontline
              teams for change. Most recently, he served as SVP and Chief Learning
              Officer at McDonald’s, leading learning and development across 37,000+
              restaurants worldwide. His perspective is especially relevant as
              organizations rethink leadership and capability models in the age of AI.
            </p>
          </div>
        </div>

        {/* Speaker 2 */}
        <div className="flex flex-col md:flex-row gap-8 mb-14">
          <Image
            src="/speakers/krishna.png"
            alt="Krishna Kumar"
            className="w-48 h-48 rounded-lg object-cover"
            width={192}
            height={192}
          />

          <div >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              Krishna Kumar
            </h3>
            <p className="text-white leading-relaxed">
              Krishna Kumar is the Founder and CEO of Simplilearn, working closely with
              enterprises navigating workforce transformation driven by AI and digital
              change. At the center of the learning and skills ecosystem, he brings a
              unique perspective on how roles, leadership expectations, and capabilities
              are evolving across industries. Through direct engagement with enterprise
              leaders and education partners, he sees what scales, and what doesn’t, in
              building workforce readiness for the AI era, offering a cross-enterprise
              view of the priorities shaping workforce strategy today.
            </p>
          </div>
        </div>

        {/* Speaker 3 */}
        <div className="flex flex-col md:flex-row gap-8 mb-14">
          <Image
            src="/speakers/sudip.png"
            alt="Sudipto Mitra"
            className="w-48 h-48 rounded-lg object-cover"
            height={192}
            width={192}
          />

          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2" >
              Sudipto Mitra
            </h3>
            <p className="text-white leading-relaxed" >
              Sudipto Mitra is a senior transformation and growth leader with over 20
              years of experience helping enterprises navigate large-scale change across
              technology, operations, and talent. As Chief Revenue Officer at
              Simplilearn, he works with executive teams to address workforce capability
              gaps as AI reshapes roles and operating models. He previously held
              leadership roles at Accenture, IBM Consulting, and WorkFusion.
            </p>
          </div>
        </div>

        {/* Bottom Callout */}
        {/* Bottom Callout */}
<div className="relative mt-16 rounded-lg overflow-hidden">
  {/* Flipped background */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover scale-y-[-1]"
    style={{
      backgroundImage:
        "url('/backgrounds/b2b_home_lead_form_bg.png')",
    }}
  />

  {/* Content */}
  <div className="relative p-8 text-white">
    <h4 className="font-semibold mb-2">
      Additional Expert Perspectives
    </h4>
    <p className="text-sm leading-relaxed max-w-3xl">
      Invited experts from leading consulting and enterprise learning
      organizations will contribute short perspectives, offering insight
      into how large organizations are evolving skills and leadership
      models in the AI era.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}
