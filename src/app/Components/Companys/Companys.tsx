import Image from "next/image";
import Link from "next/link";

const Companys = () => {
  const companies = [
    {
      name: "NanoFusion Tech",
      desc: "Leading supplier of industrial equipment and solutions...",
      src: "/NanoFusionLogo.png",
      link: "https://google.com",
    },
    {
      name: "Marvel Paints",
      desc: "Manufacturer of high-quality plastic products...",
      src: "/MarwelLogoBG.png",
      link: "https://google.com",
    },
    {
      name: "NitroWave SprayTech",
      desc: "Specialists in automotive coatings...",
      src: "/NitoWaveLogoBG.png",
      link: "https://google.com",
    },
  ];

  return (
    <section className="mb-20 px-4" id="companies">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
        <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
          Our Company
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <Image
              alt={`Logo of ${company.name}`}
              className="object-contain mb-4"
              src={company.src}
              width={150}
              height={150}
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
            />
            {company.link ? (
              <Link
                href={company.link}
                className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 hover:underline"
              >
                {company.name}
              </Link>
            ) : (
              <h4 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                {company.name}
              </h4>
            )}
            <p className="text-gray-600 text-sm sm:text-base">{company.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companys;
