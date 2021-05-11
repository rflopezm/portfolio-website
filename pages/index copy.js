import Head from 'next/head';

function Title({ title }) {
  return <h1 className="text-xl font-bold">{title}</h1>;
}

function Section({ title, description, subtitle }) {
  return (
    <div className="flex flex-col font-main py-2">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-justify text-sm">{description}</p>
      <h5 className="text-base text-gray font-thin">{subtitle}</h5>
    </div>
  );
}

function Education({ degree, school, start, end, city }) {
  return (
    <div className="flex flex-col font-main py-1">
      <h1 className="text-base font-bold">
        {degree}, {school}
      </h1>
      <h5 className="text-sm text-gray font-regular">
        {start} - {end}, {city}
      </h5>
    </div>
  );
}

function WorkHistory({ title, company, start, end, description }) {
  return (
    <div className="flex flex-col font-main py-1">
      <h1 className="text-base font-bold">
        {title}, {company}
      </h1>
      <h5 className="text-sm text-gray font-regular">
        {start} - {end}
      </h5>
      <p className="text-justify text-sm">{description}</p>
    </div>
  );
}

export default function Home() {
  const name = 'Rodrigo López';
  const title = 'SOFTWARE ENGINEER';
  const email = 'rflopezm@gmail.com';
  const skills = [
    'Web Development',
    'Mobile Development',
    'Backend Development',
    'SQL Database Development',
    'Fast Learner',
    'Empathy',
    'Resilience',
  ];

  const languages = ['English (Full professional proficiency)', 'Spanish (Native Proficiency)'];

  const links = ['Portfolio'];

  const profile = `Bolivian software engineer, looking for new global challenges to grow and learn. Passionate problem solver with 5+ years of experience developing web and mobile/hybrid applications primarily with JavaScript, HTML, CSS, Angular, AngularJS, ReactJS, React Native, NodeJS, PostgreSQL and GIT. Experience deploying full systems on AWS (EC2 and Lightsail) Linux Centos instances.`;

  const employmentHistory = [
    {
      title: 'Founder',
      company: 'Hybrid Scripts',
      start: 'March, 2016',
      end: 'Present',
      description: `Design and development of web-based E.R.P systems for medium-sized companies in the commercial and healthcare industry. Feature development for inventory, invoicing, accounting, HR and hospital administration. Development of mobile hybrid applications. Work with customers and their requirements on-site. Team management, DevOps strategy for SaaS deployment.
  Core technologies:  AngularJS, Angular, NodeJS, Reacts, React hooks, Redux, Sagas, React Native, Recharts, JsReport, PostgreSQL.`,
    },
    {
      title: 'Freelance Software Engineer',
      company: 'Clínica Los Olivos S.A',
      start: 'Sep 2014',
      end: 'Present',
      description: `Development and deployment of OpenERP modules with focus on hospital administration, web, Android and IOS mobile applications integrated with the core system.
Core technologies: Python, Ionic Framework, JavaScript, AngularJS, PostgreSQL, OpenERP.`,
    },
    {
      title: 'Software Engineer',
      company: 'State University',
      start: 'Jan 2018',
      end: 'May 2018',
      description: `Development and deployment of an IOS and Android mobile application to display public transportation alternatives and best routes in the city of Cochabamba Bolivia.  Development of spatial database and APIs.
  Core technologies: React Native, React Leaflet, NodeJS, PostGIS, PostgreSQL.`,
    },
    {
      title: 'Freelance Mobile Developer',
      company: 'SCADE',
      start: 'May 2015',
      end: 'Oct 2015',
      description: `PoC development for mobile applications with SCADE mobile application development platform. Provide user feedback to the developer team on ease of use. Performance comparison of SCADE applications vs Ionic applications.
  Core technologies: Lua, Ionic Framework, SCADE Framework.`,
    },
    {
      title: 'Software Engineer',
      company: 'Thomson Reuters',
      start: 'March 2014',
      end: 'Sep 2014',
      description: `Development of features for the GIS web viewer, automation helper libraries to test ArcGIS applications, MSI installers for windows platform.
  Core technologies: C#, WIX, Javascript.`,
    },
  ];

  const education = [
    {
      school: 'Universidad Privada Boliviana',
      degree: 'Bachelor Degree in Systems Engineering',
      start: 'Feb 2009',
      end: 'Dec 2013',
      city: 'Cochabamba - Bolivia',
    },
  ];

  return (
    <div>
      <Head>
        <title>Rodrigo Lopez - Software Engineer</title>
        <meta name="description" content="Full stack developer" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flex flex-row h-full w-screen font-main">
        <div className="bg-primary text-white px-10 py-10">
          <div className="text-center flex flex-col py-2">
            <h1 className="text-lg font-bold">{name}</h1>
            <h5 className="text-sm pt-4 font-thin">{title}</h5>
          </div>

          <div className="text-left flex flex-col py-2">
            <h1 className="text-lg font-bold">Details</h1>
            <span className="text-sm font-thin">{email}</span>
          </div>

          <div className="text-left flex flex-col py-2">
            <h1 className="text-lg font-bold">Skills</h1>
            {skills.map((skill) => (
              <span key={skill} className="text-sm font-thin py-1">
                {skill}
              </span>
            ))}
          </div>

          <div className="text-left flex flex-col py-2">
            <h1 className="text-lg font-bold">Languages</h1>
            {languages.map((lang) => (
              <span key={lang} className="text-sm font-thin py-1">
                {lang}
              </span>
            ))}
          </div>

          <div className="text-left flex flex-col py-2">
            <h1 className="text-lg font-bold">Links</h1>
            {links.map((lang) => (
              <span key={lang} className="text-sm font-thin underline">
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white w-3/4 px-10 py-10 flex flex-col">
          <Section title="Profile" description={profile}></Section>
          <Title title="Employment History"></Title>
          {employmentHistory.map((wh) => (
            <WorkHistory key={wh.start} {...wh}></WorkHistory>
          ))}
          <Title title="Education"></Title>
          {education.map((edu) => (
            <Education key={edu.degree} {...edu}></Education>
          ))}
        </div>
      </div>
    </div>
  );
}
