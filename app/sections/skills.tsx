import Image from "next/image";

export default function Skills() {

  const skills = [

    {
      type: 'Languages',
      skillSet: [
        'Ruby',
        'Javascript',
        'Python',
        'C#',
        'SQL',
      ]
    },
    {
      type: 'Frontend',
      skillSet: [
        'React',
        'Vue',
        'Next/Nuxt',
        'Tailwind',

      ]
    },
    {
      type: 'Backend',
      skillSet: [
        'Node/Express',
        'Ruby on Rails',
        'ASP.NET Core',
        'Django',
        'Apollo Client'

      ]
    },
    {
      type: 'Testing',
      skillSet: [
        'RSPEC',
        'Cypress',
        'Playwright',
        'Manual Testing',
        'Black/White Box Testing',

      ]
    },
    {
      type: 'Databases',
      skillSet: [
        'Postgresql',
        'MongoDB',
        'NoSQL',
        'Redis',
        'DynamoDB'

      ]
    },
    {
      type: 'Data',
      skillSet: [
        'pandas, seaborn, matplotlib',
        'D3.js',
        'Power BI',
      ]
    },

  ];
  return (
    <main className="border border-(--border) ">
      <section className="p-4 mx-6 flex flex-col" id="about">
        <div className="flex flex-row gap-4 ibm-mono-font">
          <span className="text-lg text-(--text-dimmer)"> 02 </span>
          <span className="font-light text-(--accent-main) text-lg"> Skills </span>
          <div className="border-b border-(--border) w-full mb-1"> </div>
        </div>
        <div className="flex flex-row py-8 flex-wrap justify-center">
          {
            skills.map((skill, i) => (
              <div key={i} className="border border-(--border) w-[30%] p-2 bg-(--card-bg)">
                <span className="  w-full text-(--accent-main) uppercase text-xs font-bold p-1 ibm-mono-font"> {skill.type}</span>
                <div className="border-b border-(--border) py-1"></div>

                <ul>

                  {
                    skill.skillSet.map((s, i) => (
                      <li key={i} className="ibm-sans-font text-(--list-item) text-sm/6 core">
                       {s}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))

          }
        </div>


      </section>
    </main>
  );
}
